import React from 'react';

function FooterLinkItem({ newItem, text }) {
  return (
    <span className="flex items-center gap-2">
      <p className="font-semibold text-secondary-text">{text}</p>
      {newItem == true ? (
        <span className="font-medium text-xs border rounded-3xl py-1 px-2 bg-new-bg text-new-text border-new-border">
          New
        </span>
      ) : (
        ''
      )}
    </span>
  );
}

export default FooterLinkItem;
