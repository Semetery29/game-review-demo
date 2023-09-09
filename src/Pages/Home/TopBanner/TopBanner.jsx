import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const TopBanner = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="max-h-full]">
      <div ref={sliderRef} className="keen-slider ">
        <div className="keen-slider__slide relative">
          <img src="https://wallpaperaccess.com/full/7448.png" />
          <p className="absolute top-1/2 right-28 text-right text-6xl w-1/3 ml-28 drop-shadow-xl font-bold text-white">
            Welcome To a World of Game Review.
          </p>
        </div>
        <div className="keen-slider__slide relative">
          <img src="https://wallpaperaccess.com/full/7451.jpg" />
          <p className="absolute top-1/2 text-6xl w-1/3 ml-28 drop-shadow-xl font-bold text-white">
            Find The Next Game you want to Play.
          </p>
        </div>
        <div className="keen-slider__slide relative">
          <img src="https://wallpaperaccess.com/full/7456.jpg" />
          <p className="absolute top-1/2 right-28 text-right text-6xl w-1/3 ml-28 drop-shadow-xl font-bold text-white">
            New Review Release Every week.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
