import React, { useState, useEffect } from 'react';

const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log('New lang or text');
  }, [language, text]);
  return <div>Convert</div>;
};

export default Convert;
