import React, { useState } from 'react';
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="parent flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-8">
        Selected Option: {selectedOption || 'None'}
      </h1>
      <div className="flex space-x-4">
        <ChildComponent1 onOptionSelect={handleOptionSelect} />
        <ChildComponent2 onOptionSelect={handleOptionSelect} />
      </div>
    </div>
  );
};

export default App;