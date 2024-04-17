import React from 'react';

const ChildComponent2 = ({ onOptionSelect }) => {
  const handleClick = () => {
    onOptionSelect('Option 2');
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
      onClick={handleClick}
    >
      Select Option 2
    </button>
  );
};

export default ChildComponent2;