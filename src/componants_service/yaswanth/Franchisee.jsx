import { useEffect, useState } from "react";
import person from "../../assets/person.jpg"

const slides = [
  {
    // title: "Learn React Easily",
    // text: "Create modern web apps with reusable components",
    image: "https://images.unsplash.com/photo-1594971475674-6a97f8fe8c2b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvY2ElMjBjb2xhfGVufDB8fDB8fHww",
  },
  {
    // title: "Tailwind CSS Power",
    // text: "Style your UI faster with utility classes",
    image: "https://images.unsplash.com/photo-1629203849820-fdd70d49c38e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVwc2l8ZW58MHx8MHx8fDA%3D",
  },
  {
    // title: "Fast & Responsive",
    // text: "Optimized for all devices",
    image: "https://images.unsplash.com/photo-1714545215724-83cf1e79481b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fDd1cHxlbnwwfHwwfHx8MA%3D%3D",
  },
];

export default function FadeSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <div className="relative w-full h-[450px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            active === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
            {/* <h1 className="text-4xl font-bold mb-3">{slide.title}</h1> */}
            {/* <p className="text-lg max-w-xl">{slide.text}</p> */}
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-3 h-3 rounded-full ${
              active === i ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
    <div className="bg-gray-300 h-screen">
    <h1 className="p-5 font-medium text-2xl text-gray-600">Franchisee Name</h1>
    <div className="flex items-center justify-between">
        <div className="flex items-center">
         <img className="w-10 h-10 p-1 rounded-full relative ml-5" src={person} alt="Bordered avatar"/>
         <h1 className="text-gray-600 ml-5">Tom Jose</h1>
         </div>
         <button type="button" className="text-white bg-gray-900 mr-7  focus:ring-4 focus:ring-neutral-tertiary  leading-5 rounded-full text-sm px-4 py-2.5 focus:outline-none">Chat/Contact</button>
    </div>
    <div className="bg-white p-3 rounded-xl mt-4">
        <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem vero deserunt, ipsa nemo aspernatur, mollitia ea optio assumenda nisi fugiat eius doloribus hic dicta quidem error iste inventore dolorum maxime!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At quisquam omnis recusandae beatae nemo nam, debitis dolor, ex modi deserunt, hic nesciunt soluta vero cumque ipsa repellendus. Enim, ab blanditiis?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio expedita vero blanditiis nihil veniam. A, ullam fugit, nesciunt autem quibusdam veniam voluptate, earum perspiciatis perferendis ad dolor in corrupti quas.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eveniet eligendi doloribus, veniam, officiis dolorem quos possimus aperiam quas voluptatibus recusandae libero, quidem incidunt hic nobis eos odit omnis sequi.
        </p>
    </div>
    <div className="bg-white p-3 rounded-xl mt-3">
        <h1 className="font-medium ">Contact Info</h1>
        <address className="not-italic text-gray-700">
     <h1>Address        <span className="ml-10">: KK Building Ernakulam 
        <p className="ml-26">Pin : 653454</p></span>
     </h1>
      <p> Email <span className="ml-14">   : info@abctech.com</span></p>
      <p> Phone <span className="ml-12"></span>   : +91 12345 67890</p>
    </address>
    </div>
    </div>
    </>
  );
}
