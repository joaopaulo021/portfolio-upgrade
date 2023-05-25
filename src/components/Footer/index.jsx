import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logo from "../../assets/img/logo.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import "./styles.scss"
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
	return (
		<>
			<footer className="footer">
				<Container>
					<Row className="align-items-center">
						<Col sizxe={ 12 } sm={ 6 }>
							<img src={ logo } alt="Logo" />
						</Col>
						<Col size={ 12 } sm={ 6 } className="text-center text-sm-end">
							<div id="social-icon-footer" className="social-icon">
								<a target="_blank" href='https://www.linkedin.com/in/joão-paulo-l-gonçalves-46a22a244/'><FaLinkedin className='nav-icon' /></a>
								<a target="_blank" href='https://wa.me/5514996842832'><FaWhatsapp className='nav-icon' /></a>
								<a target="_blank" href='https://github.com/joaopaulo021/'><FaGithub className='nav-icon' /></a>
							</div>
							<p>Copyright 2023. All Rights Reserved</p>
						</Col>
					</Row>
				</Container>
			</footer>
		</>
	)
}

export default Footer