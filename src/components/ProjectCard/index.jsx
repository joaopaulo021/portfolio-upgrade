import { Col } from "react-bootstrap"
import './styles.css'

const ProjectCard = ({ title, description, imgUrl }) => {
    return (
        <>
            <Col size={ 12 } sm={ 6 } md={ 4 }>
                <div className="proj-imgbx">
                    <video controls={ true } src={ imgUrl } />
                    <div className="proj-txtx">
                        <h4>{ title }</h4>
                        <span>{ description }</span>
                    </div>
                </div>
            </Col>
        </>
    )
}

export default ProjectCard
