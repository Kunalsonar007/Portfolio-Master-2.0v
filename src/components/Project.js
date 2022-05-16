import React, { useRef, useEffect } from "react";
import Cards from "./Cards"
import gsap, { Power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
function Project() {
  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
    
  }, []);
  gsap.registerPlugin(ScrollTrigger);
  const card1 = [
    {
      title: "hello world",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "hello world",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "hello world",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ];
  // let pg=useRef(null);
  // var n=ReactDOM.findDOMNode(pg);
  // useEffect((n)=>{
  //      n=ReactDOM.findDOMNode(pg);
  //     console.log(n.offsetTop);
  //    // console.log(pg.current.offsetTop;)
  // },[n])

  const card2 = [
    {
      title: "WhatsApp Clone",
      description:
        `Online Messaging Platform where one can send message to others
        in blazing fast speed\n`,
    },
    {
      title: "hello world",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      title: "hello world",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ];

  useEffect(() => {
    if (width > 476) {
    const z1 = gsap.timeline();
    z1.from(".cd", {
      duration: 0.4,
      stagger: 0.15,
      ease: Power2.easeInOut,
      y: 100,
      autoAlpha: 0,
      scrollTrigger: {
        trigger: ".project-section",
        end: "top+=10% top",
        scrub: true,
      },
    })
    .from(".basic-heading",{
      ease:Power2.easeInOut,
      scrollTrigger:{
        trigger:"project-section",
        start:"center-=10% center",
        end:"center-=5% center",
        scrub: true,
      },
      y:50,
    })
    .from(".project-heading::after",{
      ease:Power2.easeInOut,
      scrollTrigger:{
        trigger:"project-section",
        start:"center-=10% center",
        end:"center-=5% center",
        scrub: true,
      },
      width:0,

    })
  }
  });

  return (
    <div className="project-section" id="project">
      <Container className="project ">
        <div className="project-heading text-left">
          <h3 className="basic-heading">Projects !</h3>
        </div>
        <Row>
          <Col lg={4}>
            <div className="cd">
              <Cards
                className="cd"
                title="Modern Dashboard"
                description={`Data analitical dashboard adaptable to all devices, with ui components and animated interactions.\n  
                
                `}
                one="JavaScript"
                two="HTML"
                three="SCSS"
                link="https://github.com/Kunalsonar007/modern-dashboard"
                demo="https://kunalsonar007.github.io/modern-dashboard/"
              />
            </div>
          </Col>
          <Col lg={4}>
            <div className="cd">
              <Cards
                className="cd"
                title="Covid 19 tracker"
                description={`Covid-19-tracker is a react app made to track, check status and count of Corona virus affected countries and people.`}
                one="React"
                two="Node js"
                three="Yarn"
                link="https://github.com/Kunalsonar007/Covid-19-tracker/tree/master"
                demo="https://covid-19-tracker-e4bda.web.app/"
              />
            </div>
          </Col>
          <Col lg={4}>
            <div className="cd">
              <Cards
                className="cd"
                title="Tesla - Clone"
                description="Tesla Clone is adaptable to all devices, with ui components and animated interactions.) "
                one="React"
                two="Nodejs"
                // three=""
                link="https://github.com/Kunalsonar007/Tesla-Website-Clone"
                demo="https://w17b2.csb.app/"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <div className="cd">
              <Cards
                className="cd"
                title="Crypto Hunter"
                description={`This app helps its user to watch over all the crypto currency prices, there last 24hr changes, its market cap and much more. In todays world everybody wants to invest in digital currency and this app helps them to choose where to invest.`}
                one="React"
                two="Firebase"
                three=""
                link="https://github.com/Kunalsonar007/Crypto-Hunter"
                demo="https://cryptohunter111.netlify.app/"
              />
            </div>
          </Col>
          <Col lg={4}>
            <div className="cd">
              <Cards
                className="cd"
                title="Amazon - Clone"
                description="This is a clone of popular e-commmerce website Amazon. I have created it with React in frontend, Node and Express for backend and MongoDB for storing data"
                one="React"
                two="Node Js"
                three="MongoDB"
                link="https://github.com/Kunalsonar007/amazon-clone"
                demo="https://alanbinu-ecommerce.web.app/"
              />
            </div>
          </Col>
          <Col lg={4}>
            <div className="cd">
              <Cards
                className="cd"
                title="Go-Pokemon"
                description="Pokemon is a React web application where you can navigate the details of the different pokemon by clicking on the list of pokemon. It has the filter functionality with which you can filter your pokemon with different categories."
                one="React"
                two="Node Js"
                // three=""
                link="https://github.com/Kunalsonar007/Go-Pokemon/tree/master"
                demo="https://627f955e5aa37a5ec451bfec--pokendex.netlify.app/"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Project;
