import React from 'react'
import { Col } from 'reactstrap'
import TourCard from '../../shared/TourCard'
import {useSelector} from "react-redux"

import useFetch from '../../hooks/useFetch'
import { BASE_URL } from '../../utils/config.js'

const FeaturedTourList = () => {

  const { items, loading, error } = useSelector((state) => state.product);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tours = items.data || {};

  // const {data: featuredTours, loading, error } = useFetch(`${BASE_URL}/tours/search/getFeatureTour`)

  return <>
        {loading && <h4>Loading.....</h4>}
        {error && <h4>{error}</h4>}
        { !loading && !error &&
          tours?.map((tour, index)=>(
              <Col lg="3" md='4' sm='6' className='mb-4' key={index}>
                  <TourCard tour={tour}/>
              </Col>
          ))
        }
  </>
}

export default FeaturedTourList