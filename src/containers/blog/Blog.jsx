import React from 'react'
import './blog.css'
import Article from '../../components/article/Article';
import blog01 from '../../assets/blog01.png';
import blog02 from '../../assets/blog02.png';
import blog03 from '../../assets/blog03.png';
import blog04 from '../../assets/blog04.png';
import blog05 from '../../assets/blog05.png';

export default function Blog() {
  return (
    <div className='blog section_padding' id='blog'>
      <div className='blog-heading'>
          <h1 className='gradient_text'>A Lot is happening, <br />We are blogging about it.</h1>
      </div>
      <div className='blog-container'>
        <div className='blog-container-A'>
          <Article  image={blog01} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" date='Sep 26, 2021'/>
        </div>
        <div className='blog-container-B'>
          <Article image={blog02}  title="GPT-3 and Open  AI is the future. Let us exlore how it is?" date='Sep 26, 2021'/>
          <Article  image={blog03} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" date='Sep 26, 2021'/>
          <Article image={blog04}  title="GPT-3 and Open  AI is the future. Let us exlore how it is?" date='Sep 26, 2021'/>
          <Article  image={blog05} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" date='Sep 26, 2021'/>
        </div>
      </div>
    </div>
  )
}
