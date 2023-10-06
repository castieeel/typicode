import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Post } from './Post'
import { PaginationComponent } from './Pagination'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useGetPostsQuery } from '../services/api'
import { type iPost } from '../models'

export const Main: React.FC = () => {
  const { data: posts } = useGetPostsQuery(null)

  return (
    <Container className="p-3">
    <Row>
    <PaginationComponent/>
    { posts?.slice(0, 8).map((post: iPost) => <Post post={post} key={post.id}/>) }
    </Row>
    </Container>
  )
}
