"use client"
import React, { useState } from 'react';

const FAQ = ({question, answer}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200 p-4 w-full">
      <div
        className="flex items-center justify-between cursor-pointer bg-slate-200 p-4 rounded-md"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-semibold text-gray-800">
          {question}
        </h2>
        <svg
          className={`w-5 h-5 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={
              isOpen
                ? 'M5 15l7-7 7 7'
                : 'M19 9l-7 7-7-7'
            }
          ></path>
        </svg>
      </div>
      {isOpen && (
        <p className="mt-2 text-gray-600 bg-white p-4">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQ;
