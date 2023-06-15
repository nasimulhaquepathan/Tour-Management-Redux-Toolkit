import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Button, Container, Row } from 'reactstrap'
import { logout, reset } from '../../redux/slices/auth/authSlice'
// import { AuthContext } from '../../context/AuthContext'

import logo from '../../assets/images/logo.png'
import './header.css'

const nav_Links = [
  {
    path: "/home",
    display: 'Home'
  },
  {
    path: "/about",
    display: 'About'
  },
  {
    path: "/tours",
    display: 'Tours'
  },
]

const Header = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const headeRef = useRef(null)
  const menuRef = useRef(null)
  const { user } = useSelector((state) => state.auth)
  // const {user, dispatch} = useContext(AuthContext)

  const Logout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  const stickyHeaderFunc = () =>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || 
        document.documentElement.scrollTop > 80 ) {
          headeRef.current.classList.add('sticky_header')
        } else {
        headeRef.current.classList.remove('sticky_header')
        }
    }) 
  }

  useEffect(()=>{
    stickyHeaderFunc()

    return window.removeEventListener('scroll', stickyHeaderFunc)
  })

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu')

  return <header className='header' ref={headeRef}>
    <Container>
      <Row> 
        <div className="nav_wrapper d-flex align-items-center justify-content-between">
          {/* ------------------ Logo ======================== */}
        <div className="logo">
          <img src={logo} alt="" />
        </div>
          {/* ------------------ Logo end ======================== */}
          {/* ------------------ menu start ======================== */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu }>
            <ul className="menu d-flex align-items-center gap-5">
              {
                nav_Links.map((item, index)=>(
                  <li className="nav_item" key={index}>
                    <NavLink to={item.path} className={navClass=> navClass.isActive? "active_link" : ""}  >{item.display}</NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
          {/* ------------------ menu end ======================== */}
              <div className="nav_right d-flex align-items-center gap-4">
                <div className="nav_btns d-flex align-items-center gap-4">
                {
                  user? (
                    <>
                  <h5 className="mb-0">{user.username}</h5>
                  <Button className='btn btn-dark' onClick={Logout}>Logout</Button>
                  </>
                  ) : (
                    <>
                  <Button className='btn secondary__btn'><Link to="/login" >Login</Link></Button>
                  <Button className='btn primary__btn'><Link to="/register" >Register</Link></Button>
                  </>
                  )
                }
                </div>

                <span className="mobile_menu" onClick={toggleMenu}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
        </div>
      </Row>
    </Container>

  </header>
}

export default Header