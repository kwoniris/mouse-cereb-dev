import React, { useEffect, useState } from 'react';
import { Vitessce } from 'vitessce';
import { e11Config } from './e11-config';
import { e13Config } from './e13-config';
import { e15Config } from './e15-config';
import { e17Config } from './e17-config';

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
    } else if (configParam === 'e15') {
      config = e15Config;
    } else if (configParam === 'e17') {
      config = e17Config
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