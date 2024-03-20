import { Col } from "react-bootstrap"

const ProjectCard = ({ title, description, imgUrl, link }) => {
	const fileExtension = imgUrl.split('.').pop()

	return (

		<Col size={12} sm={6} md={4}>
			<div className="proj-imgbx">

				{
					fileExtension === "png"
						?
						<>
							<img src={imgUrl} alt="" />

						</>
						:
						<video controls>
							<source src={imgUrl} type="video/mp4" />
						</video>
				}

				<div className="proj-txtx">
					<h4>{title}</h4>
					<span>{description}</span>
					{fileExtension === "png" && <a target="_blank" href={link}>Acesse aqui!</a>}
				</div>
			</div>
		</Col >
	)
}

export default ProjectCard


