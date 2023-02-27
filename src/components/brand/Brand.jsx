import React from 'react'
import './brand.css'
import atlassian from '../../assets/atlassian.png';
import dropbox from '../../assets/dropbox.png';
import shopify from '../../assets/shopify.png';
import slack from '../../assets/slack.png';
import google from '../../assets/google.png';


export default function Brand() {
  return (
    <div className='full-brand section_margin'>
      <div>
        <img src={atlassian} alt="404 img not found" />
      </div>
      <div>
        <img src={dropbox} alt="404 img not found" />
      </div>
      <div>
        <img src={shopify} alt="404 img not found" />
      </div>
      <div>
        <img src={slack} alt="404 img not found" />
      </div>
      <div>
        <img src={google} alt="404 img not found" />
      </div>
    </div>
  )
}
