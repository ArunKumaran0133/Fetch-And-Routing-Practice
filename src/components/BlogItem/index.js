import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {eachData} = props
  const {author, avatarUrl, id, imageUrl, title, topic} = eachData

  return (
    <Link to={`/blogs/${id}`} className="link-text">
      <li className="item-container" data-testid="loader">
        <img src={imageUrl} alt={title} className="image-blog-item" />
        <div>
          <h1 className="topic-text">{topic}</h1>
          <h1 className="title-text">{title}</h1>
          <div className="author-logo-text-container">
            <img src={avatarUrl} alt={title} className="avatar-logo" />
            <p className="topic-text">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
