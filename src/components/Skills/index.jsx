
import { Col, Container, Row } from "react-bootstrap"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import js from "../../assets/img/js.png"
import node from "../../assets/img/node.png"
import scss from "../../assets/img/scss.png"
import reactLogo from "../../assets/img/react.png"
import typescript from "../../assets/img/typescript.svg"
import colorSharp from "../../assets/img/color-sharp.png"
import { useEffect, useRef } from "react"
import ScrollReveal from "scrollreveal"

const Skills = () => {

	const skillBxRef = useRef(null);

	useEffect(() => {
		const sr = ScrollReveal({ reset: true });
		sr.reveal(skillBxRef.current, {
			distance: "50px",
			origin: "top",
			duration: 1000,
		});

	}, []);


	const responsive = {
		superLargeDesktop: {

			breakpoint: { max: 4000, min: 3000 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	}

	return (
		<section className="skill" id="skills">
			<Container>
				<Row>
					<Col>
						<div ref={ skillBxRef } className="skill-bx" >
							<h2>Skills</h2>
							<p>Essas são as tecnologias que eu utlizo no meu dia a dia.</p>
							<Carousel
								responsive={ responsive }
								infinite={ true }
								className="owl-carousel owl-theme skill-slider"
							>
								<div className="item">
									<img src={ reactLogo } alt="skill-image" />
									<h5>React.js</h5>
								</div>
								<div className="item">
									<img src={ js } alt="skill-image" />
									<h5>JavaScript</h5>
								</div>
								<div className="item">
									<img src={ typescript } alt="skill-image" />
									<h5>Typescript</h5>
								</div>
								<div className="item">
									<img src={ node } alt="skill-image" />
									<h5>Node.js</h5>
								</div>
								<div className="item">
									<img src={ scss } alt="skill-image" />
									<h5>SCSS</h5>
								</div>
							</Carousel>
						</div>
					</Col>
				</Row>
				<img className="background-image-left" src={ colorSharp } />
			</Container>
		</section>
	);
};


export default Skills