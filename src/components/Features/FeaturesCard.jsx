import React from 'react';

function Features({ heading, text, icon, children }) {
  return (
    <div className="flex justify-center items-center flex-col gap-4">
      <div>
        <div className="p-2 border rounded-xl w-fit">{icon}</div>
      </div>
      <div className="flex flex-col gap-1 items-center md:max-w-sm">
        <h4 className="text-lg font-semibold text-primary-text">{heading}</h4>
        <p className="text-center text-secondary-text">{text}</p>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Features;
