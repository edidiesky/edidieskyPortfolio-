import React from 'react'
import styled from 'styled-components'
import {BiCheck} from 'react-icons/bi'

export default function Newsletter() {
    const data = [
        {id:1, title:'Lorem ipsum dolor sit amet dolor sit amet, elit.'},
        {id:2, title:'Lorem ipsum dolor sit amet dolor sit amet, elit.'},
        {id:3, title:'Lorem ipsum dolor sit amet dolor sit amet, elit.'},
        {id:4, title:'Lorem ipsum dolor sit amet dolor sit amet, elit.'},
        {id:5, title:'Lorem ipsum dolor sit amet dolor sit amet, elit.'}
    ]
  return (
    <NewsletterContent>
        <div className="newsletterWrapper">
            <div className="newsletterLeft" data-aos="fade-right" data-aos-duration='800'>
                <h2>Trusted Buying Experience
                    <span>Incididunt labore magna aliqua veniams</span>
                </h2>

                <button className="startBtn">Get Started</button>
            </div>
            <ul className="newsLetterRight" data-aos="fade-left" data-aos-duration='600'>
                {data.map(x=> {
                    return <li key={x.id}><BiCheck/> {x.title}</li>
                })}
            </ul>
        </div>
    </NewsletterContent>
  )
}

const NewsletterContent = styled.div`
width:100%;
margin:0 auto;
max-width:1600px;
z-index:50;
position:relative;
transform:translateY(50px);
 .newsletterWrapper {
    width:90%;
    margin:0 auto;
    background:var(--blue-2);
    padding:6rem 10rem;
    display:grid;
    z-index:50;
    grid-template-columns:repeat(auto-fit, minmax(300px, 1fr));
    grid-gap:3rem;
    grid-row-gap:5rem;  
    @media (max-width:1080px) {
        padding:5rem;
    }
    .newsletterLeft {
        width: 100%;
        display:flex;
        flex-direction:column;
        gap:3rem;
        align-items:flex-start;
        h2 {
            font-size:3.5rem;
            font-weight:700;
            color:#fff;

            span {
                display:block;
                font-size:2rem;
                padding:2rem 0;
                font-family:"Barlow", sans-serif;
                letter-spacing: 1px;
                font-weight:400;
            }
        }
        .startBtn {
                border:none;
                outline:none;
                padding:2rem 3.5rem;
                font-size:2rem;
                color:#fff;
                background:var(--red);
                &:hover {
                    opacity:.8;
                }
        }
    }
    .newsLetterRight {
        display:flex;
        flex-direction:column;
        gap:.5rem;
        @media (max-width:1080px) {
            gap:.3rem;
        }
        li {
            font-size:1.8rem;
            font-weight:400;
            color:#fff;
            display:flex;
            align-items:center;
            gap:1.5rem;
             font-size:1.86rem;
            font-weight:400;
            line-height:2;
            width:100%;
            letter-spacing:.6px;
            text-align:start;
            font-family:"Barlow", sans-serif;
            svg {
                width:3rem;
                height:3rem;
            }
        }
    }
 }
`
