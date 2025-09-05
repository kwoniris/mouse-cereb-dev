import React, { useEffect, useState } from 'react';
import { Vitessce } from 'vitessce';
import { e11Config } from './e11-config';
import { e13Config } from './e13-config';
// import { e15Config } from './e15-config';
// import { e17Config } from './e17-config';
import { e11ScaledConfig } from './e11-scaled-config';
import { e13ScaledConfig } from './e13-scaled-config';
import { e15ScaledConfig } from './e15-scaled-config';
import { e17ScaledConfig } from './e17-scaled-config';

export default function App() {
  const [viewConfig, setViewConfig] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const configParam = params.get('config');

    let config;
    if (configParam === 'e11') {
      config = e11Config;
    } else if (configParam === 'e13') {
      config = e13Config;
    } else if (configParam === 'e11-scaled') {
      config = e11ScaledConfig;
    } else if (configParam === 'e13-scaled') {
      config = e13ScaledConfig;
    } else if (configParam === 'e15-scaled') {
      config = e15ScaledConfig;
    } else if (configParam === 'e17-scaled') {
      config = e17ScaledConfig;
    }
    setViewConfig(config);
  }, []);

  return (
    <>
      {viewConfig ? (
        <Vitessce
          config={viewConfig}
          theme="light"
        />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}