import React from 'react';

interface SubmitButtonProps {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ label, onClick }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="w-full bg-[#0a1963] hover:bg-[#0f248a] text-white font-medium py-2.5 px-4 rounded-lg shadow-sm transition-colors duration-200 mt-2"
    >
      {label}
    </button>
  );
};

export default SubmitButton;