import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DosaPage from "./pages/items/Dosa";
import Home from "./pages/home";
import Splash from "./components/splash";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      {showSplash ? (
        <Splash onFinish={() => setShowSplash(false)} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dosa" element={<DosaPage />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
