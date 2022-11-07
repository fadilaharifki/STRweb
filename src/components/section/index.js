import React from 'react';

import './style.scss';

export function Section({ children, className }) {
  return <div className={`pd-section ${className}`}>{children}</div>;
}

export default { Section };
