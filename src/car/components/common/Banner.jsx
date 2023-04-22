import React from 'react'
import styled from 'styled-components'
import Links from './Links'
export default function Banner({ title, subtitle, type, step1, step2, step3 }) {


  return (
    <ProductBannerContainer>
      <div className="productBannerWrapper">
        <img src="/images/car-bg-stats.jpg" alt="" className="heroImage" />
        <div className="herogradient"></div>
        <div className="productSectionTitle">
          <h2>{title}</h2>
          <Links step1={step1} step2={step2} step3={step3} />
        </div>
      </div>

    </ProductBannerContainer>
  )
}

const ProductBannerContainer = styled.div`
width:100%;
.productTitleWrapper {
  width:100%;
  padding:1rem 0;
  background: linear-gradient(to right,#020a18,#fff);
  .productBanner1 {
    width:90%;
    margin:0 auto;
    display:flex;
    flex-direction:column;
    gap:1rem;
    h1 {
    font-size:6rem;
    font-weight:700;
    color:#fff;
    letter-spacing:2px;
    text-align:center;
  }
  .imageWrapper {
    width:12rem;
    height:12rem;
    border-radius:50%;
    background:var(--red);
    display:flex;
    align-items:center;
    justify-content:center;
    &:hover {
       background:var(--blue-1);
    }
    .icon {
      width:4rem;
      height:4rem;
      border:1px solid #fff;  
    }
  }
  }
  
}
.productBannerWrapper {
 width:100%;
    position:relative;
    min-height:8rem;
     @media (min-width:780px){
     min-height:20rem;
    }
    .heroImage {
        width:100%;
        position:absolute;
        top:0;
        left:0;
        height:100%;
        object-fit:cover;
    }
    .herogradient {
        background:linear-gradient(to right, #081B36, #4B172F);
        position:absolute;
        top:0;
        opacity:.8;
        width:100%;
        height:100%;
        z-index:50;
    }
    .productSectionTitle {
        width:60%;
        max-width:1100px;
        margin:0 auto;
        z-index:60;
        display:flex;
        justify-content:center;
        padding:10rem 0;
        align-items:center;
        flex-direction:column;
        gap:1.7rem;
        @media (max-width:1080px){
        width:90%;
    }
         @media (max-width:780px){
        width:90%;
    }
        h2 {
           color: #fff;
            font-size: 5rem;
            font-weight: 700;
            z-index: 500;
            line-height:1.2;
            text-align:center;
             @media (max-width:780px){
                 font-size:5rem;
             }
        }
       
    }
}
`
