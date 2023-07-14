import {Container, Row, Col, Tab, Nav} from "react-bootstrap"
import colorSharp2 from '../../assets/img/color-sharp2.png'
import ProjectCard from "../ProjectCard"
import projImg1 from "../../assets/img/webappcontrole.png"
import projImg2 from "../../assets/img/gravgraf.png"
import projImg3 from "../../assets/img/hotelAdmin.png"
import projImg4 from "../../assets/img/circuito-mulher.png"
import projImg5 from "../../assets/img/filmeson.png"
import projImg6 from "../../assets/img/scrimbo.png"
import projImg7 from "../../assets/img/simuladorEmprestimo.png"
import projImg8 from "../../assets/img/geradorpaleta.png"

import {useEffect, useRef} from "react"
import ScrollReveal from "scrollreveal"

const Projects = () => {

  const projectBxRef = useRef(null);

  useEffect(() => {
    const sr = ScrollReveal({reset: true});
    sr.reveal(projectBxRef.current, {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    });
  }, []);

  const projects = [{
    title: "Grav Graf Sinalizações",
    description: "Site desenvolvido para empresa no segmento de placas de sinalização.",
    link: "https://www.gravgraf.com.br",
    imgUrl: projImg2,
  },

  {
    title: "Circuito Mulher",
    description: "Pagina desenvolvida p/ o evento online Circuito Mulher com com sistema de autenticação de usuario e chat em tempo real.",
    link: "https://www.circuitomulher.institutomuitoalemdecinderelas.com/index",
    imgUrl: projImg4,
  },

  // {
  //   title: "NK 14 Sporting",
  //   description: "E-commerce completo, desenvolvido para uma loja de camisas de futebol, com diversas funcionalidades e sistema de pagamento online integrado.",
  //   link: "https://www.nk14sporting.com.br",
  //   imgUrl: projImg3,
  // },
  {
    title: "Cadastro de reservas Hotel",
    description: "Web app de cadastro de reservas de hotel, insere,busca,edita e deleta os registros",
    link: "https://hotel-bookings-theta.vercel.app/",
    imgUrl: projImg3,
  },

  {
    title: "Web App finanças",
    description: "Projeto de finanças que calcula as entradas e saidas e te mostra o total salvando os dados no navegador",
    link: "https://app-controle-financeiro-dun.vercel.app",
    imgUrl: projImg1,
  },

  {
    title: "Recomendação de filmes",
    description: "Mostra os lançamentos recentes de filmes com base nas recomendações do themovieDB",
    link: "https://filmes-on.vercel.app",
    imgUrl: projImg5,
  },

  {
    title: "Gerador de paleta de cores",
    description: "Gerador de paleta de cores onde voce insera sua cor em hexadecimal e o app te mostra tonalidades da cor selecionada",
    link: "https://gerador-paleta-cores.vercel.app/",
    imgUrl: projImg8,
  },
  {
    title: "Simulador de empréstimo",
    description: "Web app de simulador de emprestimo com juros de 5% aplicado ",
    link: "https://teste-react-2.vercel.app/",
    imgUrl: projImg7,
  },

  {
    title: "The Scrimbo Game",
    description: "um dos primerios projetos que desenvolvi, um minigame estilo 'endless runner' (versão apenas p/ desktop!) ",
    link: "https://joaopaulo021.github.io/Game-c-Javascript/",
    imgUrl: projImg6,
  },
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div ref={projectBxRef}>
              <h2> Projetos</h2>
              <p>Confira alguns de meus trabalhos!</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">

                  <Nav.Item >
                    <Nav.Link className="nav-item1" eventKey="first">
                      Pagina 1
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item >
                    <Nav.Link eventKey="second">
                      Pagina 2
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item >
                    <Nav.Link className="nav-item3" eventKey="third">
                      Pagina 3
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content id="slideInUp">
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
                  <Tab.Pane eventKey="second">
                    <p>Em breve mais projetos!</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>Em breve mais projetos!</p>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container >
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section >

  )

}

export default Projects