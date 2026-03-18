import { useEffect, useState} from "react";
import "./index.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import home from './assets/home.jpg';
import about1 from './assets/about1.jpg'
import info from './assets/info.png'

function App() {

  const [menuOpen, setMenuOpen] = useState(false);
    useEffect(()=> {
      AOS.init({
        duration:1000,
        once:true,
      });
    },[]);

  return (

    <div className="animated-bg scroll-smooth text-gray-800 relative">

      {/* NAVBAR */}
      <nav className="fixed w-full backdrop-blur-md bg-white/60 border-b z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl tracking-wide">Drafting Dreams</h1>

          <div className="hidden md:flex gap-8">
            <a href="#home" className="navBtn">Home</a>
            <a href="#about" className="navBtn">About</a>
            <a href="#services" className="navBtn">Services</a>
            <a href="#works" className="navBtn">Works</a>
            <a href="#reviews" className="navBtn">Reviews</a>
            <a href="#contact" className="navBtn">Contact</a>
          </div>
          <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>≡</button>
        </div>

        {menuOpen && (
          <div className="md:hidden flex flex-col items-center pb-4 gap-4 bg-white/80">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#works">Works</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </nav>

      {/* HOME */}
      <section id="home" className=" min-h-screen px-6 py-20">
        <div className="justify-center items-center">
        <div className=" justify-center items-center max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10" >
          <div data-aos="p-10 m-10 md:m-20 lg:m-20 fade-right">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">DRAFTING DREAMS</h1>
            <p className="mt-4 text-md text-gray-600 md:text-2xl lg:text-2xl">Offering clean, affordable CAD drawings
              for small projects and school needs.</p>
            <button className="mt-6 px-6 py-3 border border-black hover:bg-black hover:text-white transition">
              INQUIRE 
            </button>
          </div>

          {/* IMAGE */}
            <div data-aos="fade-left" className="py-10 m-5 md:m-15 lg:m-20 md:py-30 lg:py-50 h-100 flex items-center justify-center">
              <img src={home} alt="front" className="rounded-full"/>
            </div>

        </div>
      </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="min-h-screen px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          <div data-aos="zoom-in" className="h-100 flex items-center justify-center">
            <img src={about1} alt="aboutwan" className="rounded-3xl"/>
          </div>

          <div data-aos="fade-up">
            <div className="md:p-10 md:m-10 m-2">
              <div className="flex gap-3 mb-5">
                <img src={info} alt="eynpu" className="w-12 rounded-full"/>
                <h2 className="text-4xl font-bold mb-4 justify-center">About</h2>
              </div>

              <div className="items-center justify-center font-sans text-pretty text-gray-950">
                <p className="text-gray-600">Drafting Dreams was established last July 13, 2025.<br/>
                  <span>Since then the page started to accept several projects including<br/></span>
                  <span className="font-bold">2D CAD drawings </span> including Mechanical, Plumbing, Sanitary, <br/> Electrical and Structural,
                  and
                  <span className="font-bold"> 3D rendering </span> including Interior and Exterior.<br/>
                </p>
            </div>

          </div>
        </div>

      </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="min-h-screen px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12" data-aos="fade-up">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1,2,3].map((item) => (
              <div key={item} data-aos="fade-up" className="p-6 border rounded-2xl hover:shadow-xl transition bg-white">
                <h3 className="text-xl font-semibold mb-2"> Service Title</h3>
                <p className="text-gray-600">Descript</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section id="works" className="min-h-screen px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center" data-aos="fade-up">Works</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((item) => (
              <div key={item} data-aos="zoom-in" className="h-62.5 bg-gray-200 flex items-center justify-center">fgvfd</div>))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="min-h-screen px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10" data-aos="fade-up">Reviews</h2>
          <div className="space-y-6">
            {[1,2,3].map((item) => (
              <div key={item} data-aos="fade-up" className="p-6 border rounded-xl bg-white">
                <p>"feedback"</p>
                <h4 className="mt-2 font-semibold">- Client Name</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="min-h-screen px-6 py-20">
        <div className="max-w-3xl mx-auto w-full text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">Contact</h2>
          <div data-aos="fade-up" className="p-8 border rounded-2xl bg-white">
            <p>Email:</p>
            <p>Phone:</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white/60 backdrop-blur text-center py-6">
        <p>© 2026 Drafting Dreams. EST 2025</p>
      </footer>

      </div>
  );
}

export default App;
