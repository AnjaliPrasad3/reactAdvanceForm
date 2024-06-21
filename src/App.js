import React from 'react';
import SurveyForm from './components/SurveyForm';
import { FormProvider } from './components/FormContext';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Advanced Survey Form</h1>
      <FormProvider>
        <SurveyForm />
      </FormProvider>
    </div>
  );
}

export default App;