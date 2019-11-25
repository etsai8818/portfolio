import React, { Component } from 'react';
import '../App.css';
import { Helmet } from 'react-helmet';
import favicon from '../../images/favicon.png';
import Nav from '../Nav/Nav';
import Main from '../../images/gema-main-study.png';
import Tabs from '../../images/gema-tabs.png';
import theMVP from '../../images/gema-mvp.png';
import Users from '../../images/gema-users.png';
import Wireframe from '../../images/gema-wireframe.png';
import Final1 from '../../images/gema-final-1.png';
import Final2 from '../../images/gema-final-2.png';
import Final3 from '../../images/gema-final-3.png';
import Final4 from '../../images/gema-final-4.png';

class Gema extends Component {
  render() {
    return (
      <div id="wrapper">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Eric Tsai · Gema Design</title>
          <link rel="shortcut icon" type="image/png" href={favicon}></link>
          <link rel="stylesheet" href="https://use.typekit.net/mup7xxt.css"></link>
        </Helmet>
        <Nav  className="navbar" />

          <div className="projectsBG-studies">
            <div className="studyContainer">
            <div className="projectsBG-links">
            <a href="/" className="backLink">Back to Designs</a>
            <a href="/avian" className="nextLink">Next Project</a>
            </div>
           
            <div className="projectScyre-study">
              <img className="scyre-main-study" id="gema-main-study-img" alt="img" src={Main} />

              <div className="aboutScyre" id="scyre-1">
                <h3>Gema</h3>
                <p>GEMA is a digital distribution / online gaming desktop application for PC games which includes online matchmaking and social networking services.</p>
              </div>

              <div className="aboutScyre" id="scyre-2">
                <h3>Problem</h3>
                <p>Almost every PC gamer needs to currently operate 3-4 programs simultaneously on their computer just to play in a way they enjoy — currently, all AAA gaming companies (EA, Valve, Ubisoft, Blizzard, etc.) have created their own desktop applications for PC games; this leads to the gamers having to download multiple game clients and having a mess of a library. Further, many avid gamers like to chat, stream, and connect with their online friends at the same time. Ultimately, not many people’s PC can handle the amount of stress of operating multiple applications at once.</p>
              </div>

              <div className="aboutScyre" id="scyre-2">
                <h3>Goal</h3>
                <p>To create a gaming application that unifies the features of other great gaming applications — this includes: A unified library, online matchmaking services, social networking features, competitive aspects and more.</p>
              </div>

              <div className="aboutScyre" id="scyre-3">
                <h3>Role:</h3>
                <p>Founder, Product Designer, Developer</p>
              </div>

              <div className="aboutScyre" id="scyre-3">
                <h3>Project Scale:</h3>
                <p>November 2018 - March 2019</p>
              </div>

              <div className="aboutScyre" id="scyre-1">
                <h3>Tools Used:</h3>
                <p>Adobe XD<br/>Adobe Illustrator<br/>PHP<br/>MySQL<br/>HTML / CSS / Javascript</p>
              </div>

              <div className="aboutScyre" id="scyre-1">
                <h3>Insights from Research Phase</h3>
                <img className="studyTabs" alt="img" src={Tabs} />
                <p>My next approach was to create an MVP that includes four main components to the desktop application: A game store section, a unified game library (combining the user’s games from their existing libraries), a competitive ‘arena,’ and a community side.</p>
              </div>

              <div className="aboutScyre" id="scyre-2">
                <h3>Creating the MVP</h3>
                <p>For GEMA’s MVP, I created an interactive prototype of the desktop application and shared it in numerous places to gain feedback (sent to gaming friends, reddit forums, steam discussions, etc.). Along with the interactive prototype, I created a website for “Early Access” sign ups with a community feature where users could learn more about the product and share their ideas on it. This took roughly 4 weeks.</p>
              </div>

              <img className="mvp" id="studyImg" alt="img" src={theMVP} />

              <div className="aboutScyre" id="scyre-1">
                <h3>Gaining Users and Getting User Feedback</h3>
                <p>Gamers are very visual people, so I spent a day editing an ‘action-packed’ promotional video to post on disparate websites to gain initial users to get their feedback. After posting the prototype and the promotional video on many gaming-related sites, around 1,200 people signed up for GEMA the first week to check out the product or what it would become. GEMA’s “Early Access” website had a ‘Community’ page where most people would leave feedback or just their genuine thoughts on the product. Nonetheless, notes were taken from all posts so we would iterate and improve.</p>
              </div>

              <img className="users" id="studyImg" alt="img" src={Users} />
              <div className="responsive">
              <iframe title="video" id="vid" className="gema-vid" src="https://www.youtube.com/embed/dBUr4hMApXc" frameborder="0" wmode="Opaque" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <h2 className="vid-label">Gema's Promo Video</h2>

              <div className="aboutScyre" id="scyre-1">
                <h3>Iterating</h3>
                <p>Many of our users enjoyed the thought process behind the project and loved the idea of the product — a small amount of users would request particular features or changes to the designs, whether it be for colors, icons, user flow, etc, all of which were helpful. After reviewing all the feedback from GEMA’s users, we iterated and pivoted our design in a way that utilizes the entire space while having a more modern and contemporary approach. First we started with wireframes of how we wanted to go about this.</p>
              </div>

              <div className="aboutScyre" id="scyre-1">
                <h3>Wireframes</h3>
                <p>To begin our pivot and iteration for the design of Gema’s desktop application, we would build on ideas and sketch out low fidelity wireframes based on our user feedback.</p>
              </div>

              <img className="wireframes" id="studyImg" alt="img" src={Wireframe} />

              <div className="aboutScyre" id="scyre-1">
                <h3>Final Outcome</h3>
                <p>The final designs for Gema’s gaming application.</p>
              </div>

              <img className="final1" id="studyImgGema" alt="img" src={Final1} />
              <img className="final2" id="studyImgGema" alt="img" src={Final2} />
              <img className="final3" id="studyImgGema" alt="img" src={Final3} />
              <img className="final4" id="studyImgGema" alt="img" src={Final4} />

              <div className="projectsBG-links">
            <a href="/" className="backLink">Back to Designs</a>
            <a href="/" className="nextLink">Next Project</a>
            </div>
            
            </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Gema;
