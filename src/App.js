import { Route, Routes } from "react-router-dom";
import {Home} from "./pages/Home/Home";
import React from "react";

function App() {
  return (
  	<Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
export default App;