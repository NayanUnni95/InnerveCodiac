import { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: 'Who can participate in CodeQuest?',
    answer: 'Anyone interested in technology and innovation can participate.',
  },
  {
    question: 'Availabilty of food and resources',
    answer:
      'Food and Beverages would not be provided.But, internet Connectivity would be provided.',
  },
  {
    question: 'What are the additional benefits provided?',
    answer:
      'Registration ID CARDs, Notepad and Pen, Stickers,certificate of Participation etc would be provided.',
  },
  {
    question: 'Can we use any reference material during the contest?',
    answer:
      'Yes, participants can use reference material as long as it follows the guidelines.',
  },
  {
    question:
      'What is the participation policy regarding teams? Is participation exclusive to teams, and if so, what is the maximum team size?',
    answer:
      'Teams can have a maximum of 4 members, but solo participation is also allowed.',
  },
  {
    question: 'What is the format of hackathon?',
    answer:
      'Develop a working prototype within 10 hours (or)  present a well-structured idea(ideathon format) if a prototype is not completed',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${openIndex === index ? 'active' : ''}`}
        >
          <button className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span className="icon">{openIndex === index ? '▲' : '▼'}</span>
          </button>
          {openIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
