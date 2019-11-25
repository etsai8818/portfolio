import React, { Component } from 'react';
import '../App.css';
import { Helmet } from 'react-helmet';
import favicon from '../../images/favicon.png';
import Nav from '../Nav/Nav';
import Main from '../../images/avian-main-study.png';
import Tabs from '../../images/avian-tabs.png';
import Sticky from '../../images/avian-sticky.png';
import Wireframe from '../../images/avian-wireframe.png';
import Final1 from '../../images/avian-final-1.png';
import Final2 from '../../images/avian-final-2.png';
import Final3 from '../../images/avian-final-3.png';
import Final4 from '../../images/avian-final-4.png';

class Avian extends Component {
  render() {
    return (
      <div id="wrapper">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Eric Tsai · Avian Design</title>
          <link rel="shortcut icon" type="image/png" href={favicon}></link>
          <link rel="stylesheet" href="https://use.typekit.net/mup7xxt.css"></link>
        </Helmet>
        <Nav  className="navbar" />

        <div className="projectsBG-studies">
            <div className="studyContainer">
            <div className="projectsBG-links">
            <a href="/" className="backLink">Back to Designs</a>
            <a href="/debitz" className="nextLink">Next Project</a>
            </div>
           
            <div className="projectScyre-study">
              <img className="scyre-main-study" id="avian-main-study-img" alt="img" src={Main} />

              <div className="aboutScyre" id="scyre-1">
                <h3>Avian</h3>
                <p>Avian is a B2B SaaS product for high growth companies that allows them to keep track of relevant data points while communicating with their team.</p>
              </div>

              <div className="aboutScyre" id="scyre-2">
                <h3>Problem</h3>
                <p>Tracking your company’s relevant data for growth purposes is necessary for businesses, and although there are multiple pieces of software that provide growth tracking capabilities, this is only a small part of what it takes to build a great company. Another necessary aspect is communication and task managing. Currently, many businesses jump between multiple different SaaS to handle their day-to-day routines which can be inefficient.</p>
              </div>

              <div className="aboutScyre" id="scyre-2">
                <h3>Goal</h3>
                <p>To create a unified SaaS product that allows high-growth companies to track all relevant points of data and communicate with their team to handle tasks effectively.</p>
              </div>

              <div className="aboutScyre" id="scyre-3">
                <h3>Role:</h3>
                <p>Product Designer</p>
              </div>

              <div className="aboutScyre" id="scyre-3">
                <h3>Project Scale:</h3>
                <p>2 weeks</p>
              </div>

              <div className="aboutScyre" id="scyre-1">
                <h3>Tools Used:</h3>
                <p>Adobe XD<br/>Adobe Illustrator</p>
              </div>

              <div className="aboutScyre" id="scyre-1">
                <h3>Notes from Discoveries</h3>
                <p>Before starting, I used many popular social media sites (mainly Reddit and Facebook) to try and view the users’ problem from their perspective in order to come up with a solution. Between forum posts, groups, and direct messages, I was able to find some important points about the end-user through this research phase.</p>
                <img className="studyTabs" alt="img" src={Tabs} />
                <p>My next approach was to create an initial idea with certain solutions and to categorize these answers into four main features to the SaaS application: A main dashboard, growth metrics, task management, and messaging.</p>
              </div>

              <img className="sticky" id="studyImg" alt="img" src={Sticky} />

              <div className="aboutScyre" id="scyre-1">
                <h3>Wireframes</h3>
                <p>After taking notes from the researching phase, I decided to turn these insights into low-fidelity wireframes with sketches. The goal of this was to visualize the user flow of this potential product design.</p>
              </div>

              <img className="wireframes" id="studyImg" alt="img" src={Wireframe} />

              <div className="aboutScyre" id="scyre-1">
                <h3>Designing and Prototyping</h3>
                <p>Once I had identified and idealized the four main features to solve our user’s problems and had drawn out the user-flow of the product, I immediately went into the design and prototyping stage of my process.</p>
              </div>

              <div className="aboutScyre" id="scyre-1">
                <h3>Feature One: The Dashboard</h3>
                <p>Because every company and/or team has to prioritize different tasks, metrics, or conversations, the dashboard allows the user to add any custom ‘fields’ from any of the other 3 main tabs (Growth, Tasks, Messages) in order to view their necessary data or conversations in the most efficient and convenient way.</p>
              </div>

              <img className="final1" id="studyImg" alt="img" src={Final1} />

              <div className="aboutScyre" id="scyre-1">
                <h3>Feature Two: Growth Fields</h3>
                <p>For every high-scale and high-growth company, knowing their metrics instantly is not only beneficial but also a necessary combination of information they need to have — this includes tracking data such as: income growth, total revenue, user retention rate, quarterly reports, advertisement analytics, and much more.</p>
              </div>

              <img className="final2" id="studyImg" alt="img" src={Final2} />

              <div className="aboutScyre" id="scyre-1">
                <h3>Feature Three: Task Management</h3>
                <p>The task management tab on Avian’s desktop SaaS application allows the user to:<br/>
                - View and update their daily tasks and meetings (this includes updating their calendar)<br/>
                - Label particular tasks/meetings by priority<br/>
                - View and adjust the completion amount to keep track of their ongoing tasks</p>
              </div>

              <img className="final3" id="studyImg" alt="img" src={Final3} />

              <div className="aboutScyre" id="scyre-1">
                <h3>Feature Four: Messages</h3>
                <p>The instant messaging tab of Avian will ultimately allow users to:<br/>
                - Instantly communicate through both messages, call, and video call<br/>
                - Create certain group chats based on team and/or topics<br/>
                - Collaborate and share necessary files</p>
              </div>

              <img className="final4" id="studyImg" alt="img" src={Final4} />

              <div className="projectsBG-links">
                <a href="/" className="backLink">Back to Designs</a>
                <a href="/debitz" className="nextLink">Next Project</a>
             </div>
            
            </div>
            </div>
          </div>

      </div>
    );
  }
}

export default Avian;
