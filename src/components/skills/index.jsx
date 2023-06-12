import React from "react";
import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";

const Skills = [
  "https://v1.brittanychiang.com/img/skills/html.png",
  "https://v1.brittanychiang.com/img/skills/css.png",
  "https://v1.brittanychiang.com/img/skills/js.png",
  "https://v1.brittanychiang.com/img/skills/node.png",
  "https://v1.brittanychiang.com/img/skills/mongodb.png",
  "https://v1.brittanychiang.com/img/skills/github.png ",
  "./tech/redux.png",
  "https://v1.brittanychiang.com/img/skills/js.png",
  "https://v1.brittanychiang.com/img/skills/linux.png",
  "./tech/nodejs.png",
  "./tech/typescript.png",
];

const tools = ["Command Line", "Post Man", "Git + Github", "Chrome DevTools"];

const tools2 = ["Redux", "Redux Dev tool", "Context Api"];

export default function SkillsIndex() {
  const SkillsLeft = () => {
    return (
      <div className="left w-85 auto h-100 flex column gap-3">
        <div className="w-100 auto">
          <h2
            style={{ fontWeight: "normal" }}
            className="head text-white family2 text-start"
          >
            Skills
          </h2>
        </div>
        <div className="w-100 grid grid-wrapper">
          <div className="left flex column gap-2">
            <div className="flex item-center gap-3">
              <img
                src="https://v2.brittanychiang.com/img/icons/settings.png"
                alt=""
                className="icon1"
              />
              <h3
                style={{ fontWeight: "normal" }}
                className="fs-30 family2 text uppercase text-white"
              >
                TECHNOLOGIES
              </h3>
            </div>
            <div className="w-100 grid grid-auto">
              {Skills.map((x, index) => {
                return (
                  <div
                    className="w-100 card"
                    key={x.id}
                    data-aos="fade"
                    data-aos-duration="1200"
                    data-aos-delay={index * 150}
                  >
                    <img src={x} alt="" className="image" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="left flex column gap-4">
            <div className="flex item-center gap-3">
              <img
                src="https://v2.brittanychiang.com/img/icons/repair-tools.png"
                alt=""
                className="icon1"
              />
              <h3
                style={{ fontWeight: "normal" }}
                className="fs-24 family2 uppercase text-white"
              >
                Tools
              </h3>
            </div>
            <div className="flex column gap-1">
              {tools.map((x, index) => {
                return (
                  <div
                    className="w-100 fs-14 text-white family1 flex item-center gap-1"
                    key={x.id}
                    data-aos="fade"
                    data-aos-duration="1200"
                    data-aos-delay={index * 150}
                  >
                    <BiChevronRight fontSize={"24px"} /> {x}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="left flex column gap-4">
            <div className="flex item-center gap-3">
              <img
                src="https://v2.brittanychiang.com/img/icons/light-bulb.png"
                alt=""
                className="icon1"
              />
              <h3
                style={{ fontWeight: "normal" }}
                className="fs-24 family2 uppercase text-white"
              >
                Knowledge
              </h3>
            </div>
            <div className="flex column gap-1">
              {tools2.map((x, index) => {
                return (
                  <div
                    className="w-100 fs-14 text-white family1 flex item-center gap-1"
                    key={x.id}
                    data-aos="fade"
                    data-aos-duration="1200"
                    data-aos-delay={index * 150}
                  >
                    <BiChevronRight fontSize={"24px"} /> {x}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <SkillsWrapper id="skills">
      <SkillsLeft />
    </SkillsWrapper>
  );
}

const SkillsWrapper = styled.div`
  width: 100%;
  min-height: 50vh;
  position: relative;
  padding: 5rem 0;
  display: grid;
  place-items: center;
  background-color: var(--primary);
  .grid-auto {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    @media (max-width: 980px) {
      grid-template-columns: repeat(auto-fit, minmax(auto, 1fr));
    }
    @media (max-width: 580px) {
      grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
      grid-row-gap: 5rem;
    }
  }
  .text {
  }
  .grid-wrapper {
    grid-template-columns: 1fr 20vw 20vw;
    grid-gap: 8rem;
    @media (max-width: 980px) {
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }
  }
  .heads::after {
    position: absolute;
    width: 100px;
    height: 2px;
    background-color: var(--secondary);
    bottom: -25%;
    left: 0%;
    content: "";
  }
  .icon1 {
    filter: grayscale(100%);
    width: 35px;
    height: auto;
    transition: all 0.6s ease;
    @media (max-width: 580px) {
      width: 30px;
    }
    &:hover {
      filter: brightness(80%);
    }
  }
  .card {
    position: relative;
    display: grid;
    place-items: center;
    .image {
      width: 70px;
      /* height: auto; */
      @media (max-width: 580px) {
        width: 45px;
      }
      transition: all 0.6s ease;
      &:hover {
        filter: brightness(100%);
      }
    }
  }
  .left {
    padding: 4rem 0;
  }
`;
