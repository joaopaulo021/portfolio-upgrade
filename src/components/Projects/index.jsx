import { Container, Row, Col, Tab, Nav } from "react-bootstrap"
import colorSharp2 from '../../assets/img/color-sharp2.png'

import ProjectCard from "../ProjectCard"
import './styles.css'
import projImg1 from "../../assets/videos/projetos-login.mp4"
import projImg2 from "../../assets/img/project-img2.png"
import projImg3 from "../../assets/img/project-img3.png"



const Projects = () => {

    const projects = [{
        title: "nome do site",
        description: "descrição do projeto",
        imgUrl: projImg1,

    },
    {
        title: "nome do site",
        description: "descrição do projeto",
        imgUrl: projImg1,

    },
    {
        title: "nome do site",
        description: "descrição do projeto",
        imgUrl: projImg1,

    },
    {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg1,
    },
    {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg1,
    },
    {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg3,
    },
    ]


    return (
        <>
            <section className="project" id="projects">
                <Container>
                    <Row>
                        <Col>
                            <h2>Projetos</h2>
                            <p>sdaaasd</p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">
                                            Pagina 1
                                        </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="second">
                                            Pagina 2
                                        </Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item>
                                        <Nav.Link eventKey="third" disabled>
                                            Pagina 3
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {
                                                projects.map((project, index) => {
                                                    return (
                                                        <ProjectCard
                                                            key={ index }
                                                            { ...project }
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <p>lorem ipsumlorem ipsumlorem ipsum</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <p>lorem ipsumlorem ipsumlorem ipsum</p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
                <img className="background-image-right" src={ colorSharp2 } alt="" />
            </section >

        </>
    )
}

export default Projects