import React, { Component } from 'react';
import '../App.css';
import { Helmet } from 'react-helmet';
import favicon from '../../images/favicon.png';
import Nav from '../Nav/Nav';
import Main from '../../images/debitz-main-study.png';
import Tabs from '../../images/debitz-tabs.png';
import Wireframe from '../../images/debitz-wireframe.png';
import DarkMode from '../../images/debitz-dark.png';
import Final1 from '../../images/debitz-final-1.png';
import Final2 from '../../images/debitz-final-2.png';
import Final3 from '../../images/debitz-final-3.png';

class Debitz extends Component {
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
            <a href="/scyre" className="nextLink">Next Project</a>
            </div>
           
            <div className="projectScyre-study">
              <img className="scyre-main-study" id="avian-main-study-img" alt="img" src={Main} />

              <div className="aboutScyre" id="scyre-1">
                <h3>Debitz</h3>
                <p>Debitz is a banking / payment application that allows users to keep track of their savings and checking accounts, budget their money, and make payments.</p>
              </div>

              <div className="aboutScyre" id="scyre-2">
                <h3>Problem</h3>
                <p>Trying to budget while keeping track of multiple bank accounts using disparate banking apps can be a consistent inconvenience. Many people that are involved with banking apps use a different app for each need which include: Tracking your bank account(s), budgeting, sending/receiving money, making payments, etc.</p>
              </div>

              <div className="aboutScyre" id="scyre-2">
                <h3>Goal</h3>
                <p>To create a banking app that unifies these particular features and allows the end user to swiftly manage their money.</p>
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
                <h3>Research and Discoveries</h3>
                <p>During the initial idea stage for this product, I had a combination of 5 online and in-person conversations and asked about how often they reached their financial goal, how they budget themselves, and their current form of sending and receiving payments. Through these conversations, I took notes of my discoveries and highlighted three main points.</p>
                <img className="studyTabs" alt="img" src={Tabs} />
                <p>My next approach was to create a low-fidelity wireframe to visualize and map the user’s story in order to create a genuine and efficient user flow. With the notes I took from my discoveries, I decided to split the mobile app into 4 separate sections: Accounts, Budgeting, Transfers, and Settings.</p>
              </div>

              <div className="aboutScyre" id="scyre-1">
                <h3>Wireframes</h3>
                <p>With the wireframes I created, I was attempting to try and minimize the amount of actions in the user flow (i.e. the amount of clicks, taps, or swipes it takes for a user to get to their goal). The reasoning behind this approach was due to the answers I received during the researching phase — although many individuals have banking apps downloaded on their phones or using certain spreadsheets, many tend to ignore or discontinue their budget planning due to, what they view as, a tedious process.</p>
              </div>

              <img className="wireframes" id="studyImg" alt="img" src={Wireframe} />

              <div className="aboutScyre" id="scyre-1">
                <h3>Debitz</h3>
                <p>I used my low-fidelity wireframes to build the mockups and prototype using Adobe Illustrator. User testing was conducted by creating scenarios that coincided with the needs of Debitz’s persona. Because of this, I had a lot to keep in mind with the product, this includes:
                <br/>-Not cluttering the page with random information, this makes for poor visual experience.
                <br/>- Allow the user to experience clear way-finding
                <br/>- Minimize button to prevent the user from getting lost and to allow the user to complete their desired action swiftly
                <br/>- To only add buttons / functions if they were absolutely necessary in order to not confuse the user</p>
              </div>

              <div className="aboutScyre" id="scyre-1">
                <h3>Dark Mode</h3>
                <p>With “dark mode” being an increasingly popular feature, I created both a light and dark mode design to allow the user to choose the design and lighting they prefer. Ultimately, the dark mode version of the design was applied to all 4 of the main features of the budget app.</p>
              </div>

              <img className="darkmode" id="studyImg" alt="img" src={DarkMode} />

              <div className="aboutScyre" id="scyre-1">
                <h3>Feature One: Accounts</h3>
                <p>Because people tend to have multiple checking and savings accounts, the dashboard/Accounts page allows the user to view and/or add to their list of accounts. I decided to split the types of accounts into two different sections, which may be toggled on the top of the screen, to allow users to easily see their account(s) and instantly know what they’re looking at.</p>
              </div>

              <img className="final-1" id="studyImg" alt="img" src={Final1} />

              <div className="aboutScyre" id="scyre-1">
                <h3>Feature Two: Budgeting</h3>
                <p>For the budgeting part of the design, I decided to go with a ring like shape in the center of the page with categorized colors and the amount spent in the middle in order to draw the user’s attention. From there, the user would be able to identify the colors and immediately be able to see how much they had spent in each category. With the amount left over, the user has the choice to deposit this to their desired account.</p>
              </div>

              <img className="final-2" id="studyImg" alt="img" src={Final2} />

              <div className="aboutScyre" id="scyre-1">
                <h3>Feature Three: Transfers</h3>
                <p>With the ‘Transfers’ tab, I created a design that allows the user to easily toggle between the act of sending and receiving money without having them go back or forward to a separate screen. From there, the user may swipe left or right to choose the account to make their necessary payment and can also see their history with that account.</p>
              </div>

              <img className="final-3" id="studyImg" alt="img" src={Final3} />

              <div className="projectsBG-links">
            <a href="/" className="backLink">Back to Designs</a>
            <a href="/scyre" className="nextLink">Next Project</a>
            </div>
            
            </div>
            </div>
          </div>

      </div>
    );
  }
}

export default Debitz;
