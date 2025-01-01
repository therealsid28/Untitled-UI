import React, { useState } from 'react';
import { MinusCircle, PlusCircle } from 'lucide-react';

function Faq() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  return (
    <>
      {data.map((elm, inx) => (
        <div key={inx}>
          <div
            className="flex justify-between gap-2 cursor-pointer"
            onClick={() => toggle(inx)}
          >
            <div>
              <h4 className="text-lg mb-2 font-medium">{elm.question}</h4>
              {selected == inx && (
                <p className={`text-secondary-text`}>{elm.answer}</p>
              )}
            </div>
            <div className="cursor-pointer">
              {selected == inx ? <MinusCircle /> : <PlusCircle />}
            </div>
          </div>
          {inx + 1 !== data.length ? (
            <div className="my-8">
              <div className="border"></div>
            </div>
          ) : (
            ''
          )}
        </div>
      ))}
    </>
  );
}

const data = [
  {
    question: 'Is there a free trial available?',
    answer:
      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    question: 'Can I change my plan later?',
    answer:
      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    question: 'Can other info be added to an invoice?',
    answer:
      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    question: 'How does billing work?',
    answer:
      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    question: 'How do I change my account email?',
    answer:
      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
];

export default Faq;
