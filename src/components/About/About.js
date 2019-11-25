import React from 'react';
import Nav from '../Nav/Nav';
import { Helmet } from 'react-helmet';
import favicon from '../../images/favicon.png';
import CarPhoto from '../../images/eric-car.png';

class About extends React.Component {
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
        <div className="projectsBG-studies">
            <div className="studyContainer">
            <h1 className="aboutMeH1">about me.</h1>
          <img className="carPhoto" alt="img" src={CarPhoto} />
            <div className="aboutMe">
                <p>Hey! I’m Eric Tsai, a product designer currently located in Southern California. While I happily build solutions and continue my passion for understanding people, I was initially drawn to product design through a very… unconventional path.
                <br/>
                <br/>When I was 14, I started doing freelance video editing — specifically, Call of Duty montage editing for other gamers. Through this, I became heavily familiar with Adobe After Effects, and slowly, most of Adobe’s products. Fast forward a few years later at age 20, I had tried to create my own <a href="/gema" id="bioLink" style={{textDecoration: 'none', cursor: 'pointer'}}>gaming startup.</a> But of course, even though I had many years of experience with After Effects, I didn’t know much about UI/UX design.
                <br/>
                <br/>Through the next few months of that time, I learned a combination of skills between product design and front-end development through self-teaching.
                <br/>
                <br/>Outside of design, I’m a huge car enthusiast, I’m a cat lover (I have two!), and I play video games… like a lot too.
                <br/>
                <br/>Thanks for taking this time to get to know me and I’d like to get to know you too! You can contact me <a id="bioLink" href="mailto:eric@erictsai.design" style={{ textDecoration: 'none', cursor: 'pointer'}}>here</a> :D</p>
            </div>
            </div>
          </div>
          </div>
    );
  }
}

export default About;
