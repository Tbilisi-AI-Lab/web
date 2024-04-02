import React from 'react';
import Translate from '../i18n/Translate';

const Header = () => {
  return (
    <header className="flex justify-between">
      <h1 className="text-white">AI LAb TBiliSi</h1>
      <Translate />
    </header>
  );
};

export default Header;
