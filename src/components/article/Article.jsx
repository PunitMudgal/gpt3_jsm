import React from 'react'
import './article.css'

export default function Article(props) {
  return (
    <div className='blog_article'>
      <div className="blog_article-image">
        <img src={props.image} alt="not found!" />
      </div>
      <div className="blog_article-content">
        <div>
          <p>{props.date}</p>
          <h3>{props.title}</h3>
        </div>
        <p>Read Fulll Article</p>
      </div>
    </div>
  )
}
