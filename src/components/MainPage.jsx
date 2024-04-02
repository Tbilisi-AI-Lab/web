import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div className="main-title">
      <h1>{t('welcomeTo')}</h1>
      <h1>
        the <span className="gradient-background">Ai Lab</span> era
      </h1>
    </div>
  );
};

export default MainPage;
