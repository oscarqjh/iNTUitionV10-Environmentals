import React from 'react';
import './progressBar.css'; // Make sure to import your CSS file

export default function ProgressBar({ value }) {
  return (
    <div role="progressbar" style={{ '--value': `${value}` }}>
      {/* You can add additional content or elements here if needed */}
    </div>
  );
}

