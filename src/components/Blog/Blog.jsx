import React from 'react';
import { ArrowUpRight } from 'lucide-react';

function Blog(props) {
  return (
    <div className="lg:max-w-sm">
      <div>
        <img src={props.blogImage} alt="" />
      </div>
      <div className="my-6">
        <h3 className="text-text font-semibold">{props.subHeading}</h3>
        <span className="flex justify-between items-center my-2">
          <h4 className="text-2xl font-semibold">{props.heading}</h4>
          <ArrowUpRight />
        </span>
        <p className="text-secondary-text">{props.text}</p>
      </div>
      <div className="flex gap-3 items-center">
        <div>
          <img src={props.avatarImage} alt="" />
        </div>
        <div className="flex flex-col justify-between">
          <span className="text-sm font-semibold">{props.name}</span>
          <span className="text-sm text-secondary-text">{props.date}</span>
        </div>
      </div>
    </div>
  );
}

export default Blog;
