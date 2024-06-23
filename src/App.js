import { ThemeProvider } from '@emotion/react';
import GlobalStyles from './styles/globalStyles';
import theme from './styles/theme';
import LoginPage from './components/pages/LoginPage';
import NotFound from './components/pages/NotFound';
import LandingPage from './components/pages/LandingPage';
import Favourites from './components/pages/Favourites';
import DetailedTrending from './components/pages/DetailedTrending';
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login"); 
    }
  }, [isLoggedIn]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ThemeProvider theme={theme} >
      <GlobalStyles />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/detailed-trending" element={<DetailedTrending />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
