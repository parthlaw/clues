import React from "react";
import { useEffect } from "react";
import "./App.css";
import Dow from "./download.png";
function App() {
  useEffect(() => {
    (function () {
      "use strict";

      // define variables
      var items = document.querySelectorAll(".timeline li");
      function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
          if (isElementInViewport(items[i])) {
            items[i].classList.add("in-view");
          }
        }
      }

      // listen for events
      window.addEventListener("load", callbackFunc);
      window.addEventListener("resize", callbackFunc);
      window.addEventListener("scroll", callbackFunc);
    })();
  }, []);
  return (
    <>
      <section class="intro">
        <div class="container">
          <h1>Hunt It Fast...Before others reach it.. &darr;</h1>
        </div>
      </section>

      <section class="timeline">
        <ul>
          <li>
            <div>
              <h2>Chapter 2</h2>
              <br />
              <a href="">
                <img src={Dow} />
              </a>
            </div>
          </li>
          <li>
            <div>
              <h2>Chapter 3</h2>
              <br />
              <a href="">
                <img src={Dow} />
              </a>
            </div>
          </li>
          <li>
            <div>
              <h2>Chapter 4</h2>
              <br />
              <a href="">
                <img src={Dow} />
              </a>
            </div>
          </li>
          <li>
            <div>
              <h2>Chapter 5</h2>
              <br />
              <a href="">
                <img src={Dow} />
              </a>
            </div>
          </li>
          <li>
            <div>
              <h2>Chapter 6</h2>
              <br />
              <a href="">
                <img src={Dow} />
              </a>
            </div>
          </li>
          <li>
            <div>
              <h2>Chapter 7</h2>
              <br />
              <a href="">
                <img src={Dow} />
              </a>
            </div>
          </li>
          <li>
            <div>
              <h2>Chapter 8</h2>
              <br />
              <a href="">
                <img src={Dow} />
              </a>
            </div>
          </li>
          <li>
            <div>
              <h2>Chapter 9</h2>
              <br />
              <a href="">
                <img src={Dow} />
              </a>
            </div>
          </li>
          <li>
            <div>
              <h2>Chapter 10</h2>
              <br />
              <a href="">
                <img src={Dow} />
              </a>
            </div>
          </li>
          <li>
            <div>
              <h2>Chapter 11</h2>
              <br />
              <a href="">
                <img src={Dow} />
              </a>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}

export default App;
