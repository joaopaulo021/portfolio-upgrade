import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import logo from '../../assets/img/logo.png'
import { FaBars, FaTimes, FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';

const navBar = () => {
	const [activeLink, setActiveLink] = useState('home')
	const [scrolled, setScrolled] = useState(false)
	const [menuExpanded, setMenuExpanded] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener("scroll", onScroll)

		return () => window.removeEventListener("scroll", onScroll)
	}, [])

	const onUpdateActiveLink = (value) => {
		setActiveLink(value)
	}
	const toggleMenu = () => {
		setMenuExpanded(!menuExpanded);
	};

	return (
		<Navbar expand="md" className={scrolled ? "scrolled" : ""} expanded={menuExpanded} onToggle={toggleMenu} >
			<Container>

				<Navbar.Brand href="#home">
					<img src={logo} />
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav">
					{menuExpanded
						? <FaTimes className="navbar-toggler-icon" color="white" />
						: <FaBars className="navbar-toggler-icon" color="white" />}
				</Navbar.Toggle>

				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
						<Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')} > Skills</Nav.Link>
						<Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}> Projetos</Nav.Link>
					</Nav>

					<span className='navbar-text'>
						<div className='social-icon'>
							<a target="_blank" href='https://www.linkedin.com/in/joão-paulo-l-gonçalves-46a22a244/'><FaLinkedin className='nav-icon' /></a>
							<a target="_blank" href='https://wa.me/5514996842832'><FaWhatsapp className='nav-icon' /></a>
							<a target="_blank" href='https://github.com/joaopaulo021/'><FaGithub className='nav-icon' /></a>
						</div>
						<a href="#contato"><button className="vvd"><span>Mensagem</span></button></a>
						<a target='_blank' href="https://drive.google.com/file/d/1ekDnTiFMyTYnzRonDrI4L2XM7dFUH7IF/view?usp=sharing"><button className="vvd"><span>Currículo</span></button></a>
					</span>
				</Navbar.Collapse>
			</Container >
		</Navbar >
	);
}

export default navBar;