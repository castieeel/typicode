import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Button, Col, Modal } from 'react-bootstrap'
import { type iPost, type iComments } from '../models'
import { useLazyGetCommentsQuery } from '../services/api'

interface iProps {
  post: iPost
}

export const Post: React.FC<iProps> = ({ post }) => {
  const [fetchComment, { data: comments }] = useLazyGetCommentsQuery()
  const [show, setShow] = useState(false)
  const [postTitle, setPostTitle] = useState('')
  const handleClose = (): void => { setShow(false) }
  const handleShow = (): void => { setShow(true) }
  const navigate = useNavigate()

  const getComments = (id: number): void => {
    void fetchComment(id).unwrap()
  }

  const navigateToUser = (id: number): void => {
    console.log(id)
    console.log(post.userId)
    localStorage.setItem('userId', id.toString())
    navigate('user')
  }

  return (
    <>
    <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://pdacdn.com/photo/y_c5da993a.jpg"
                  onClick={() => { navigateToUser(post.userId) }}/>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>
            {post.body}
          </Card.Text>
          <Button variant="primary"
                  onClick={() => { setPostTitle(post.title); getComments(post.id); handleShow() }}>Комментарии</Button>
        </Card.Body>
      </Card>
    </Col>

<Modal show = { show } onHide = { handleClose }>
<Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Комментарии {postTitle}</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    { comments?.map((comment: iComments) => <div key={comment.id}>
      <h1>{comment.email}</h1>
      <p>{comment.body}</p></div>)}
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
  </Modal.Footer>
</Modal.Dialog>
</Modal>
</>
  )
}
