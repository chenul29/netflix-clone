import React from 'react'
import '../Footer/footer.css'
import yt_icon from '../../../assests/youtube_icon.png'
import twiter_icon from '../../../assests/twitter_icon.png'
import instergram_icon from '../../../assests/instagram_icon.png'
import facebook_icon from '../../../assests/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={yt_icon} alt="" />
        <img src={twiter_icon} alt="" />
        <img src={instergram_icon} alt="" />
        <img src={facebook_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Inverster Relation</li>
        <li>Jobs</li>
        <li>Term of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Prefencese</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>1997 - 2023 Netflix. Inc.</p>
    </div>
  )
}

export default Footer
