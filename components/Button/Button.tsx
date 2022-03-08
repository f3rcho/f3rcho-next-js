import React from 'react';

type ButtonProps = {
  className: string;
  href: string;
  text: string;
};

const Button = ({ className, href, text }: ButtonProps) => {
  return (
    <button type='button' className={className}>
      {text} <a href={href}></a>
    </button>
  );
};

export default Button;
