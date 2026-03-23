import { useEffect, useState} from "react";
import "./index.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import home from './assets/home.jpg';
import about1 from './assets/about1.jpg'
import info from './assets/info.png'

function App() {

  const [activeTab, setActiveTab] = useState("2D", "3D");

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

          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl text-gray-800 font-bold mb-12" data-aos="fade-up">Our Services and Rates</h2>
            <p className="text-white mt-3">CAD Drafting and 3D visualization solutions with transparent pricing.</p>
          </div>

          <div className="flex justify-center mb-10">
            <div className="bg-white shadow-md rounded-full p-2 flex gap-2">
              <button onClick={() => setActiveTab("2D")} className={`px-6 py-2 rounded-full font-medium transition ${ activeTab === "2D" ? "bg-amber-600 text-white" : "text-amber-700 hover:bg-amber-100"}`}>
                2D CAD Drafting
              </button>

              <button 
                onClick={() => setActiveTab("3D")}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  activeTab === "3D"
                  ? "bg-amber-600 text-white"
                : "text-amber-700 hover:bg-amber-100"}`}>3D Rendering
              </button>
            </div>
          </div>

          {activeTab === "2D" && (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold text-amber-600 mb-4">Services Included</h3>
                <ul className="space-y-2 text-amber-700">
                  <li>Mechanical</li>
                  <li>Electrical</li>
                  <li>Plumbing</li>
                  <li>Structural</li>
                  <li>Sanitary</li>
                  <li>Elevations & Sections</li>
                </ul>
                    <div className="mt-6">
                      <p className="text-sm text-amber-900">Tools used:</p>
                      <span className="inline-block mt-12 bg-amber-100 text-amber-600 px-3 py-1 rounded-full text-sm">AutoCAD</span>
                    </div>
              </div> 
{/* PRICCEEEEEE */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold">Rates</h3>
                  <div className="space-y-4">
                    <div className="border p-4 rounded-lg">
                      <h4 className="font-semibold">Basic Plan</h4>
                      <p className="text-sm text-amber-700">Simple Drawings /Single Layout</p>
                      <p className="text-lg font-bold">₱800 - ₱1,500</p>
                    </div>

                      <div className="border p-4 rounded-lg">
                        <h4 className="font-semibold">Standard Plan</h4>
                        <p className="text-sm text-amber-700">Detailed Plan with revisions</p>
                        <p className="text-lg font-bold">₱2,000 - ₱5,000</p>
                      </div>

                      <div className="border p-4 rounded-lg">
                        <h4 className="font-semibold">Premium Plan</h4>
                        <p className="text-sm text-amber-700">Complete Set (Multi-discipline)</p>
                        <p className="text-lg font-bold">₱6,000</p>
                      </div>

                  </div>
              </div>
            </div>
          )}

              {activeTab === "3D" && (
                <div className="grid md:grid-cols-2 gap-8">
              {/* SERVICEEEEE */}
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-xl font-semibold text-amber-600 mb-4">Services Included</h3>
                <ul className="space-y-2 text-amber-600">
                  <li>Interior Rendering</li>
                  <li>Exterior Rendering</li>
                </ul>

                <div className="mt-6">
                  <p className="text-sm text-amber-500">Tools Used:</p>
                    <div className="flex flex-wrap gap-2 mt-2 justify-center">
                      <span className="bg-amber-100 text-amber-600 px-3 py-1 rounded-full">SketchUp</span>
                      <span className="bg-amber-100 text-amber-600 px-3 py-1 rounded-full">CAD</span>
                      <span className="bg-amber-100 text-amber-600 px-3 py-1 rounded-full">Enscape</span>
                    </div>
                </div>
              </div>
              {/*price ng 3d service*/}
                <div className="bg-white p-8 rounded-2xl">
                  <h3 className="text-xl font-semibold text-amber-800 mb-4">Rates</h3>
                    <div className="space-y-4">
                      <div className="border p-4 rounded-lg">
                        <h4 className="font-semibold">Basic Render</h4>
                          <p className="text-sm text-amber-600">1-2 views, low complexity</p>
                          <p className="text-lg font-bold mt-2">₱1,500 - ₱3,500</p>
                      </div>

                      <div className="border p-4 rounded-lg">
                        <h4 className="font-semibold">Standard Render</h4>
                          <p className="text-sm text-amber-600">Multiple views, medium detail</p>
                          <p className="text-lg font-bold mt-2">₱4,000 - ₱8,000</p>
                      </div>

                      <div className="border p-4 rounded-lg">
                        <h4 className="font-semibold">Premium Render</h4>
                          <p className="text-sm text-amber-600">High-quality, realistic rendering</p>
                          <p className="text-lg font-bold mt-2">₱10,000</p>
                      </div>

                    </div>
                </div>
            </div>
            
              )}
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
