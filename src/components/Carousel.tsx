import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import cris from "../assets/members/artacho.png";
import mans from "../assets/members/carado.png";
import ollie from "../assets/members/ladores.png";
import aika from "../assets/members/nava.png";
import reycel from "../assets/members/sarmiento.png";
import els from "../assets/members/constantino.png";
import wu_blue from "../assets/logos/wu_blue.png";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
}

function Carousel() {
    return (
        <div className="w-3/4 m-auto mb-[100px] mt-20">
            <div className="flex flex-row justify-center gap-10">
            <h1 className="font-poppins font-bold text-6xl mt-10"
            style={{ color: "#7181A7" }}>
                Meet the people behind
            </h1>
            <img src= {wu_blue} alt="" className="h-40 w-50"/> 
            </div>
            <div className="mt-20">
            <Slider {...settings}>
                {data.map((d) => (
                    <div className="h-[400px] rounded-xl">
                        <div className="h-56 rounded-t-xl flex justify-center items-center">
                            <img src ={d.img} alt="" className="h-80 w-80" />
                        </div>

                        <div className="flex flex-col justify-center items-center gap-4 p-4">
                            <h2 className="font-poppins font-bold text-2xl " style={{ color: "#7181A7" }}>{d.name}</h2>
                            <p className="font-poppins " style={{ color: "#7181A7" }}>{d.title}</p>
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
        name: "Cristopher Ian Artarcho",
        img: cris,
        title: "Founder"
    },
    {
        name: "John Manuel Carado",
        img: mans,
        title: "Founder"
    },
    {
        name: "Angelika Marie Nava",
        img: aika,
        title: "Founder"
    },
    {
        name: "Reycel Sarmiento",
        img: reycel,
        title: "Founder"
    },
    {
        name: "Els Dave Constantino",
        img: els,
        title: "Founder"
    },
    {
        name: "Oliver Ladores",
        img: ollie,
        title: "Founder"
    }


]



export default Carousel;