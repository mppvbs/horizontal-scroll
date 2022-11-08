import { useRef } from "react";

const Carousel = () => {
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
    <div className="max-w-2xl">
      <div>
        <div
          id="carousel"
          className="flex overflow-x-auto scroll-smooth"
          ref={carousel}
        >
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
          <div
            id="item"
            className="m-10 p-10 w-280 border border-radius-16 flex-none"
          >
            <div>
              <h1 className="text-xl font-bold">Arpa Pré 30 dias</h1>
            </div>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              iusto aliquid maiores facere reiciendis excepturi?
            </p>
          </div>
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
    </div>
  );
};
export default Carousel;
