import React from 'react';
import "./home.css";
import Header from "./header/index.js";
import Body from "./body/index.js";
import Footer from "./footer/index.js";

function Home() {
  return (
    <div className="home">
        <div>
            <Header />
        </div>

        <div>
            <Body />
        </div>

        <div>
            <Footer />
        </div>


    </div>
  )
}

export default Home
