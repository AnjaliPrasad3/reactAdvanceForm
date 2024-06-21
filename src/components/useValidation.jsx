export const validateForm = (formData) => {
    const errors = {};
  
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }
  
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
  
    if (!formData.surveyTopic) {
      errors.surveyTopic = 'Survey Topic is required';
    }
  
    if (formData.surveyTopic === 'Technology') {
      if (!formData.technologySection.favoriteLanguage) {
        errors.favoriteLanguage = 'Favorite Programming Language is required';
      }
      if (!formData.technologySection.yearsOfExperience) {
        errors.yearsOfExperience = 'Years of Experience is required';
      }
    }
  
    if (formData.surveyTopic === 'Health') {
      if (!formData.healthSection.exerciseFrequency) {
        errors.exerciseFrequency = 'Exercise Frequency is required';
      }
      if (!formData.healthSection.dietPreference) {
        errors.dietPreference = 'Diet Preference is required';
      }
    }
  
    if (formData.surveyTopic === 'Education') {
      if (!formData.educationSection.highestQualification) {
        errors.highestQualification = 'Highest Qualification is required';
      }
      if (!formData.educationSection.fieldOfStudy.trim()) {
        errors.fieldOfStudy = 'Field of Study is required';
      }
    }
  
    if (!formData.feedback.trim() || formData.feedback.length < 50) {
      errors.feedback = 'Feedback is required and must be at least 50 characters';
    }
  
    return errors;
  };