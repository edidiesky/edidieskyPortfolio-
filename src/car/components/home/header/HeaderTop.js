
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  FaSun,
  FaPhoneAlt
} from 'react-icons/fa'
import { Bar, SmallSidebar, ToggleBtn } from '../../common'
import { BiCart, BiSearch } from 'react-icons/bi'
import { CgMenuRight } from 'react-icons/cg'

import { toggleStorageTheme, ClearUserInfo, ClearauthInfo, ClearBagData, onSearchModal } from '../../../Features'

const data = [
  { id: 1, title: 'Home', path: '' },
  { id: 2, title: 'Product', path: '/avada/product' },
  { id: 3, title: 'About Us', path: "" },
  { id: 4, title: 'Latest News', path: "auto-news" },
  { id: 5, title: 'Contact', path: 'avada/contact' },
]
export default function HeaderTop() {

  const { thememode } = useSelector(store => store.toggle)
  const { userInfo } = useSelector(store => store.user)
  const { totalQuantity } = useSelector(store => store.bag)
  const dispatch = useDispatch()

  // bag first digit name
  const username = userInfo?.lastname[0]

  useEffect(() => {
    document.documentElement.className = thememode
    localStorage.setItem('theme', thememode)
  }, [thememode])


  const [side, setSide] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [task, setTask] = useState(false)


  const toggleSidebar = () => setSide(!side)

  const handleLogOut = () => {
    dispatch(ClearBagData())
    dispatch(ClearUserInfo())
    dispatch(ClearauthInfo())
    window.location.reload()
  }

  const HeaderTopLeft = () => {
    return (
      <div className='headerTopLeft'>
        <img className='imageIcon' src='/images/dealer1.png' alt='images' />
        <div className='headerTopWrapper'>
          {data.map((x) => {
            return <Link className='link' to={`${x.path}`} key={x.id}>{x.title}</Link>
          })}
        </div>

      </div>
    )
  }


  const HeaderTopRight = () => {
    return (
      <div className='headerTopRight'>
        {userInfo ? (
          <div className='headerTopProfile'>
            <div className='searchWrapper'>
              <div className='iconWrapper search' onClick={() => dispatch(onSearchModal())}>
                <BiSearch />
              </div>
            </div>
            <Link to={'/avada/cart'} className='iconWrapper'>
              <BiCart />
              <span className='notifSpan'>{totalQuantity}</span>
            </Link>
            <div className='authorWrapper'>
              <div className='author'>{username}</div>

              {
                userInfo?.isAdmin ? <div className='profileList'>

                  <Link to={'/avada/profile'}>Profile</Link>
                  <Link to={'/avada/dashboard'}>Dashboard</Link>
                  <div className='logOut' onClick={handleLogOut}>Sign out</div>
                </div> :
                  <div className='profileList list1'>
                    <Link to={'/avada/profile'}>Profile</Link>
                    <div onClick={handleLogOut}>Sign out</div>
                  </div>
              }

            </div>

          </div>

        ) : (<div className='headerTopProfile'>
          <div className='searchWrapper'>
            <div className='iconWrapper search' onClick={() => dispatch(onSearchModal())}>
              <BiSearch />
            </div>
          </div>
          <Link to={'/auth/signin'} className='callBtn'><FaPhoneAlt />Call (202) 115-2099</Link>
        </div>)
        }
      </div>
    )
  }

  return (
    <HeaderTopContainer>
      <div className='headerTopWrapperContainer'>
        <div className="headerTopWrapperContent">
          <SmallSidebar side={side} toggleSidebar={toggleSidebar} />
          <HeaderTopLeft />
          <div className='barWrapper'>
            <CgMenuRight onClick={toggleSidebar} />
          </div>
        </div>
        <HeaderTopRight />
      </div>

    </HeaderTopContainer>
  )
}


