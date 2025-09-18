import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'
export const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In laborum pariatur mollitia nihil saepe labore, reiciendis sunt ipsam sit iusto neque voluptas, omnis autem. Dicta dolorem tempora aspernatur a voluptates!</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>9463896804</li>
                    <li>chopragc03@gmail.com</li>
                </ul>
            </div>
            
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 @ tomato.com -All Right Reserved</p>
    </div>
  )
}
