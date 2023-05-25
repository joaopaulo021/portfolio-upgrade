import { Col } from "react-bootstrap"

const ProjectCard = ({ title, description, imgUrl, link }) => {
	return (
		<Col size={ 12 } sm={ 6 } md={ 4 }>
			<div className="proj-imgbx">
				<img src={ imgUrl } />
				<div className="proj-txtx">
					<h4>{ title }</h4>
					<span>{ description }</span>
					<a target="_blank" href={ link }>Acesse aqui!</a>
				</div>
			</div>
		</Col >
	)
}

export default ProjectCard
