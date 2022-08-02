import './App.css';
import Header from './components/header/Header';
import "@fontsource/open-sans";
import MainImgFrame from './components/main/main-img-frame/MainImgFrame';
import MainDevServices from './components/main/main-dev-services/MainDevServices';
import MainExpertise from './components/main/main-expertise/MainExpertise';
import MainPortfolio from './components/main/main-portfolio/MainPortfolio';
import MainContactUs from './components/main/main-contact-us/MainContactUs';

function App() {
  return (
    <>
      <Header />
      <MainImgFrame />
      <MainDevServices />
      <MainExpertise />
      <MainPortfolio />
      <MainContactUs/>
    </>

  );
}

export default App;
