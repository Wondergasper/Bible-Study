import { useState, useEffect } from 'react';
import '../preloader/preloader.css'

const App = () => {
  const [loading, setLoading] = useState(true);
  const [loadPercentage, setLoadPercentage] = useState(0);

  useEffect(() => {
    const incrementLoader = () => {
      setLoadPercentage((currentValue) => {
        const increment = Math.floor(Math.random() * 10) + 1;
        const nextValue = Math.min(currentValue + increment, 100);
        if (nextValue === 100) {
          setLoading(false);
        }
        return nextValue;
      });
    };

    const timer = setInterval(incrementLoader, 200);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {loading && (
        <div className="pre-loader">
          <div className="loader-content">
            <p>Loading...</p>
            <p>{loadPercentage}%</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
