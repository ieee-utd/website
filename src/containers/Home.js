import React, { Component } from 'react'
import Scroll from 'react-scroll'
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom'
import RightIcon from 'material-ui-icons/ChevronRight'
import Carousel from '../components/carousel'
import Card from '../components/card'
import Map from '../components/map'
import './Home.css'


var ScrollLink = Scroll.Link
var Element    = Scroll.Element
var Events     = Scroll.Events
var scroll     = Scroll.animateScroll
var scrollSpy  = Scroll.scrollSpy

class Section extends React.Component{
  
constructor (props){
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
}

componentDidMount() {

  Events.scrollEvent.register('begin', function() {
    console.log("begin", arguments);
  });

  Events.scrollEvent.register('end', function() {
    console.log("end", arguments);
  });

  scrollSpy.update();

}
scrollToTop() {
  scroll.scrollToTop();
}
componentWillUnmount() {
  Events.scrollEvent.remove('begin');
  Events.scrollEvent.remove('end');
}

render () {
  return (
    <div className="Home">
      <div className="banner">
        <div className="banner-content">
          <h1>IEEE UTD</h1>
          <p><span>We are the student branch of the </span>Institute of Electical and Electronics Engineers 
          <span> at </span>The University of Texas at Dallas.</p>
          <ScrollLink activeClass="active" className="more" to="home-main" spy={false} smooth={true} duration={500} >
            <Button color="contrast">
              More <RightIcon/>
            </Button>
          </ScrollLink>
        </div>
        <Carousel />
      </div>
      <Element name="home-main" className="home-main">
        <div id="about" className="section">
          <h1>About Us</h1>
          <p>We are a student run branch of IEEE whose purpose is to provide current undergraduate students with an opportunity to enrich their learning experience and connect with local industry professionals. 
We provide students with an environment that allows them to socialize through IEEE events and enables them to develop professional skills through tech talks and personal interactions. By sustaining a close community of passionate young engineers, we hope to encourage excellence among our members and enhance the character of the engineering profession at large. </p>
          <p>We are located at <br/>
            <a href="https://www.google.com/maps/place/Synergy+Park+North+Building+-+UT+Dallas/@32.9889742,-96.7559906,15z/data=!4m5!3m4!1s0x864c2206e04feeb9:0x54e35d04c429ba8a!8m2!3d32.9939073!4d-96.752337" target="_blank" rel="noopener noreferrer">
            3000 Synergy Park Blvd, <br/>
            Richardson, TX 75080 <br/>
            Room: SPN 2.220
            </a>
          </p>
          <Map />
        </div>
        <div id="announcements" className="section">
          <h1>Announcements</h1>
          <p>We offer walk-in <Link to="/tutoring" style={{color:'#009688'}}>tutoring</Link> for Digital Systems, Signals and Systems, ENA, and more!</p>
          <p>Follow us on <a href="https://www.facebook.com/IEEEUTD/" target="_blank" rel="noopener noreferrer">Facebook</a> for upcomming events!</p>
          <p>If you cannot access the files, try to clear your browser history or cache for this site.</p>
        </div>
        <div id="team" className="section" style={{marginBottom:0}}>
          <h1>Meet our Team</h1>
          <div id="cards-container">
            <Card title="Jason Waye" position="President"/>
            <Card title="Sharon Choi" position="Vice President"/>
            <Card title="Kevin Ong" position="Secretary"/>

            <Card title="Joey Hamad" position="Treasurer"/>
            <Card title="Nathan Gardner" position="Historian"/>
            <Card title="Greeshma Nallapareddy" position="Public Relations"/>

            <Card title="Caleb Fung" position="Webmaster"/>
            <Card title="Jasmine Lee" position="IEEE YP Liaison"/>
            <Card title="Aparatim Singh" position="Industrial Relations"/>

            <Card title="Kyle Smithson" position="Director of Tutoring"/>
            <Card title="Casey Hopper" position="Tutoring Vice Chair"/>
            <Card title="Brian Wei" position="Tutoring Vice Chair"/>

            <Card title="Shubham Gore" position="Tutoring Vice Chair"/>
            <Card title="Sabrina Banh" position="Co-Technical Director"/>
            <Card title="Arthur Pachachura" position="Co-Technical Director"/>
          </div>
          <div className="spacer"></div>
        </div>
      </Element>
    </div>
  );
}
};

class Home extends Component {
  render() {
    return (
      <Section />
    )
  }
}

export default Home