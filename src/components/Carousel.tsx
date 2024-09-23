import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import kpop from "../assets/kpop.jpg";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

function Carousel() {
  return (
    <div className="w-3/4 m-auto mb-[100px] mt-20">
      <h1
        className="font-poppins font-bold text-6xl"
        style={{ color: "#7181A7" }}
      >
        People Behind Water-Up
      </h1>
      <div className="mt-40">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="h-[400px] rounded-xl" key={d.name}>
              <div className="h-56 rounded-t-xl flex justify-center items-center">
                <img src={d.img} alt="" className="h-44 w-44" />
              </div>

              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <h2
                  className="font-poppins font-bold text-2xl "
                  style={{ color: "#7181A7" }}
                >
                  {d.name}
                </h2>
                <p className="font-poppins " style={{ color: "#7181A7" }}>
                  {d.title}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    name: "Jeno Lee",
    img: kpop,
    title: "Founder",
  },
  {
    name: "Jiwoong Kim",
    img: kpop,
    title: "Founder",
  },
  {
    name: "Hyungwon Chae",
    img: kpop,
    title: "Founder",
  },
  {
    name: "Changbin Seo",
    img: kpop,
    title: "Founder",
  },
  {
    name: "Justin De Dios",
    img: kpop,
    title: "Founder",
  },
  {
    name: "Ken Suson",
    img: kpop,
    title: "Founder",
  },
];

export default Carousel;
