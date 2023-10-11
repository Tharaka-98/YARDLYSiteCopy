import React from 'react';
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards'
import Guarantee from '../Guarantee';
import MeetEmerald from '../MeetEmerald';
// import Footer from '../Footer'

function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <Guarantee />
            <MeetEmerald />
            {/* <Footer /> */}
        </>
    )
}

export default Home;