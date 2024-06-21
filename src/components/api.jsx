export const fetchAdditionalQuestions = async (topic) => {
    // Simulating API call using localStorage
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(1000); // Simulate network delay
  
    const questions = {
      Technology: [
        { id: 1, question: 'What is your favorite tech stack?' },
        { id: 2, question: 'How often do you attend tech conferences?' },
      ],
      Health: [
        { id: 1, question: 'How many hours of sleep do you get per night?' },
        { id: 2, question: 'Do you have any chronic health conditions?' },
      ],
      Education: [
        { id: 1, question: 'What was your favorite subject in school?' },
        { id: 2, question: 'Do you plan to pursue further education?' },
      ],
    };
  
    localStorage.setItem('additionalQuestions', JSON.stringify(questions));
    const storedQuestions = JSON.parse(localStorage.getItem('additionalQuestions'));
    return storedQuestions[topic] || [];
  };