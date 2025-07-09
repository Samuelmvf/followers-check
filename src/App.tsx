import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { AppRoutes } from "./enums/routes";
import AnalyzeFollowersPage from "./pages/analyze-followers/AnalyzeFollowersPage";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={AppRoutes.HOME} element={<HomePage />} />
        <Route path={AppRoutes.SIGN_IN} element={<SignInPage />} />
        <Route path={AppRoutes.SIGN_UP} element={<SignUpPage />} />
        <Route path={AppRoutes.ANALYZE} element={<AnalyzeFollowersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
