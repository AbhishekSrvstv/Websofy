import { useEffect, useState } from 'react';
import './Loader.css';

function Loader() {
  const [loading, setLoading] = useState(true);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const finish = () => {
      setTimeout(() => setHide(true), 800);
      setTimeout(() => setLoading(false), 1300);
    };

    if (document.readyState === 'complete') {
      finish();
    } else {
      window.addEventListener('load', finish);
      return () => window.removeEventListener('load', finish);
    }
  }, []);

  if (!loading) return null;

  return (
    <div className={`loader-overlay ${hide ? 'loader-hide' : ''}`}>
      <div className="loader-box">
        <div className="loader-ring"></div>
        <div className="loader-logo-wrap">
          <img src="/Websofy_Logo2.png" alt="Websofy" className="loader-logo" />
        </div>
      </div>
    </div>
  );
}

export default Loader;