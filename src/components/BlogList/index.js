import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogsData: [], isLoading: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      author: eachItem.author,
      avatarUrl: eachItem.avatar_url,
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      title: eachItem.title,
      topic: eachItem.topic,
    }))
    this.setState({blogsData: updatedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state
    return (
      <ul className="list-container">
        {isLoading ? (
          <Loader type="TailSpin" color="lightblue" />
        ) : (
          blogsData.map(eachData => (
            <BlogItem key={eachData.id} eachData={eachData} />
          ))
        )}
      </ul>
    )
  }
}

export default BlogList
