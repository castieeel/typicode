import React from 'react'
import { Button, Card, Row, Container } from 'react-bootstrap'
import { useGetUserQuery } from '../services/api'
import { type iPost } from '../models'
import { UserPost } from './UserPost'
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
    <Container className="p-3">
      <Row className="row gy-5">
      <Card>
      <Card.Header as="h5">Пользователь № {userId}</Card.Header>
      <Card.Body>
        <Card.Title>Посты пользователя № {userId}</Card.Title>
        <Button variant="primary" onClick={navigateToMain}>Назад</Button>
      </Card.Body>
    </Card>
      {posts?.map((post: iPost) => <UserPost post={post} key={post.id} />)}
      </Row>
    </Container>
  )
}
