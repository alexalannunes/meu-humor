import { Route, Routes } from "react-router-dom";

import { PageHome, PageSignIn, PageSignUp, ProtectedRoute } from "./pages";

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route element={<PageHome />} path="/" />
      </Route>
      <Route element={<PageSignUp />} path="/signup" />
      <Route element={<PageSignIn />} path="/signin" />
    </Routes>
  );
}

export default App;
