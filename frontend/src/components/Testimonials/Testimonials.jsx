import React from 'react'

import Slider from 'react-slick'

import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {

    const settings = {
        dots: true,
        Infinity: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    Infinity: true,
                    dots: true
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }

  return <Slider {...settings} >
    <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid minima unde ab doloribus consequatur accusantium quas quisquam necessitatibus reprehenderit repudiandae quibusdam esse repellat expedita quia, atque placeat voluptatibus architecto! Sed.</p>

        <div className="d-flex align-items gap-4 mt-4">
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h5 className="mb-0 mt-3">
                    <h6 className="mb-0 mt-3">Jhon Doe</h6>
                    <p>Customer..</p>
                </h5>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid minima unde ab doloribus consequatur accusantium quas quisquam necessitatibus reprehenderit repudiandae quibusdam esse repellat expedita quia, atque placeat voluptatibus architecto! Sed.</p>

        <div className="d-flex align-items gap-4 mt-4">
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h5 className="mb-0 mt-3">
                    <h6 className="mb-0 mt-3">Lia Franklin</h6>
                    <p>Customer..</p>
                </h5>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid minima unde ab doloribus consequatur accusantium quas quisquam necessitatibus reprehenderit repudiandae quibusdam esse repellat expedita quia, atque placeat voluptatibus architecto! Sed.</p>

        <div className="d-flex align-items gap-4 mt-4">
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h5 className="mb-0 mt-3">
                    <h6 className="mb-0 mt-3">Jhon Doe</h6>
                    <p>Customer..</p>
                </h5>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid minima unde ab doloribus consequatur accusantium quas quisquam necessitatibus reprehenderit repudiandae quibusdam esse repellat expedita quia, atque placeat voluptatibus architecto! Sed.</p>

        <div className="d-flex align-items gap-4 mt-4">
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h5 className="mb-0 mt-3">
                    <h6 className="mb-0 mt-3">Lia Franklin</h6>
                    <p>Customer..</p>
                </h5>
            </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid minima unde ab doloribus consequatur accusantium quas quisquam necessitatibus reprehenderit repudiandae quibusdam esse repellat expedita quia, atque placeat voluptatibus architecto! Sed.</p>

        <div className="d-flex align-items gap-4 mt-4">
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h5 className="mb-0 mt-3">
                    <h6 className="mb-0 mt-3">Jhon Doe</h6>
                    <p>Customer..</p>
                </h5>
            </div>
        </div>
    </div>
  </Slider>
}

export default Testimonials