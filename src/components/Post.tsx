import React, { useState } from 'react'
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
  console.log(postTitle)

  const getComments = (id: number): void => {
    void fetchComment(id).unwrap()
  }

  return (
    <>
    <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://pdacdn.com/photo/y_c5da993a.jpg" />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>
            {post.body}
          </Card.Text>
          <Button variant="primary" onClick={() => { setPostTitle(post.title); getComments(post.id); handleShow() }}>Комментарии</Button>
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
      <h1>{comment.name}</h1>
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
