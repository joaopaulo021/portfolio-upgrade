import { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../../assets/img/header-img.svg'
import './styles.css'

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const toRotate = [' Front End ! ', ' teste 1 ', ' teste 2 ']
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

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
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)

        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)

        }
    }

    return (
        <>
            <section className='banner' id='home'>
                <Container>
                    <Row className='align-items-center'>
                        <Col xs={ 12 } md={ 6 } xl={ 7 } >
                            <span className='tagline'>Bem vindo ao meu portfolio</span>
                            <h1>{ `Olá ! meu nome é João Paulo, sou Dev` }<span className='wrap'>{ text }</span></h1>
                            <p>texto seção descrição </p>
                            <button onClick={ () => console.log("clicou") }>chama</button>
                        </Col>
                        <Col xs={ 12 } xl={ 5 }>
                            <img src={ headerImg } alt="Header img" />
                        </Col>
                    </Row>
                </Container>

            </section>
        </>
    )
}

export default Banner