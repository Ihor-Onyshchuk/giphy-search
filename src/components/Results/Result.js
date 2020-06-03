import React from 'react';
import { Spring } from 'react-spring/renderprops';

const Result = ({ result, i }) => {
  return (
    <Spring
      from={{ opacity: 0, transform: 'translateY(30px)' }}
      to={{ opacity: 1, transform: 'translateY(0px)' }}
      config={{ delay: i * 100 }}
    >
      {springProps => (
        <div style={springProps}>
          <img src={result.toJS().images.original.url} alt="gif" />
        </div>
      )}
    </Spring>
  );
};

export default Result;
