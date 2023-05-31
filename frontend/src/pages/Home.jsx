import React from 'react'
import SearchBar from '../shared/Search-bar'
import '../styles/Home.css'

import { Col, Container, Row } from 'reactstrap'
import experienceImg from '../assets/images/experience.png'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
import ServiceList from '../services/ServiceList'
import Subtitle from '../shared/Subtitle'
import MasonaryImage from '../components/Image-gellary/MasonaryImage'
import Testimonials from '../components/Testimonials/Testimonials'
import Newsletter from '../shared/Newsletter'

const Home = () => {
  return <>
  {/* ================ Hero section start ================= */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero_content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Know Before You Go'}/>
                <img src={worldImg} alt="" />
              </div>
              <h1>Traveling opens the door to creating <span className='highlight'>memories</span> </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus distinctio similique laborum voluptatibus natus, dicta unde repudiandae dolorem consequatur error?
              </p>
            </div>
          </Col>

        <Col lg='2'>
          <div className="hero_img-box">
            <img src={heroImg} alt="" />
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero_img-box hero_video-box mt-4">
            <video src={heroVideo} controls />
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero_img-box mt-5">
            <img src={heroImg02} alt="" />
          </div> 
        </Col>
      
    <SearchBar/>
        </Row>
      </Container>
    </section>
  {/* ================ Hero section start ================= */}
    <section>
      <Container>
        <Row>
        <Col lg='3'>
          <h5 className="services_subtitle">What we serve</h5>
          <h5 className="services_title">We offer our bes services</h5>
        </Col>
        <ServiceList/>
        </Row>
      </Container>
    </section>


{/* ===========Feature tour section start =================== */}
<section>
    <Container>
      <Row>
        <Col lg="12" className='mb-5'>
          <Subtitle subtitle={"Explore"}/>
          <h2 className="featured_tour-title">Our featured tours</h2>
        </Col>
        <FeaturedTourList/>
      </Row>
    </Container>
  </section>

{/* ===========Feature tour section end =================== */}
{/* ===========Experience section start =================== */}

<section>
  <Container>
    <Row>
      <Col lg='6'>
        <div className="experience_content">
          <Subtitle subtitle={"Experience"} />
          <h2 >With our all experience <br />We will serve you </h2>
          <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, quisquam.</p>
        </div>

      <div className="counter_wrapper d-flex align-item-center gap-5">
        <div className="counter_box">
          <span>12k+</span>
          <h5>Successful trip..</h5>
        </div>
        <div className="counter_box">
          <span>2k+</span>
          <h5>Regular clients..</h5>
        </div>
        <div className="counter_box">
          <span>15</span>
          <h5>Years experience..</h5>
        </div>
      </div>
      </Col>
      <Col lg='6'>
        <div className="experience_img">
          <img src={experienceImg} alt="" />
        </div>
      </Col>
    </Row>
  </Container>
</section>
{/* ===========Experience section end =================== */}



{/* =========== Gellery section start =================== */}
<section>
  <Container>
    <Row>
      <Col lg='12'>
        <Subtitle subtitle={"Gellery"} />
          <h2 className="gallery_title">Visit our customers tour gellery</h2>
      </Col>
      <Col lg='12'>
        <MasonaryImage/>
      </Col>
    </Row>
  </Container>
</section>


{/* =========== Gellery section end =================== */}
{/* =========== Testimonial section start =================== */}

<section>
  <Container>
    <Row>
      <Col lg='12'>
        <Subtitle subtitle={'First Love'}/>
        <h2 className="testimonial_title">
          What our fans say about us
        </h2>
      </Col>
      <Col lg='12'>
        <Testimonials/>
      </Col>
    </Row>
  </Container>
</section>
{/* =========== Testimonial section end =================== */}

<Newsletter/>

{/* =========== Gellery section end =================== */}
  </>
}

export default Home