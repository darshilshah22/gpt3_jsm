import React from 'react';
import './App.css';

import { Footer, Header, Blog, Possibility, WhatGPT3, Features } from "./containers";
import { Article, Brand, CTA, Navbar } from "./components";

const App = () => {
  return (
    <div>
        <div className='gradient_bg'>
            <Navbar />
            <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App;