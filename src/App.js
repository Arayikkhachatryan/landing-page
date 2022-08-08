import './App.css';
import "@fontsource/open-sans";
import Header from './components/header/Header';
import MainImgFrame from './components/main/main-img-frame/MainImgFrame';
import MainDevServices from './components/main/main-dev-services/MainDevServices';
import MainExpertise from './components/main/main-expertise/MainExpertise';
import MainPortfolio from './components/main/main-portfolio/MainPortfolio';
import MainContactUs from './components/main/main-contact-us/MainContactUs';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <MainImgFrame />
      <MainDevServices />
      <MainExpertise />
      <MainPortfolio />
      <MainContactUs/>
      <Footer/>
    </>

  );
}

export default App;
