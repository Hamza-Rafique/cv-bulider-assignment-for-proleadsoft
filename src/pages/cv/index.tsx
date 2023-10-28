import React from 'react';
import PersonalInfo from './components/PersonalInfo';


const CV: React.FC = ({cvData}:any) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">
        {cvData.firstName} {cvData.lastName}'s CV
      </h1>

      <section title="Personal Information">
        <PersonalInfo data={cvData} />
      </section>

      <section title="Education History">
        {/* Render Education History Component */}
      </section>

      <section title="Work History">
        {/* Render Work History Component */}
      </section>

      <section title="Description and Links">
        {/* Render Description and Links Component */}
      </section>
    </div>
  );
};

export default CV;
