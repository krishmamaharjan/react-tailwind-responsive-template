import Form from "./Components/Practice/Form.jsx";
import Header from "./Components/Practice/Header.jsx";
// import Footer from "./Components/Practice/Footer.jsx";
import Home from "./Pages/Home.jsx"
import { TailwindExample } from "./Components/Practice/TailwindExample.jsx";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import SecondHero from "./Components/SecondHero.jsx";
import NewsLetter from "./Components/NewsLetter.jsx";
import Cards from "./Components/Cards.jsx";
import Footer2 from "./Components/Footer.jsx"


const App = () => {
    return(
        <div>
            {/* <Form /> */}
            {/* <TailwindExample /> */}

            {/* <Header/> */}
            {/* <Footer/> */}

            {/* <Home/> */}
            <Navbar/>
            <Hero/>
            <SecondHero/>
            <NewsLetter/>
            <Cards />
            <Footer2 />
            {/* <BrowserRoute>
                <Routes> */}
                    
                {/* </Routes>
            </BrowserRoute> */}
        </div>
    )
}

export default App;

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import TypedTest from './Components/TypedTest.jsx';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<TypedTest />);