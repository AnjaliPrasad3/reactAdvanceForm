import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    surveyTopic: '',
    technologySection: {
      favoriteLanguage: '',
      yearsOfExperience: '',
    },
    healthSection: {
      exerciseFrequency: '',
      dietPreference: '',
    },
    educationSection: {
      highestQualification: '',
      fieldOfStudy: '',
    },
    feedback: '',
    additionalAnswers: {},
  });

  const [errors, setErrors] = useState({});
  const [additionalQuestions, setAdditionalQuestions] = useState([]);
  const [showSummary, setShowSummary] = useState(false);

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        errors,
        setErrors,
        additionalQuestions,
        setAdditionalQuestions,
        showSummary,
        setShowSummary,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};