import React, { useEffect, useState } from 'react';
import { Vitessce } from 'vitessce';
import { e11Config } from './e11-config';
import { e12Config } from './e12-config';
import { e13Config } from './e13-config';
import { p0Config } from './p0-config';
import { p4Config } from './p4-config';
import LandingPage from './LandingPage';

export default function App() {
  const [viewConfig, setViewConfig] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const configParam = params.get('config');

    let config = null;
    if (configParam === 'e11') {
      config = e11Config;
    } else if (configParam === 'e12') {
      config = e12Config;
    } else if (configParam === 'e13') {
      config = e13Config;
    } else if (configParam === 'p0') {
      config = p0Config;
    } else if (configParam === 'p4') {
      config = p4Config;
    }

    setViewConfig(config);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {viewConfig ? (
        <Vitessce config={viewConfig} theme="light" />
      ) : (
        <LandingPage />
      )}
    </>
  );
}
