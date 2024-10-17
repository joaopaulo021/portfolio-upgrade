import { useState } from "react";
import { Col } from "react-bootstrap"

const ProjectCard = ({ title, description, imgUrl, link }) => {

	const fileExtension = imgUrl.split('.').pop()


	return (

		<Col size={12} sm={6} md={45}>
			<div className={`proj-imgbx`}>
				<h4>{title}</h4>
				{
					fileExtension === "png"
						?
						<>
							<img src={imgUrl} alt="" />

						</>
						:
						<video
							controls

						>
							<source src={imgUrl} type="video/mp4" />
						</video>
				}


				<div className="proj-txtx">
					<span >{description}</span>
					{fileExtension === "png" && <a target="_blank" href={link}>Acesse aqui!</a>}
				</div>
			</div>
		</Col >
	)
}

export default ProjectCard


