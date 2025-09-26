import { Route, Routes } from "react-router-dom";

import { PageIndex } from "./pages";
import { PageSignIn } from "./pages/auth/signin";
import { PageSignUp } from "./pages/auth/signup";

function App() {
  return (
    <Routes>
      <Route element={<PageIndex />} path="/" />
      <Route element={<PageSignUp />} path="/signup" />
      <Route element={<PageSignIn />} path="/signin" />
    </Routes>
  );
}

export default App;
