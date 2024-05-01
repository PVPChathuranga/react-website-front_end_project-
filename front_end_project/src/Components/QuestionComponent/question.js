import React, { useState } from 'react';
import './question.css';

const FAQ = () => {
  const [showAnswer, setShowAnswer] = useState({});

  const toggleAnswer = (question) => {
    setShowAnswer(prevState => ({
      ...prevState,
      [question]: !prevState[question]
    }));
  };

  return (
    <div className='faq-container'>
      <div className="faq-section">
        <h2>Frequently asked questions</h2>
        <div className="faq">
          <div className="question">
            <h3>Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?</h3>
            <p style={{ display: showAnswer['question1'] ? 'block' : 'none' }}>Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.</p>
            <button onClick={() => toggleAnswer('question1')}>
              {showAnswer['question1'] ? '-' : '+'}
            </button>
          </div>
          <div className="question">
            <h3>Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?</h3>
            <p style={{ display: showAnswer['question2'] ? 'block' : 'none' }}>Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.</p>
            <button onClick={() => toggleAnswer('question2')}>
              {showAnswer['question2'] ? '-' : '+'}
            </button>
          </div>
          <div className="question">
            <h3>Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?</h3>
            <p style={{ display: showAnswer['question3'] ? 'block' : 'none' }}>Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.</p>
            <button onClick={() => toggleAnswer('question3')}>
              {showAnswer['question3'] ? '-' : '+'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
