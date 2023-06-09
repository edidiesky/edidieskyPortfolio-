import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import SplitType from "split-type";
import Pace from "pace-js";
import "pace-js/themes/yellow/pace-theme-minimal.css";
import gsap from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import { Layout } from "./screens";

export default function App() {
  // .to(".char", {
  //   delay: 0.8,
  //   stagger: 0.08,
  //   y: 0,
  //   duration: 0.1,
  // });
  useEffect(() => {
    //  preloader
    new SplitType("#herotext1");
    new SplitType("#herotext2");
    Pace.on("done", () => {
      gsap
        .timeline()
        .add("p")
        .to(".pace", {
          duration: 0.4,
          delay: 0.8,
          ease: "power1.out",
        })
        .to(
          ".pace",
          {
            height: "100%",
            duration: 0.8,
            top: 0,
            visibility: "hidden",
          },
          "-=.3"
        )
        .to(
          ".preloader .loading_text",
          1.3,
          {
            delay: 0.2,
            duration: 6,
            opacity: 0,
            yPercent: -400,
            ease: "expo.inOut",
          },
          "p"
        )
        .to(
          ".preloader",
          {
            delay: 0.8,
            duration: 1,
            top: -10000,
            ease: "expo.inOut",
          },
          "p"
        )
        .to(
          ".char",
          {
            delay: 2,
            opacity: 1,
            duration: 2,
            stagger: 0.06,
            ease: "expo.inOut",
          },
          "p"
        )
        .to(
          ".linktext2",
          {
            delay: 5,
            duration: 0.8,
            opacity: 1,
            transform: "translateY(0)",
            stagger: {
              amount: 0.8,
            },
          },
          "p"
        )

        .to(
          ".content",
          {
            delay: 5,
            duration: 1.3,
            opacity: 1,
            transform: "translate3d(0,0,0)",

            stagger: {
              amount: 0.7,
            },
          },
          "p"
        )
        .to(
          ".social",
          {
            delay: 5,
            duration: 1.7,
            opacity: 1,
            stagger: {
              amount: 0.7,
            },
          },
          "p"
        );
    });
    AOS.init({
      once: true,
    });
  }, []);
  const [height, setHeight] = useState(0);

  return (
    <div className="based" style={{ height }}>
      {/* <Preloader /> */}
      <div className="preloader">
        <div className="loading_text family1 fs-12 text-white text-light ">
          LOADING
        </div>
      </div>
      <Routes>
        <Route path={"/"} element={<Layout />}></Route>
      </Routes>
    </div>
  );
}
