import React, { Component } from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
import favicon from '../images/favicon.png';
import Nav from './Nav/Nav';
import Selfie from '../images/selfie.png';
import Elipse from '../images/circles.png';
import ScyreMain from '../images/scyre-main.png';
import GemaMain from '../images/gema-main.png';
import AvianMain from '../images/avian-main.png';
import DebitzMain from '../images/debitz-main.png';
import SelfieV2 from '../images/selfieV2.png';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Eric Tsai · Product Designer</title>
          <link rel="shortcut icon" type="image/png" href={favicon}></link>
          <link rel="stylesheet" href="https://use.typekit.net/mup7xxt.css"></link>
        </Helmet>
        <Nav  className="navbar" />
          <div className="mainBG">
            <img className="selfieV2" alt="img" src={SelfieV2} />
            <div className="eric-tsai">
                <h1>eric tsai.</h1>
                <p>Hi, I’m Eric Tsai, a product designer focused on solving user problems by translating feedback into accessible interactive designs.</p>
                <p>I believe great products derive from the combination of empathy, rapid iteration, and the continuous search for better solutions.</p>
                <a href="/about">more about me</a>
            </div>
            <img className="selfie" alt="img" src={Selfie} />
          </div>

          <img className="circles" alt="img" src={Elipse} />

          <div className="projectsBG">
            <div className="projectsBG-header">
            <h1>projects.</h1>
            </div>
           
            <div className="projectScyre">
              <img className="scyre-main" alt="img" src={ScyreMain} />
              <div className="ScyreDesc">
                <h2>Scyre</h2>
                <h5>Mobile App / Messaging / IOS</h5>
                <p>Scyre is a messaging platform for your skillful identity that allows you to combine your creative processes with your professional network.</p>
                <a href="/Scyre" >Enter Project</a>
              </div>
            </div>



            <div className="projectGema">
            <div className="GemaDesc">
                <h2>Gema</h2>
                <h5>Desktop App / Gaming</h5>
                <p>GEMA is a digital distribution / online gaming desktop application for PC games which includes online matchmaking and social networking services.</p>
                <a href="/gema" >Enter Project</a>
              </div>

              <img className="gema-main" alt="img" src={GemaMain} />

              <div className="GemaDesc-m">
                <h2>Gema</h2>
                <h5>Desktop App / Gaming</h5>
                <p>GEMA is a digital distribution / online gaming desktop application for PC games which includes online matchmaking and social networking services.</p>
                <a href="/gema" >Enter Project</a>
              </div>
            </div>


            <div className="projectAvian">
              <img className="avian-main" alt="img" src={AvianMain} />
              <div className="AvianDesc">
                <h2>Avian</h2>
                <h5>B2B / SaaS / Desktop App</h5>
                <p>Avian is a B2B SaaS product for high growth companies that allows them to keep track of relevant data points while communicating with their team.</p>
                <a href="/avian" >Enter Project</a>
              </div>
            </div>


            <div className="projectDebitz">
            <div className="DebitzDesc">
                <h2>Debitz</h2>
                <h5>Banking / Payment / Mobile App</h5>
                <p>Debitz is a banking / payment application that allows users to keep track of their savings and checking accounts, budget their money, and make payments.</p>
                <a href="/" >Enter Project</a>
              </div>

              <img className="debitz-main" alt="img" src={DebitzMain} />

              <div className="DebitzDesc-m">
                <h2>Debitz</h2>
                <h5>Banking / Payment / Mobile App</h5>
                <p>Debitz is a banking / payment application that allows users to keep track of their savings and checking accounts, budget their money, and make payments.</p>
                <a href="/debitz" >Enter Project</a>
              </div>
            </div>

          </div>
      </div>
    );
  }
}

export default App;
