import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import CommonSection from "../shared/CommonSection";
import Newsletter from "../shared/Newsletter";
import SearchBar from "../shared/Search-bar";
import TourCard from "../shared/TourCard";
import "../styles/tour.css";

// import useFetch from "../hooks/useFetch";
// import { BASE_URL } from "../utils/config";

const Tours = () => {
  const { items, loading, error } = useSelector((state) => state.product);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tours = items.data || {};

  // const tourCount = tours.length;

  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  // const {
  //   data: tours,
  // } = useFetch(`${BASE_URL}/tours?page=${page}`);
  // const { data: tourCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`);

  useEffect(() => {
    const pages = Math.ceil(tours.length / 8);
    setPageCount(pages);
    window.scrollTo(0, 0);
  }, [page, tours]);

  return (
    <>
      <CommonSection title={"All Tours"} />
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>
      <section className='pt-0'>
        <Container>
          {loading && <h4 className='text-center pt-5'>Loading...</h4>}
          {error && <h4 className='text-center pt-5'>{error.message}</h4>}
          {!loading && !error && (
            <Row>
              {tours?.map((tour) => (
                <Col lg='3' md='6' sm='6' className='mb-4' key={tour._id}>
                  <TourCard tour={tour} />
                </Col>
              ))}
              <Col lg='12'>
                <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>
                  {[...Array(pageCount).keys()].map((number) => (
                    <span
                      key={number}
                      onClick={() => setPage(number)}
                      className={page === number ? "active_page" : ""}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default Tours;
