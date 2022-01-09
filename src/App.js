import logo from './logo.svg';
import './App.css';
import './AboutUs.css'
import './WhoWeAre.css'
import PricesUnbeatable from'./PricesUnbeatable';

import './PricesUnbeatable.css';
import AboutUs from './AboutUs';
import WhoWeAre from './WhoWeAre';
import CompanySubscription from './CompanySubscription';
import './CompanySubscription.css'
import GiftSubscription from './GiftSubscription';
import AskedQuestion from './AskedQuestion';
import './AskedQuestion.css'
import Footer from './Footer';
import './Footer.css';

function App() {
  return (
    <div  className='App'>
     <PricesUnbeatable/>
     <AboutUs/>
     <WhoWeAre/>
     <CompanySubscription/>
     <GiftSubscription/>
     <AskedQuestion/>
     <Footer/>
    </div>
  );
}

export default App;
