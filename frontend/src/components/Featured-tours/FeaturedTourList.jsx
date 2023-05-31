import React from 'react'
import { Col } from 'reactstrap'
import TourCard from '../../shared/TourCard'

import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../../utils/config.js'

const FeaturedTourList = () => {

  const {data: featuredTours, loading, error } = useFetch(`${BASE_URL}/tours/search/getFeatureTour`)

  return <>
        {loading && <h4>Loading.....</h4>}
        {error && <h4>{error}</h4>}
        { !loading && !error &&
          featuredTours?.map((tour, index)=>(
              <Col lg="3" md='4' sm='6' className='mb-4' key={index}>
                  <TourCard tour={tour}/>
              </Col>
          ))
        }
  </>
}

export default FeaturedTourList