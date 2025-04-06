import { useEffect, useState } from "react";
import "./splash.css";

export default function Splash({ onFinish }) {
  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    const secondTimer = setTimeout(() => {
      setShowSecond(true);
    }, 500); // show second text after 0.5s

    const finishTimer = setTimeout(() => {
      onFinish();
    }, 3000); // finish entire splash in 3s

    return () => {
      clearTimeout(secondTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div className="splash-container">
      <h1 className="splash-title fade-up">Veetin</h1>
      {showSecond && <h2 className="splash-subtitle fade-up">വീട്ടിന്ന്</h2>}
    </div>
  );
}
