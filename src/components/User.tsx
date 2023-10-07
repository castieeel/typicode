import React from 'react'
import { Button, Card, Row, Container } from 'react-bootstrap'
import { useGetUserQuery } from '../services/api'
import { type iPost } from '../models'
import { Post } from './Post'
import { useNavigate } from 'react-router'

export const User: React.FC = () => {
  const navigate = useNavigate()
  let userId: number = 0
  if (localStorage.getItem('userId') !== null) {
    userId = parseInt(localStorage.getItem('userId') as string)
  }
  const { data: posts } = useGetUserQuery(userId)

  const navigateToMain = (): void => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <Container>
      <Row>
      <Card>
      <Card.Header as="h5">Пользователь № {userId}</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary" onClick={navigateToMain}>Назад</Button>
      </Card.Body>
    </Card>
      </Row>
      <Row>
      {posts?.slice(0, 8).map((post: iPost) => <Post post={post} key={post.id} />)}
      </Row>
    </Container>
  )
}
