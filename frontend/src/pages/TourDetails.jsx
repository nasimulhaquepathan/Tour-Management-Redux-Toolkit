import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, Form, ListGroup, Row } from 'reactstrap'
import avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking'
import { AuthContext } from '../context/AuthContext'
import useFetch from '../hooks/useFetch'
import Newsletter from '../shared/Newsletter'
import '../styles/tour-details.css'
import calculateAvgRating from '../utils/avgRating'
import { BASE_URL } from '../utils/config'

const TourDetails = () => {
  const {id} = useParams()
  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null)
  const {user} = useContext(AuthContext);
  // this is an static data late we will call our API and load our data form database .....
  // fetch data from database 
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`)
 
  // const tour = tourData.find(tour => tour.id === id)
  const {photo, title, desc, price, reviews, address ,city, distance, maxGroupSize} = tour;

  const {totalRating, avgRating} = calculateAvgRating(reviews)
  /// formate date 
  const options = {day: 'numeric', month: 'long', year: 'numeric'}
///  submit request to the server.


const submitHandler = async e => {
  e.preventDefault();
  const reviwText = reviewMsgRef.current.value
 
   try {
    if(!user || user === undefined || user === null){
      alert('Please sign in')
    }

    const reviewObj = {
      username: user?.username,
      reviwText,
      rating: tourRating
    }

    const res = await fetch(`${BASE_URL}/review/${id}`, {
      method: 'post',
      header: {
        'content-type' : 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(reviewObj)
    })

    const result = await res.json()
    if(!res.ok) {
      return alert(result.message)
    }
    alert(result.message)
   } catch (error) {
    alert(error.message)
   }
  // later will call our api
  alert(`${reviwText}, ${tourRating}`)
}


useEffect(() => {
  window.scrollTo(0, 0);
}, [tour]);

  return <>
  <section>
    <Container>
      {loading && <h4 className='text-center pt-5'>Loading......</h4>}
      {error && <h4 className='text-center pt-5'>{error}</h4>}
     {
      !loading && !error &&  <Row>
      <Col lg='8'>
        <div className="tour_content">
          <img src={photo} alt="" />
          <div className="tour_info">
            <h2>{title}</h2>
            <div className="ratings d-flex align-items-center justify-content-between gap-5">
              <span className="d-flex align-items-center gap-1">
                <i className="ri-star-s-fill" style={{"color": "var(--secondary-color)"}}></i>
                { avgRating === 0 ? null : avgRating }
                {totalRating === 0 ? "Not rated" : 
                    (<span>({reviews?.length})</span>)
                  }
              </span>

            <span>
              <i className="ri-map-pin-user-line"></i> {address}
            </span>

            </div>

            <div className="tour_extra-details d-flex justify-content-between pt-3">
            <span><i className="ri-map-pin-2-line"></i>{city}</span>
              <span><i className="ri-money-dollar-circle-line"></i>{price}</span>
              <span><i className="ri-map-pin-time-line"></i>{distance} k/m</span>
              <span><i className="ri-group-line"></i>{maxGroupSize} people </span>
            </div>
            <h5>Description</h5>
            <p>{desc}</p>
          </div>
        </div>
{/* ============== tour reviews section start  ============ */}


          <div className="tour_reviews">
            <h4>Reviews ({reviews?.length})</h4>

            <Form onSubmit={submitHandler}>
              <div className="d-flex align-items-center gap-3 mb-4 rating_group">
                  <span onClick={()=> setTourRating(1)} >1<i className="ri-star-s-fill"></i></span>
                  <span onClick={()=> setTourRating(2)} >2<i className="ri-star-s-fill"></i></span>
                  <span onClick={()=> setTourRating(3)} >3<i className="ri-star-s-fill"></i></span>
                  <span onClick={()=> setTourRating(4)} >4<i className="ri-star-s-fill"></i></span>
                  <span onClick={()=> setTourRating(5)} >5<i className="ri-star-s-fill"></i></span>
              </div>

              <div className="review_input">
                <input type="text" placeholder='share your thoughts...'  ref={reviewMsgRef}/>
                <button className="btn primary__btn text-white" type='submit'>Submit</button>
              </div>
            </Form>

                  <ListGroup className='user_reviews'>
                    {reviews?.map((review, index)=> (
                      <div className="review_item" key={index}>
                        <img src={avatar} alt=""/>

                        <div className="w-100">
                          <div className="d-flex align-items-cener justify-content-between">
                            <div>
                              <h5>{review.username}</h5>
                              <p>{new Date(review.createdAt).toLocaleDateString("en-US", options)}</p>
                            </div>
                            <span className="d-flex align-items-center">{review.rating}<i className="ri-star-s-fill"></i></span>
                          </div>

                          <h6>{review.reviwText}</h6>
                        </div>
                      </div>
                    ))}

                  </ListGroup>

          </div>

{/* ============== tour reviews section end  ============ */}
{/* ============== tour reviews section ============ */}


         </Col>
         <Col lg='4'>
          <Booking tour={tour} avgRating={avgRating} />
         </Col>
    </Row>

     }
    </Container>
    <Newsletter/>
  </section>
  </>
}

export default TourDetails