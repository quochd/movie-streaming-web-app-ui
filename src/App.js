import { ThemeProvider } from '@emotion/react';
import GlobalStyles from './styles/globalStyles';
import theme from './styles/theme';
import StyledButton from './components/common/Button';
import LoginPage from './components/pages/LoginPage';
import NavigationBar from './components/pages/NavigationBar';
import Banner from './components/pages/Banner';
import LandingPage from './components/pages/LandingPage';
import Favourites from './components/pages/Favourites';
import DetailedTrending from './components/pages/DetailedTrending';
// import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme} >
      <GlobalStyles />
      
        {/* <LandingPage/> */}

          {/* <Favourites /> */}

          <DetailedTrending />
    </ThemeProvider>
  );
}

export default App;
