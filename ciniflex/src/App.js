import "./App.css";
import { useState, createContext } from "react";
import { HomePage } from "./page/homepage/HomePage";
import LoginPage from "./page/loginpage/LoginPage";
import { Routes, Route } from "react-router-dom";
import NowShowingPage from "./page/nowShowingPage/NowShowingPage";
import AllMovies, { MoviesPage } from "./page/allMoviesPage/MoviesPage";
import ProtectedRoutes from "./components/protectedRoutes/protectedRoutes";
import { NAVIGATION_CONSTANTS } from "./constants/pageConstant";

const authHandler = {
  isLoggedIn: false,
  name: "",
};

export const loginContext = createContext(authHandler);

function App() {
  const [loginStatus, setLoginStatus] = useState({});
  return (
    <loginContext.Provider value={{ loginStatus, setLoginStatus }}>
      <>
        <Routes>
          <Route path={NAVIGATION_CONSTANTS.HOME_PAGE} element={<HomePage />} />
          <Route
            path={NAVIGATION_CONSTANTS.ALL_MOVIE}
            element={<MoviesPage />}
          />
          <Route
            path={NAVIGATION_CONSTANTS.LOGIN_PAGE}
            element={<LoginPage setLoginStatus={setLoginStatus} />}
          />
          <Route
            path={NAVIGATION_CONSTANTS.NOW_SHOWING}
            element={
              <ProtectedRoutes
                isAuth={loginStatus.isLoggedIn}
                redirectPath={NAVIGATION_CONSTANTS.LOGIN_PAGE}
              >
                <NowShowingPage />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </>
    </loginContext.Provider>
  );
}

export default App;
