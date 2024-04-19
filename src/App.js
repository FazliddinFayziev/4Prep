import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home,  Error, Contact } from "./Pages";
import { ParallaxProvider } from 'react-scroll-parallax';
import Loading from "./components/Loading";


function App() {
  return (
    <>
      <ParallaxProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </ParallaxProvider>
    </>
  );
}

export default App;
