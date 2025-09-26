import { Route, Routes } from "react-router-dom";

import { PageIndex } from "./pages";
import { PageRegister } from "./pages/auth/register";

function App() {
  return (
    <Routes>
      <Route element={<PageIndex />} path="/" />
      <Route element={<PageRegister />} path="/register" />
    </Routes>
  );
}

export default App;
