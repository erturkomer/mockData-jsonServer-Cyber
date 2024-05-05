import React, { useState } from 'react';

const accordion = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='accordion' style={{ width: '256px', overflow: 'hidden' }}>
      <div
        onClick={toggleAccordion}
        style={{
          cursor: 'pointer',
          height: isOpen ? '400px' : '48px',
          transition: 'height 0.3s ease-in-out',
          background: 'white',
          overflow: 'hidden',
          position: 'relative', // Make sure SVG rotates around its center
        }}
      >
        <div>
          <div className='accordion-top'>
            <p>{props.name}</p>
            <p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease-in-out' }}
              >
                <path
                  d="M16.59 8.29498L12 12.875L7.41 8.29498L6 9.70498L12 15.705L18 9.70498L16.59 8.29498Z"
                  fill="black"
                />
              </svg>
            </p>
          </div>
        </div>
        {isOpen && <div className='accordion-content'>Accordion Content</div>}
      </div>
      {/* stick'ı her zaman göster */}
    </div>
  );
};

export default accordion;