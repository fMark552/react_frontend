import { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/Blog.css'

const Blog = () => {
  const [blog, setBlog] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:1313/aha')
        setBlog(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      <div>
        <h1 className="blog_title">Porsche blog</h1>
        <h3 className="dummy_lorem">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt a
          mollitia voluptas dolorum reiciendis possimus ex iste est corporis
          nemo, quod commodi maiores reprehenderit consequuntur pariatur amet
          quidem recusandae quos? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Reprehenderit error quos ipsam alias nisi voluptate.
          Repellat minus totam quos maiores porro, nostrum perspiciatis ex
          deleniti cum repudiandae suscipit neque unde. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Tempore iusto error sed harum magni
          facilis, nulla eius optio ab! Culpa totam alias sint optio repellat
          illum nesciunt ducimus suscipit autem!
        </h3>
      </div>
      <div>
        <h1 className="comment_title">Kommentek</h1>
        {blog.map((blog) => (
          <div key={blog.id}>
            <img width="200px" height="auto" src={blog.img} alt={blog.id} />
            <p>
              <h5>{blog.email}</h5>
            </p>
            <p>
              <h5>{blog.content}</h5>
            </p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
