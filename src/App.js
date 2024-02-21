import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Error } from "./Pages";
import { ParallaxProvider } from 'react-scroll-parallax';


function App() {
  const containerRef = useRef(null)
  return (
    <>
      <ParallaxProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ParallaxProvider>
    </>
  );
}

export default App;
