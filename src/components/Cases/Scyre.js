import React, { Component } from 'react';
import '../App.css';
import { Helmet } from 'react-helmet';
import favicon from '../../images/favicon.png';
import Nav from '../Nav/Nav';
import ScyreMain from '../../images/scyre-study.png';
import DesignProcess from '../../images/designprocess.png';
import theMVP from '../../images/scyremvp.png';
import Sticky from '../../images/scyre-sticky.png';
import Tabs from '../../images/scyre-tabs.png';
import Wireframe from '../../images/scyre-wireframe.png';
import Final from '../../images/scyre-final.png';

class Scyre extends Component {
  render() {
    return (
      <div id="wrapper">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Eric Tsai · Scyre Design</title>
          <link rel="shortcut icon" type="image/png" href={favicon}></link>
          <link rel="stylesheet" href="https://use.typekit.net/mup7xxt.css"></link>
        </Helmet>
        <Nav  className="navbar" />

          <div className="projectsBG-studies">
            <div className="studyContainer">
            <div className="projectsBG-links">
            <a href="/" className="backLink">Back to Designs</a>
            <a href="/gema" className="nextLink">Next Project</a>
            </div>
           
            <div className="projectScyre-study">
              <img className="scyre-main-study" alt="img" src={ScyreMain} />

              <div className="aboutScyre" id="scyre-1">
                <h3>Scyre</h3>
                <p>Scyre is a messaging platform for your skillful identity that allows you to combine your creative processes with your professional network.</p>
              </div>

              <div className="aboutScyre" id="scyre-2">
                <h3>Problem</h3>
                <p>Meeting others and creating meaningful connections with people, for whichever reason, in your professional community / industry can prove to be difficult. Existing professional networks (such as LinkedIn) try to solve this problem by allowing users to create a list of connections — this ultimately resulted in a bigger problem: profiles filled with hundreds to thousands of meaningless contacts/connections, shallow endorsements, and spammy cold messages.</p>
              </div>

              <div className="aboutScyre" id="scyre-2">
                <h3>Goal</h3>
                <p>To create a messaging app where professionals can create meaningful relationships and to learn, exchange knowledge, share experiences, and more.</p>
              </div>

              <div className="aboutScyre" id="scyre-3">
                <h3>Role:</h3>
                <p>Founder, Product Designer, Developer</p>
              </div>

              <div className="aboutScyre" id="scyre-3">
                <h3>Project Scale:</h3>
                <p>September 2019 - Present</p>
              </div>

              <div className="aboutScyre" id="scyre-1">
                <h3>Tools Used:</h3>
                <p>Adobe XD<br/>Adobe Illustrator<br/>React/Redux<br/>NodeJS<br/>Firebase Database</p>
              </div>

              <img className="design-process" id="studyImg" alt="img" src={DesignProcess} />

              <div className="aboutScyre" id="scyre-1">
                <h3>Researching Current Substitutes</h3>
                <p>Because of the issues with current professional networks and users’ desire to still seek knowledge and/or advice or more, many people are creating different chat groups with certain topics on platforms such as WhatsApp, WeChat, Slack, Google Groups, etc. and posting the invite codes/links on popular forums to get others to join. This leaves many people in the professional community jumping between apps and forums, trying to find the right place to be.</p>
              </div>

              <div className="aboutScyre" id="scyre-1">
                <h3>Creating the MVP</h3>
                <p>The original idea/product for Scyre was initially a chat-based web app that allows people in the startup community to collaborate with each other. Starting from the initial idea’s and sketches, to the design, to development, the total time it took to launch an MVP was 3 weeks.</p>
              </div>

            <img className="mvp" id="studyImg" alt="img" src={theMVP} />

            <div className="aboutScyre" id="scyre-4">
                <h3>Iterating</h3>
                <p>After launching and talking to our users, we were able to take their feedback and categorize it into 3 different themes:<br/></p>
                <div id="scyre-iterate-list">
                <h4>Transparency</h4><p>Allowing Scyre to be a product built from empathy to connect with users made them more inclined to use the product.<br/></p>
                </div>
                <div id="scyre-iterate-list">
                <h4>UI/UX Feedback</h4><p>Anything related to the user flow, color scheme, add/removal of features.<br/></p>
                </div>
                <div id="scyre-iterate-list">
                <h4>Project</h4><p>Changes Scyre could make to its overall product/idea as a whole.</p>
                </div>
              </div>

              <img className="sticky" id="studyImg" alt="img" src={Sticky} />

              <div className="aboutScyre" id="scyre-1">
                <h3>Iterating (Continued)</h3>
                <p>After reviewing all the feedback from Scyre’s users, we iterated and pivoted our project from being a web app to being a mobile messaging app. Many users stated that the desktop version seemed inconvenient which proved the lower user retention rate and many would just immediately request a mobile version. While doing this, we also decided to expand Scyre to not be only limited to the startup community, but build it to suit the idiosyncrasies of all professional industries.</p>
              </div>

              <div className="aboutScyre" id="scyre-1">
                <h3>Defining the Problem</h3>
                <p>From the feedback review and Scyre’s iteration, and because we want to solve the problem(s) with existing professional networks while continuing our mission of meaningful relationships, we came up with a couple key questions to address in the redesign.</p>
              </div>

              <img className="tabs" id="studyImg" alt="img" src={Tabs} />

              <div className="aboutScyre" id="scyre-1">
                <p>The answers we came up with for the redesign:
                <br/><br/>1.) As a messaging app, Scyre created the option to allow people to create public, topic-based group chats, private groups, and personal messages. To maintain meaningful relationships, a user’s connections would be hidden and adding another user would only be done through their ID number or through the chats in which they’ve already talked. This would help solve two main issues: the first would be solving the issue of being on the sending or receiving end of spammy cold messages, the second would be the issue of continuously adding hundreds of meaningless ‘connections’ to their professional network.
                <br/><br/>2.) As Scyre would expand to a myriad of professional industries, we wanted to allow the users to have the option to create a professional profile. We also wanted to do it differently than most professional networks as we want a user to feel that their profile defines both their CURRENT professional and personal identity. One way we decided to implement this is to allow users to only add up to two of their work experiences: their most important and impactful ones. Their skills would be limited to 6 additions: again, their most important and impactful ones. And of course, as many modern day professionals have relevant links to define their skills and highlights, the user has the option to link any of these.</p>
              </div>

              <div className="aboutScyre" id="scyre-1">
                <h3>Wireframes</h3>
                <p>To begin our pivot and iteration from a web app to a mobile chat application, we would build on ideas and sketch out low fidelity wireframes based on our user feedback.</p>
              </div>

              <img className="wireframes" id="studyImg" alt="img" src={Wireframe} />

              <div className="aboutScyre" id="scyre-1">
                <h3>Final Outcome</h3>
                <p>The final designs for Scyre’s IOS chat application.</p>

                <img className="finalDesign" id="studyImg" alt="img" src={Final} />
              </div>

              <div className="projectsBG-links">
            <a href="/" className="backLink">Back to Designs</a>
            <a href="/gema" className="nextLink">Next Project</a>
            </div>

            </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Scyre;
