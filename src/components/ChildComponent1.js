import React from 'react';

const ChildComponent1 = ({ onOptionSelect }) => {
  const handleClick = () => {
    onOptionSelect('Option 1');
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
      onClick={handleClick}
    >
      <p>Select Option 1</p>
    </button>
  );
};

export default ChildComponent1;