import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import contactImg from '../../assets/img/mail.png'

const ContactForm = () => {
	const formInitialDetails = {
		firstName: '',
		lastName: '',
		email: '',
		message: '',
	}

	const [formDetails, setFormDetails] = useState(formInitialDetails)
	const [buttonText, setButtonText] = useState('Enviar')
	const [status, setStatus] = useState({})

	const onFormUpdate = (category, value) => {
		setFormDetails({
			...formDetails,
			[category]: value
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setButtonText("enviando..")
		let response = await fetch("https://emailserverportfolio-dkyqco82.b4a.run/contact", {
			method: "POST",
			headers: {
				"Content-Type": "Application/json;charset=utf-8",
			},
			body: JSON.stringify(formDetails)
		})

		setButtonText("Enviar")
		let result = await response.json()
		setFormDetails(formInitialDetails)
		if (result.code === 200) {
			setStatus({ sucess: true, message: "Mensagem enviada com sucesso!" })
		} else {
			setStatus({ sucess: false, message: "Ocorreu um erro ao enviar a mensagem" })
		}
	}

	return (
		<section className="contact" id="contato">
			<Container>
				<Row>
					<Col md={6}>
						<img src={contactImg} alt="" />
					</Col>
					<Col md={6}>
						<h2>Me manda uma mensagem !</h2>
						<form onSubmit={handleSubmit}>
							<Row>
								<Col sm={6} className='px-1'>
									<input type="text" value={formDetails.firstName} placeholder="Digite seu nome" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
								</Col>
								<Col sm={6} className='px-1'>
									<input type="text" value={formDetails.lastName} placeholder="Digite seu sobrenome" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
								</Col>
								<Col sm={6} className='px-1'>
									<input type="email" value={formDetails.email} placeholder="Digite seu email" onChange={(e) => onFormUpdate('email', e.target.value)} />
								</Col>
								<Col>
									<textarea value={formDetails.message} placeholder="Digite sua mensagem!" id="" rows="6" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
									{
										status.message &&
										<Col className="msg-container">
											<p className={status.sucess === false ? "danger" : "sucess"}>{status.message}</p>
										</Col>
									}
									<button type="submit"><span>{buttonText}</span></button>
								</Col>
							</Row>
						</form>
					</Col>
				</Row>
			</Container>
		</section>
	)
}
export default ContactForm