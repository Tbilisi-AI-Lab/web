// Translate.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function Translate() {
  const { t, i18n } = useTranslation();
  const [isGeorgian, setIsGeorgian] = React.useState(true);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsGeorgian(!isGeorgian);
  };

  return (
    <div className="text-white flex flex-col items-center">
      {isGeorgian ? (
        <div
          className="w-8 h-8 cursor-pointer"
          onClick={() => changeLanguage('ge')}
        >
          Geo
        </div>
      ) : (
        <div
          className="w-8 h-8 cursor-pointer"
          onClick={() => changeLanguage('en')}
        >
          {' '}
          Eng
        </div>
      )}
    </div>
  );
}

export default Translate;
