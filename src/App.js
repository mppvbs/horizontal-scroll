import { useRef } from "react";
import "./App.css";

function App() {
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <div className="container">
      <div className="buttons">
        <button onClick={handleLeftClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </button>
      </div>
      <div className="carousel" ref={carousel}>
        <div class="item">
          <div className="info">
            <span className="name">Arpa Pré 30 dias</span>
            <span className="price">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
              obcaecati hic nulla ullam non molestias. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Sequi rem vero ullam commodi,
              labore odio.
            </span>
            <span className="font-bold">R$203,70</span>
          </div>
        </div>
        <div class="item">
          <div className="info">
            <span className="name">Arpa Pré 30 dias</span>
            <span className="price">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
              obcaecati hic nulla ullam non molestias. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Sequi rem vero ullam commodi,
              labore odio.
            </span>
            <span className="font-bold">R$203,70</span>
          </div>
        </div>
        <div class="item">
          <div className="info">
            <span className="name">Arpa Pré 30 dias</span>
            <span className="price">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
              obcaecati hic nulla ullam non molestias. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Sequi rem vero ullam commodi,
              labore odio.
            </span>
            <span className="font-bold">R$203,70</span>
          </div>
        </div>
        <div class="item">
          <div className="info">
            <span className="name">Arpa Pré 30 dias</span>
            <span className="price">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
              obcaecati hic nulla ullam non molestias. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Sequi rem vero ullam commodi,
              labore odio.
            </span>
            <span className="font-bold">R$203,70</span>
          </div>
        </div>
        <div class="item">
          <div className="info">
            <span className="name">Arpa Pré 30 dias</span>
            <span className="price">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
              obcaecati hic nulla ullam non molestias. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Sequi rem vero ullam commodi,
              labore odio.
            </span>
            <span className="font-bold">R$203,70</span>
          </div>
        </div>
        <div class="item">
          <div className="info">
            <span className="name">Arpa Pré 30 dias</span>
            <span className="price">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
              obcaecati hic nulla ullam non molestias. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Sequi rem vero ullam commodi,
              labore odio.
            </span>
            <span className="font-bold">R$203,70</span>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button onClick={handleRightClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
