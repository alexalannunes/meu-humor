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

      {/* insert mood */}
      <Route element={<></>} path="/new-mood" />
      {/* mood reports */}
      <Route element={<></>} path="/moods" />
      {/* profile */}
      <Route element={<></>} path="/me" />
    </Routes>
  );
}

export default App;
