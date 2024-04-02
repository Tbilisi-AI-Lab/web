import Facebook from './ui/FacebookForDark';
import Instagram from './ui/InstagramForDark';
import LinkedIn from './ui/LinkedInForDark';
import Tiktok from './ui/TiktokForDark';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Icons = () => {
  return (
    <div
      className={`animated-icons flex justify-center gap-8`}
      initial={{ opacity: 0, y: 20 }}
    >
      <Link to={'https://www.google.com'} target="_blank">
        <Facebook />
      </Link>
      <Link to={'https://www.google.com'} target="_blank">
        <Instagram />
      </Link>
      <Link to={'https://www.google.com'} target="_blank">
        <LinkedIn />
      </Link>
      <Link to={'https://www.google.com'} target="_blank">
        <Tiktok />
      </Link>
    </div>
  );
};

export default Icons;
