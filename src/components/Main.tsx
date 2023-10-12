import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Post } from './Post'
import { PaginationComponent } from './Pagination'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useGetPostsQuery } from '../services/api'
import { type iPost } from '../models'
import Spinner from 'react-bootstrap/Spinner'
import { useSelector } from 'react-redux'
import { type RootState } from '../store/store'

export const Main: React.FC = () => {
  const { data: posts, isLoading, error } = useGetPostsQuery(null)
  const page = useSelector((state: RootState) => (state.slicePage.numPage))
  const limit = 8
  const totalPage = (posts != null) ? Math.ceil(posts.length / limit) : 0
  const arrayPost: iPost[] = []
  let arrayPostNew: iPost[] = []
  console.log(page)

  if (posts != null) {
    for (let i = (page - 1) * limit; i < (page * limit); i++) {
      arrayPost.push(posts[i])
    }
    if (page === totalPage) { // удаляю пустые элементы из массива
      arrayPostNew = arrayPost.filter((elem) =>
        elem !== undefined && elem !== null
      )
    }
  }
  console.log(arrayPost)

  if (error != null) {
    if ('status' in error) {
      // you can access all properties of `FetchBaseQueryError` here
      const errMsg = 'error' in error ? error.error : JSON.stringify(error.data)

      return (
        <div>
          <div>An error has occurred:</div>
          <div>{errMsg}</div>
        </div>
      )
    } else {
      // you can access all properties of `SerializedError` here
      return <div>{error.message}</div>
    }
  }

  return isLoading
    ? (
      <div className="d-flex justify-content-center"><Spinner animation="border" variant="primary" /></div>
      )
    : (
      <Container className="p-3">
      <Row className="row g-3">
        <PaginationComponent totalPage={totalPage}/>
      {page !== totalPage
        ? arrayPost?.map((post: iPost) => <Post post={post} key={post.id} />)
        : arrayPostNew?.map((post: iPost) => <Post post={post} key={post.id} />)
      }
      </Row>
      </Container>
      )
}
