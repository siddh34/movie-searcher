import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./screens/signup";
import Mainpage from "./screens/mainpage";

// Without redux, impliment aws cognito, display random data to user

function App() {
  return (
    <>
      <h1 className="text-center">Movie Searcher</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route exact path="/main" element={<Mainpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
