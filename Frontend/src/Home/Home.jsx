import React from 'react'
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner'
import Freebook from '../Components/Freebook';
import Footer from '../Components/Footer'
import Login from '../Components/Login';
import Register from '../Components/Register';


const Home = () => {
  return (
    <>
     <Navbar/>
     <Banner/>
     <Freebook/>
     <Footer/>
     <Login/>
     <Register/>
    </>
  )
}

export default Home