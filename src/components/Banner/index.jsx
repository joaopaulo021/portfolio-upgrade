import { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'

const Banner = () => {
	const [loopNum, setLoopNum] = useState(0)
	const [isDeleting, setIsDeleting] = useState(false)
	const [text, setText] = useState('')
	const toRotate = [' Olá meu nome é João Paulo, sou desenvolvedor Web !']
	const [delta, setDelta] = useState(50 - Math.random() * 50)

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta)

		return () => { clearInterval(ticker) }

	}, [text])

	const tick = () => {
		let i = loopNum % toRotate.length
		let fullText = toRotate[i]
		let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

		setText(updatedText)

		if (isDeleting) {
			setDelta(prevDelta => prevDelta / 2)

		} else if (isDeleting && updatedText === '') {
			setIsDeleting(false)
			setLoopNum(loopNum + 1)
			setDelta(500)
		}
	}

	return (
		<section className='banner' id='home'>
			<Container>
				<Row className='aligh-items-center'>
					<Col xs={ 12 } md={ 6 } xl={ 7 } >
						<div>
							<span className='tagline'>Bem vindo ao meu portfolio !</span>
							<h1><span className='wrap'>{ text }</span></h1>
							<p>Sou desenvolvedor Web, apaixonado por criar aplicações interativas e dinâmicas. Meu objetivo é combinar minhas habilidades com meu olhar criativo para entregar os melhores resultados. Tenho experiência em desenvolver aplicações web responsivas e otimizadas, utilizando as melhores práticas e as últimas tecnologias. Meu portfólio apresenta uma seleção de projetos nos quais demonstro minha capacidade de construir aplicações funcionais de forma eficiente. Buscando sempre expandir meu conhecimento no universo do desenvolvimento tanto front-end como back-end. Convido você a explorar meu portfólio para ver alguns exemplos do meu trabalho.</p>
							<button onClick={ () => console.log("clicou") }>Baixar Curriculo<ArrowRightCircle /></button>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default Banner