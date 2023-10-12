import React from 'react'
import { Container, Row, Card, Button } from 'react-bootstrap'
import '../styles/burger.styles.css'
import avatar from '../assets/img/avatar.png'
import { useNavigate } from 'react-router'

export const AboutMe: React.FC = () => {
  const navigate = useNavigate()
  const navigateToMain = (): void => {
    navigate('/')
  }
  return (
    <Container>
      <Row>
        <Card className="text-center">
      <Card.Header>Обо мне</Card.Header>
      <Card.Body>
      <img className='avatar' src={avatar} alt='avatar'/>
        <Card.Title>Виктория</Card.Title>
        <Card.Text>
          29 лет, г.Новосибирск
        </Card.Text>
        <Button variant="primary" onClick={navigateToMain}>На главную</Button>
      </Card.Body>
      <Card.Footer className="text-muted">kiseleva_va@hotmail.com</Card.Footer>
    </Card>
      </Row>
    </Container>
  )
}