const HeaderTopContainer = styled.div`
min-height:10rem;
width:100%;
border:.3px solid rgba(0,0,0,.08);
display:flex;
align-items:center;
background:var(--white);
padding:1rem 0;
.headerTopWrapperContainer {
margin:0 auto;
width:90%;
max-width:1600px;
display:flex;
align-items:center;
justify-content:space-between;

@media (max-width:980px){
  padding:0 6rem;
}
 @media (max-width:780px){
  padding:2rem 3rem;
  width: 100%;
  gap:2rem;
  flex-direction: column;
  align-items: flex-start;
}
.headerTopWrapperContent {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  @media (max-width:780px) {
    width: 100%;
  }
  .headerTopLeft {
    display:flex;
    align-items:center;
    gap:6rem;
  .imageIcon{
  width:auto;
  height:7rem;
  }
}
  .barWrapper {
    width:5rem;
    height:5rem;
    border-radius:50%;
    border:1px solid var(--grey-2);
     display: flex;
  align-items: center;
  justify-content:center;
  cursor:pointer;
  transition:all .4s;
   @media (min-width:780px) {
            display:none;
        }
  &:hover {
    transform: scale(1.01);
    box-shadow:0 3px 10px rgba(0,0,0,.4);
  }

  svg {
    width:70%;
    height:70%;
    color:var(--dark-1);
  }
  }
}

 .headerTopWrapper {
  display:flex;
  align-items:center;
  gap:4rem;
   @media (max-width:1080px){
     display:none;
    }
  .link {
    font-size:2rem;
    font-weight:500;
    color:var(--dark-1);
    transition:all .5s;
    font-family:"Barlow", sans-serif;
    &:hover {
      color:var(--red);
    }
  }
 }
 .headerTopRight {
  display:flex;
  align-items:center;
  gap:1rem;
  .headerTopProfile {
    position:relative;
    display:flex;
    align-items:center;
    gap:1.4rem;
    .searchWrapper {
      display:flex;
      align-items:center;
      position:relative;
      gap:1rem;
      overflow:hidden    }
    .authorWrapper {
      display:flex;
      align-items:center;
      position:relative;
      &:hover .profileList {
        visibility:visible;
        opacity:1;
        transform:scale(1);
      }
      .profileList {
        background:#fff;
        position:absolute;
        bottom:-280%;
        z-index:1000;
        right:-60px;
        box-shadow:0 2px 10px rgba(0,0,0,.4);
        display:flex;
        flex-direction:column;
        visibility:hidden;
        opacity:0;
        transform:scale(.8);
        transition:all .4s;
        min-width:200px;
        &.list1 {
          bottom:-230%;
        }
        a, div {
          padding:1.2rem 3rem;
          font-size:1.5rem;
          color:var(--dark-1);
          border-bottom:1px solid var(--grey-3);
          font-weight:600;
          cursor:pointer;
          &:hover {
            background:var(--grey-2);
          }
        }
      }
    .author {
      width:4.8rem;
      height:4.8rem;
      border-radius:50%;
      align-items:center;
      display:flex;
      justify-content:center;
      font-size:2rem;
      justify-content:center;
      font-weight:600;
      background:var(--text-color);
      color:#fff;
      
    }
  }
    .iconWrapper {
      position:relative;
      width:4.8rem;
      height:4.8rem;
      border-radius:50%;
      display:flex;
      align-items:center;
      justify-content:center;
      z-index:1000;
      &.search {
        background:#fff;
        width:6rem;
      height:6rem;
        svg {
          width:60%;
      height:60%;
          color:var(--blue-2);
        }
      }
      .notifSpan {
        width:2rem;
        height:2rem;
        border-radius:50%;
      display:flex;
      position:absolute;
      top:-3px;
      right:-5px;
      align-items:center;
      justify-content:center;
      font-size:.9rem;
      font-weight:600;
      background:var(--red);
      color:#fff;
      }
        background:var(--grey-3);

      svg {
        width:60%;
      height:60%;
      color:var(--text-color);
      }
    }

    // .headerDropdown {
    //   padding:2.4rem 0;
    //   background:#fff;
    //   box-shadow:0 2px 10px rgba(0,0,0,.4);
    //   position:absolute;
    //   bottom:-200%;
    //   left:-200%;
    //   min-width:200px;
    //   display:flex;
    //   flex-direction:column;
    //   li {
    //     width:100%;
    //     padding:1.4rem 2rem;
    //     font-size:1.5rem;
    //     color:var(--dark-1);
    //     font-weight:400;
    //     &:hover {
    //       background:var(--grey-3);
    //     }
    //   }
    // }
  }
  .darkIcon{
      width:3.5rem;
      height:3.5rem;
      border-radius:50%;
      display:flex;
      background:var(--grey-3);
    align-items:center;
    justify-content:center;
    cursor:pointer;
    svg {
      width:60%;
      height:60%;
    }
      &:hover {
        background:var(--grey-2);
      }
    }
.callBtn {
  border:none;
  outline:none;
  padding:1.6rem 2rem;
  border-radius:42px;
  background:var(--red);
  font-size:2rem;
  font-weight:700;
  display:flex;
  align-items: center;
  gap:1rem;
  letter-spacing:.5px;
  color:var(--white);
  transition:all .5s;
  cursor:pointer;
  svg {
    font-size: 2.4rem;
  }
  &.signup {
    background:var(--red);
    color:#fff;
    &:hover {
    background:var(--blue-1);
  }
  }
  &:hover {
    background:var(--blue-1);
    color:#Fff;
  }
   @media (max-width:980px){
     font-size:1.6rem;
     padding:1.6rem 3rem;
    }
  }
}
}
`

