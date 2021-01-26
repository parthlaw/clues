import React from "react";
import { useEffect } from "react";
import "./App.css";
import Dow from "./download.png";
function App() {
  useEffect(() => {
    (function () {
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
      <div>
        <h1>
          Atal Bihari Vajpayee Indian Institute Of Information Technology and
          Management, Gwalior
        </h1>
        <section className="intro">
          <div className="container">
            <div
              style={{
                width: "100%",
                height: 0,
                paddingBottom: "16%",
                position: "relative",
              }}
            >
              <img
                className="image"
                src="https://media.giphy.com/media/m8QbXxoOmNpRiNESuy/giphy.gif"
                alt="Gif"
              />
            </div>
          </div>
        </section>

        <section className="timeline">
          <ul>
            <li>
              <div>
                <h2>Chapter 2</h2>
                <br />
                <a href="https://abvieee.s3.amazonaws.com/events/treasurehunt/clue2.pdf">
                  <img src={Dow} alt="clue2" />
                </a>
              </div>
            </li>
            <li>
              <div>
                <h2>Chapter 3</h2>
                <br />
                <a href="https://abvieee.s3.amazonaws.com/events/treasurehunt/clue3.pdf">
                  <img src={Dow} alt="clue3" />
                </a>
              </div>
            </li>
            <li>
              <div>
                <h2>Chapter 4</h2>
                <br />
                <a href="https://abvieee.s3.amazonaws.com/events/treasurehunt/clue4.pdf">
                  <img src={Dow} alt="clue4" />
                </a>
              </div>
            </li>
            <li>
              <div>
                <h2>Chapter 5</h2>
                <br />
                <a href="https://abvieee.s3.amazonaws.com/events/treasurehunt/clue5.pdf">
                  <img src={Dow} alt="clue5" />
                </a>
              </div>
            </li>
            <li>
              <div>
                <h2>Chapter 6</h2>
                <br />
                <a href="https://abvieee.s3.amazonaws.com/events/treasurehunt/clue6.pdf">
                  <img src={Dow} alt="clue6" />
                </a>
              </div>
            </li>
            <li>
              <div>
                <h2>Chapter 7</h2>
                <br />
                <a href="https://abvieee.s3.amazonaws.com/events/treasurehunt/clue7.pdf">
                  <img src={Dow} alt="clue7" />
                </a>
              </div>
            </li>
            <li>
              <div>
                <h2>Chapter 8</h2>
                <br />
                <a href="https://abvieee.s3.amazonaws.com/events/treasurehunt/clue8.pdf">
                  <img src={Dow} alt="clue8" />
                </a>
              </div>
            </li>
            <li>
              <div>
                <h2>Chapter 9</h2>
                <br />
                <a href="https://abvieee.s3.amazonaws.com/events/treasurehunt/clue9.pdf">
                  <img src={Dow} alt="clue9" />
                </a>
              </div>
            </li>
            <li>
              <div>
                <h2>Chapter 10</h2>
                <br />
                <a href="https://abvieee.s3.amazonaws.com/events/treasurehunt/clue10.pdf">
                  <img src={Dow} alt="clue10" />
                </a>
              </div>
            </li>
            <li>
              <div>
                <h2>The Treasure</h2>
                <br />
                <a href="https://abvieee.s3.amazonaws.com/events/treasurehunt/treasure.pdf">
                  <img src={Dow} alt="The Treasure" />
                </a>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default App;
