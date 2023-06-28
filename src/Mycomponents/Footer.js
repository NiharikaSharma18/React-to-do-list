import React from 'react'
import './footer.css'
export const Footer = () =>{
  let footerStyle = {
    position:"relative",
    top:"100vh",
    width:"100%", 

  }
  return (
    <footer className="bg-dark text-light py-2" style={footerStyle}>
  <p className=" bg-darktext-center">
    copyright &copy; MytodosList.com</p>    
    </footer>
  )
}


