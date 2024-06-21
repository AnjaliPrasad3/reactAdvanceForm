import React from 'react';
import { useForm } from './useForm';

const SurveyForm = () => {
  const {
    formData,
    errors,
    additionalQuestions,
    showSummary,
    handleChange,
    handleSectionChange,
    handleAdditionalQuestionChange,
    handleSubmit,
  } = useForm();

  const renderField = (label, name, value, onChange, error, type = 'text') => (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">{label}:</label>
      <input
        type={type}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );

  const renderSelect = (label, name, value, onChange, error, options) => (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">{label}:</label>
      <select
        className={`form-select ${error ? 'is-invalid' : ''}`}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {renderField('Full Name', 'fullName', formData.fullName, handleChange, errors.fullName)}
        {renderField('Email', 'email', formData.email, handleChange, errors.email, 'email')}
        
        {renderSelect('Survey Topic', 'surveyTopic', formData.surveyTopic, handleChange, errors.surveyTopic, ['Technology', 'Health', 'Education'])}

        {formData.surveyTopic === 'Technology' && (
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Technology Section</h5>
              {renderSelect('Favorite Programming Language', 'favoriteLanguage', formData.technologySection.favoriteLanguage, (e) => handleSectionChange('technologySection', 'favoriteLanguage', e.target.value), errors.favoriteLanguage, ['JavaScript', 'Python', 'Java', 'C#'])}
              {renderField('Years of Experience', 'yearsOfExperience', formData.technologySection.yearsOfExperience, (e) => handleSectionChange('technologySection', 'yearsOfExperience', e.target.value), errors.yearsOfExperience, 'number')}
            </div>
          </div>
        )}

        {formData.surveyTopic === 'Health' && (
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Health Section</h5>
              {renderSelect('Exercise Frequency', 'exerciseFrequency', formData.healthSection.exerciseFrequency, (e) => handleSectionChange('healthSection', 'exerciseFrequency', e.target.value), errors.exerciseFrequency, ['Daily', 'Weekly', 'Monthly', 'Rarely'])}
              {renderSelect('Diet Preference', 'dietPreference', formData.healthSection.dietPreference, (e) => handleSectionChange('healthSection', 'dietPreference', e.target.value), errors.dietPreference, ['Vegetarian', 'Vegan', 'Non-Vegetarian'])}
            </div>
          </div>
        )}

        {formData.surveyTopic === 'Education' && (
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Education Section</h5>
              {renderSelect('Highest Qualification', 'highestQualification', formData.educationSection.highestQualification, (e) => handleSectionChange('educationSection', 'highestQualification', e.target.value), errors.highestQualification, ['High School', 'Bachelor\'s', 'Master\'s', 'PhD'])}
              {renderField('Field of Study', 'fieldOfStudy', formData.educationSection.fieldOfStudy, (e) => handleSectionChange('educationSection', 'fieldOfStudy', e.target.value), errors.fieldOfStudy)}
            </div>
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="feedback" className="form-label">Feedback:</label>
          <textarea
            className={`form-control ${errors.feedback ? 'is-invalid' : ''}`}
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            rows="3"
          ></textarea>
          {errors.feedback && <div className="invalid-feedback">{errors.feedback}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {additionalQuestions.length > 0 && (
        <div className="mt-4">
          <h3>Additional Questions:</h3>
          {additionalQuestions.map((q) => (
            <div key={q.id} className="mb-3">
              <label htmlFor={`question-${q.id}`} className="form-label">{q.question}</label>
              <input
                type="text"
                className="form-control"
                id={`question-${q.id}`}
                value={formData.additionalAnswers[q.id] || ''}
                onChange={(e) => handleAdditionalQuestionChange(q.id, e.target.value)}
              />
            </div>
          ))}
        </div>
      )}

      {showSummary && (
        <div className="mt-4">
          <h3>Form Summary</h3>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Field</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Full Name</th>
                <td>{formData.fullName}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{formData.email}</td>
              </tr>
              <tr>
                <th>Survey Topic</th>
                <td>{formData.surveyTopic}</td>
              </tr>
              {formData.surveyTopic === 'Technology' && (
                <>
                  <tr>
                    <th>Favorite Programming Language</th>
                    <td>{formData.technologySection.favoriteLanguage}</td>
                  </tr>
                  <tr>
                    <th>Years of Experience</th>
                    <td>{formData.technologySection.yearsOfExperience}</td>
                  </tr>
                </>
              )}
              {formData.surveyTopic === 'Health' && (
                <>
                  <tr>
                    <th>Exercise Frequency</th>
                    <td>{formData.healthSection.exerciseFrequency}</td>
                  </tr>
                  <tr>
                    <th>Diet Preference</th>
                    <td>{formData.healthSection.dietPreference}</td>
                  </tr>
                </>
              )}
              {formData.surveyTopic === 'Education' && (
                <>
                  <tr>
                    <th>Highest Qualification</th>
                    <td>{formData.educationSection.highestQualification}</td>
                  </tr>
                  <tr>
                    <th>Field of Study</th>
                    <td>{formData.educationSection.fieldOfStudy}</td>
                  </tr>
                </>
              )}
              <tr>
                <th>Feedback</th>
                <td>{formData.feedback}</td>
              </tr>
              {additionalQuestions.map((q) => (
                <tr key={q.id}>
                  <th>{q.question}</th>
                  <td>{formData.additionalAnswers[q.id] || ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SurveyForm;