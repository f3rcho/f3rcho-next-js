import React from 'react';

type SectionProps = {
  className: string;
  href: string;
  text: string;
  isSpan: boolean;
};

const Section = ({ className, href, text, isSpan = false }: SectionProps) => {
  console.log(isSpan, '<<<');

  return (
    <div>
      {isSpan ? (
        <a className={className} href={href}>
          <span className={className}>{text}</span>
        </a>
      ) : (
        <a className={className} href={href}>
          {text}
        </a>
      )}
    </div>
  );
};

export default Section;
