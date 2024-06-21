import { useContext } from 'react';
import { FormContext } from './FormContext';
import { validateForm } from './useValidation';
import { fetchAdditionalQuestions } from './api';

export const useForm = () => {
  const {
    formData,
    setFormData,
    errors,
    setErrors,
    additionalQuestions,
    setAdditionalQuestions,
    showSummary,
    setShowSummary,
  } = useContext(FormContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSectionChange = (section, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  const handleAdditionalQuestionChange = (id, value) => {
    setFormData((prevData) => ({
      ...prevData,
      additionalAnswers: {
        ...prevData.additionalAnswers,
        [id]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const questions = await fetchAdditionalQuestions(formData.surveyTopic);
      setAdditionalQuestions(questions);
      setShowSummary(true);
      console.log('Form submitted:', formData);
      console.log('Additional questions:', questions);
    }
  };

  return {
    formData,
    errors,
    additionalQuestions,
    showSummary,
    handleChange,
    handleSectionChange,
    handleAdditionalQuestionChange,
    handleSubmit,
  };
};