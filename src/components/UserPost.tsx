import React from 'react'
import { type iPost } from '../models'

interface iProps {
  post: iPost
}

export const UserPost: React.FC<iProps> = ({ post }) => {
  return (
 <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://pdacdn.com/photo/y_c5da993a.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
      </div>
    </div>
  </div>
</div>
  )
}
