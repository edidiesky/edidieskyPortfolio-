import React from 'react'
import Styled from 'styled-components'
import {FaSearch, FaLink} from 'react-icons/fa'
export default function BlogCard({x}) {
  return (
     <CardContainer key={x.id}>
      <div className="imageWrapper">
        <img src={x.image} className='cardImage' alt='blog-images'/>
        <div className="imageDetails">
          <FaLink/>
          <FaSearch/>
        </div>
      </div>
      <header>
        <h2>{x.title}</h2>
        <div className="category">
           <h4>Tags:</h4>
          <div className="categoryWrapper">
          {x.tags.map(x=> {
            return <span className="tagspan" key={x.id}>
              {x}
            </span>
          })}
          </div>
          
        </div>
        <p>{x.description}</p>
        <div className='btnWrapper'>
        <button className='blogBtn'>Read More</button>
        </div>
      </header>
    </CardContainer>
  )
}



const CardContainer = Styled.div`
width:100%;
.imageWrapper {
  width:100%;
  position:relative;
  height:40rem;
  position:relative;
  overflow-y:hidden;
  &:hover .imageDetails {
    top:0;
  }
  .cardImage {
    position: absolute;
    top: 0;
    height: 100%;
    left: 0;
    bottom: 0;
    right: 0;
    width:100%;
    object-fit: cover;
  }
  .imageDetails {
    position:absolute;
    top:100%;
    left:0;
    width:100%;
    transition:all .3s;
    height:100%;
    background: linear-gradient(to right,#0d2041b3,#0b1f41e3);
    display:flex;
    align-items:center;
    justify-content:center;
    gap:1.6rem;
    svg {
      color:var(--white);
      width:2.5rem;
      height:2.5rem; 
      cursor:pointer; 
    }
  }
}
 header {
  width:90%;
  margin:0 auto;
  padding:2.4rem;
  background:var(--white);
  transform:translateY(-50px);
  display:flex;
  flex-direction:column;
  gap:2rem;
  align-items:flex-start;
  @media (max-width:980px) {
  padding:2rem 2rem;
  width:95%;
}
.btnWrapper {
  width:100%;
  display:flex;
  align-items:center;
button {
        border:none;
        outline:none;
        font-size:1.6rem;
        font-weight:600;
        color:var(--red);
        background:transparent;
        text-align:start;
        cursor:pointer;
        transition:all .3s;
        &:hover {
            color:var(--blue-1);
        }
    }
  }
  h2 {
    font-size:2.4rem;
    font-weight:700;
    line-height:1.6;
    color:var(--text-color);
  }
  p {
    font-size:1.7rem;
    font-weight:300;
    color:var(--grey);
    z-index:400;
    line-height:1.7;
    text-align:start;
     font-family:"Barlow", sans-serif;
   }
  .category {
    display:flex;
    align-items:center;
    gap:1.3rem;
    width:100%;
    font-size:1.8rem;
    font-weight:400;
    justify-content:flex-start;
    h4 {
      font-size:1.6rem;
      font-weight:400;
      color:var(--grey);
      @media (max-width:480px) {
       font-size:2rem;
      }
    }
    .categoryWrapper {
      width:100%;
    .tagspan{
      font-size:1.6rem;
      font-weight:400;
      color:var(--blue-1);
      margin:.6rem .8rem;
      display:inline-block;
      @media (max-width:480px) {
       font-size:2rem;
      }
      @media (max-width:480px) {
       font-size:2rem;
      }
      position:relative;
      &::after {
        position:absolute;
        top:50%;
        transform:translateY(-40%);
        width:.4rem;
        border-radius:50%;
        left:-8px;
        height:.4rem;
        background:var(--blue-1);
        content:'';
      }
    }
  }
  }
 }
`