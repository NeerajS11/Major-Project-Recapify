import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/projects/Screenshots/Screenshot1.jpeg";
import projImg2 from "../assets/img/projects/Screenshots/Screenshot2.jpeg";
import projImg3 from "../assets/img/projects/Screenshots/Screenshot3.jpeg";
import projImg4 from "../assets/img/projects/Screenshots/Screenshot4.jpeg";
import projImg5 from "../assets/img/projects/Screenshots/Screenshot5.jpeg";
import projImg6 from "../assets/img/projects/Screenshots/Screenshot6.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      links:{
        demo: "https://modern-uiux-bank-react-app.vercel.app/",
        repository:"https://github.com/OswalDev/Modern-UI-UX-Bank-React-App"
      },
    },
    {
      title: "Personal Budget tracker",
      description: "Design & Development",
      imgUrl: projImg2,
      links:{
        demo: "https://oswaldev.github.io/React-Budget-App/",
        repository:"https://github.com/OswalDev/React-Budget-App"
      },
    },
    {
      title: "Weather app",
      description: "Design & Development",
      imgUrl: projImg3,
      links:{
        demo: "https://react-weather-app-lime.vercel.app/",
        repository:"https://github.com/OswalDev/React-Weather-App"
      },
    },
    {
      title: "Realtime chat app",
      description: "Design & Development",
      imgUrl: projImg4,
      links:{
        demo: "",
        repository:"https://github.com/OswalDev/React-Firebase-Chat-App"
      },
    },
    {
      title: "Note-taking app",
      description: "Design & Development",
      imgUrl: projImg5,
      links:{
        demo: "",
        repository:"https://github.com/OswalDev/expense-tracker"
      },
    },
    {
      title: "React native wallet app",
      description: "Design & Development",
      imgUrl: projImg6,
      links:{
        demo: "",
        repository:"https://github.com/OswalDev/react-native-wallet-app"
      },
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Screenshots</h2>
                <p>Here are some Screenshots of our project</p>
                <Tab.Container className="one-tab" id="projects-tabs" defaultActiveKey="first">
                  {/* block of code for proyect tabs */}
                {/* {projects.length > 6 ? (
                  <Nav variant="pills" className= " one-tab nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">                    
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  ) : (
                  <Nav variant="pills" className= "one-tab nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">                    
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  )} */}

                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img alt="bnckground-image-right" className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
