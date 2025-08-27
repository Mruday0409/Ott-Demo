import React, { useState, useRef, useEffect } from "react";
import Footer from "../components/Footer";
import "../styles/Home.css";

// Import your local images (using available assets)
import movie1 from "../assets/Hero-images/akanda.jpg";
import movie2 from "../assets/Hero-images/chhava.jpg";
import movie3 from "../assets/Hero-images/devara.jpg";
import movie4 from "../assets/Hero-images/Param Sundari.jpg";
import movie5 from "../assets/Hero-images/war 2.jpg";

// Import Kannada movies
import kannada1 from "../assets/Kannada-movies/11th hour.jpg";
import kannada2 from "../assets/Kannada-movies/Baaghi-4-3.jpeg";
import kannada3 from "../assets/Kannada-movies/chhava.jpg";
import kannada4 from "../assets/Kannada-movies/dhadak 2.jpg";
import kannada5 from "../assets/Kannada-movies/jaat.jpeg";
import kannada6 from "../assets/Kannada-movies/kesari 2.jpg";
import kannada7 from "../assets/Kannada-movies/maa.jpg";
import kannada8 from "../assets/Kannada-movies/maidaan.jpg";
import kannada9 from "../assets/Kannada-movies/mtero.jpg";
import kannada10 from "../assets/Kannada-movies/Param Sundari.jpg";
import kannada11 from "../assets/Kannada-movies/war 2.jpg";

// Import Telugu movies
import telugu1 from "../assets/Telugu-movies/akanda 2.jpg";
import telugu2 from "../assets/Telugu-movies/coolie.jpg";
import telugu3 from "../assets/Telugu-movies/devara.jpg";
import telugu4 from "../assets/Telugu-movies/drushyam.jpg";
import telugu5 from "../assets/Telugu-movies/junior.jpg";
import telugu6 from "../assets/Telugu-movies/Kingdom.jpg";
import telugu7 from "../assets/Telugu-movies/Kuberaa.jpg";
import telugu8 from "../assets/Telugu-movies/Mass Jathara.jpg";
import telugu9 from "../assets/Telugu-movies/narasimha.jpg";
import telugu10 from "../assets/Telugu-movies/odela 2.jpg";
import telugu11 from "../assets/Telugu-movies/OG.jpg";
import telugu12 from "../assets/Telugu-movies/paradha.jpg";
import telugu13 from "../assets/Telugu-movies/raajasaab.jpg";
import telugu14 from "../assets/Telugu-movies/salaar.jpg";
import telugu15 from "../assets/Telugu-movies/seeta ramam.jpg";

// Import Hero assets - Images
import akandaImage from "../assets/Hero-images/akanda.jpg";
import chhavaImage from "../assets/Hero-images/chhava.jpg";
import devaraImage from "../assets/Hero-images/devara.jpg";
import paramSundariImage from "../assets/Hero-images/Param Sundari.jpg";
import war2Image from "../assets/Hero-images/war 2.jpg";

// Import Hero assets - Videos
import akandaVideo from "../assets/Hero-videos/akanda.mp4";
import chhavaVideo from "../assets/Hero-videos/chhava.mp4";
import devaraVideo from "../assets/Hero-videos/devara.mp4";
import paramSundariVideo from "../assets/Hero-videos/param sundari.mp4";
import war2Video from "../assets/Hero-videos/war 2.mp4";

function Home() {
  // Movies Data - New Releases (Mixed Languages)
  const newReleasesMovies = [
    {
      id: 1,
      title: "11th Hour",
      year: "2024",
      duration: "2h 15m",
      genre: "Thriller • Action",
      desc: "A high-stakes thriller about a race against time to prevent a catastrophic event.",
      image: kannada1,
      thumbnail: kannada1
    },
    {
      id: 2,
      title: "Devara",
      year: "2024",
      duration: "2h 30m",
      genre: "Action • Drama",
      desc: "An epic tale of power, revenge, and redemption in a lawless land.",
      image: telugu3,
      thumbnail: telugu3
    },
    {
      id: 3,
      title: "Chhava",
      year: "2024",
      duration: "2h 45m",
      genre: "Historical • Drama",
      desc: "A historical drama depicting the life and struggles of a legendary warrior.",
      image: kannada3,
      thumbnail: kannada3
    },
    {
      id: 4,
      title: "Salaar",
      year: "2023",
      duration: "2h 55m",
      genre: "Action • Crime",
      desc: "A violent tale of friendship, betrayal, and power in the criminal underworld.",
      image: telugu1,
      thumbnail: telugu1
    },
    {
      id: 5,
      title: "Kesari 2",
      year: "2024",
      duration: "2h 20m",
      genre: "War • Drama",
      desc: "A sequel to the epic war drama showcasing courage and sacrifice.",
      image: kannada6,
      thumbnail: kannada6
    },
    {
      id: 6,
      title: "Drushyam",
      year: "2024",
      duration: "2h 10m",
      genre: "Thriller • Crime",
      desc: "A gripping thriller about a father's desperate attempt to protect his family.",
      image: telugu4,
      thumbnail: telugu4
    },
    {
      id: 7,
      title: "Maa",
      year: "2024",
      duration: "2h 25m",
      genre: "Drama • Family",
      desc: "An emotional journey of a mother's unconditional love and sacrifice.",
      image: kannada7,
      thumbnail: kannada7
    },
    {
      id: 8,
      title: "Junior",
      year: "2024",
      duration: "2h 5m",
      genre: "Comedy • Family",
      desc: "A heartwarming comedy about family bonds and generational differences.",
      image: telugu5,
      thumbnail: telugu5
    },
    {
      id: 9,
      title: "OG",
      year: "2024",
      duration: "2h 35m",
      genre: "Action • Crime",
      desc: "A high-octane action thriller with intense sequences and gripping storyline.",
      image: telugu11,
      thumbnail: telugu11
    },
    {
      id: 10,
      title: "Paradha",
      year: "2024",
      duration: "2h 15m",
      genre: "Drama • Romance",
      desc: "A beautiful romantic drama exploring love and relationships.",
      image: telugu12,
      thumbnail: telugu12
    },
    {
      id: 11,
      title: "Raajasaab",
      year: "2024",
      duration: "2h 25m",
      genre: "Action • Drama",
      desc: "An epic tale of power, politics, and personal struggles.",
      image: telugu13,
      thumbnail: telugu13
    },
    {
      id: 12,
      title: "Seeta Ramam",
      year: "2024",
      duration: "2h 40m",
      genre: "Romance • Drama",
      desc: "A timeless love story that transcends boundaries and time.",
      image: telugu15,
      thumbnail: telugu15
    },
    {
      id: 13,
      title: "Mtero",
      year: "2024",
      duration: "2h 10m",
      genre: "Thriller • Mystery",
      desc: "A gripping mystery thriller that keeps you on the edge of your seat.",
      image: kannada9,
      thumbnail: kannada9
    },
    {
      id: 14,
      title: "Param Sundari",
      year: "2024",
      duration: "2h 20m",
      genre: "Romance • Musical",
      desc: "A musical romance with beautiful songs and heartfelt emotions.",
      image: kannada10,
      thumbnail: kannada10
    },
    {
      id: 15,
      title: "War 2",
      year: "2024",
      duration: "2h 45m",
      genre: "Action • War",
      desc: "An epic war drama with intense action sequences and emotional depth.",
      image: kannada11,
      thumbnail: kannada11
    }
  ];

  // Kannada Movies
  const kannadaMovies = [
    {
      id: 11,
      title: "11th Hour",
      year: "2024",
      duration: "2h 15m",
      genre: "Thriller • Action",
      desc: "A high-stakes thriller about a race against time.",
      image: kannada1,
      thumbnail: kannada1
    },
    {
      id: 12,
      title: "Baaghi 4",
      year: "2024",
      duration: "2h 30m",
      genre: "Action • Romance",
      desc: "The latest installment in the Baaghi franchise.",
      image: kannada2,
      thumbnail: kannada2
    },
    {
      id: 13,
      title: "Chhava",
      year: "2024",
      duration: "2h 45m",
      genre: "Historical • Drama",
      desc: "A historical drama about legendary warriors.",
      image: kannada3,
      thumbnail: kannada3
    },
    {
      id: 14,
      title: "Dhadak 2",
      year: "2024",
      duration: "2h 20m",
      genre: "Romance • Drama",
      desc: "A romantic drama exploring love across boundaries.",
      image: kannada4,
      thumbnail: kannada4
    },
    {
      id: 15,
      title: "Jaat",
      year: "2024",
      duration: "2h 10m",
      genre: "Action • Crime",
      desc: "An action-packed crime thriller.",
      image: kannada5,
      thumbnail: kannada5
    },
    {
      id: 16,
      title: "Kesari 2",
      year: "2024",
      duration: "2h 20m",
      genre: "War • Drama",
      desc: "Epic war drama showcasing courage and sacrifice.",
      image: kannada6,
      thumbnail: kannada6
    },
    {
      id: 17,
      title: "Maa",
      year: "2024",
      duration: "2h 25m",
      genre: "Drama • Family",
      desc: "Emotional journey of a mother's love.",
      image: kannada7,
      thumbnail: kannada7
    },
    {
      id: 18,
      title: "Maidaan",
      year: "2024",
      duration: "2h 35m",
      genre: "Sports • Drama",
      desc: "Inspiring sports drama about determination.",
      image: kannada8,
      thumbnail: kannada8
    }
  ];

  // Telugu Movies
  const teluguMovies = [
    {
      id: 21,
      title: "Akanda 2",
      year: "2024",
      duration: "2h 40m",
      genre: "Action • Thriller",
      desc: "High-octane action thriller sequel.",
      image: telugu1,
      thumbnail: telugu1
    },
    {
      id: 22,
      title: "Coolie",
      year: "2024",
      duration: "2h 15m",
      genre: "Comedy • Drama",
      desc: "A heartwarming comedy-drama.",
      image: telugu2,
      thumbnail: telugu2
    },
    {
      id: 23,
      title: "Devara",
      year: "2024",
      duration: "2h 30m",
      genre: "Action • Drama",
      desc: "Epic tale of power and redemption.",
      image: telugu3,
      thumbnail: telugu3
    },
    {
      id: 24,
      title: "Drushyam",
      year: "2024",
      duration: "2h 10m",
      genre: "Thriller • Crime",
      desc: "Gripping thriller about family protection.",
      image: telugu4,
      thumbnail: telugu4
    },
    {
      id: 25,
      title: "Junior",
      year: "2024",
      duration: "2h 5m",
      genre: "Comedy • Family",
      desc: "Heartwarming family comedy.",
      image: telugu5,
      thumbnail: telugu5
    },
    {
      id: 26,
      title: "Kingdom",
      year: "2024",
      duration: "2h 50m",
      genre: "Fantasy • Adventure",
      desc: "Epic fantasy adventure in a magical kingdom.",
      image: telugu6,
      thumbnail: telugu6
    },
    {
      id: 27,
      title: "Kuberaa",
      year: "2024",
      duration: "2h 20m",
      genre: "Action • Crime",
      desc: "Crime thriller with intense action sequences.",
      image: telugu7,
      thumbnail: telugu7
    },
    {
      id: 28,
      title: "Mass Jathara",
      year: "2024",
      duration: "2h 25m",
      genre: "Comedy • Drama",
      desc: "Mass entertainment with comedy and drama.",
      image: telugu8,
      thumbnail: telugu8
    }
  ];

  // Hero Movies with videos and images - properly synchronized
  const heroMovies = [
    {
      id: 1,
      title: "Akanda 2",
      year: "2024",
      duration: "2h 30m",
      genre: "Action • Drama",
      desc: "An epic action drama with intense sequences and gripping storyline that keeps you on the edge of your seat.",
      image: akandaImage,
      video: akandaVideo,
      thumbnail: akandaImage
    },
    {
      id: 2,
      title: "Chhava",
      year: "2024",
      duration: "2h 45m",
      genre: "Historical • Drama",
      desc: "A historical drama depicting the life and struggles of a legendary warrior in ancient times.",
      image: chhavaImage,
      video: chhavaVideo,
      thumbnail: chhavaImage
    },
    {
      id: 3,
      title: "Devara",
      year: "2024",
      duration: "2h 30m",
      genre: "Action • Drama",
      desc: "An epic tale of power, revenge, and redemption in a lawless land where justice is hard to find.",
      image: devaraImage,
      video: devaraVideo,
      thumbnail: devaraImage
    },
    {
      id: 4,
      title: "Param Sundari",
      year: "2024",
      duration: "2h 20m",
      genre: "Romance • Musical",
      desc: "A musical romance with beautiful songs and heartfelt emotions that touch the soul.",
      image: paramSundariImage,
      video: paramSundariVideo,
      thumbnail: paramSundariImage
    },
    {
      id: 5,
      title: "War 2",
      year: "2024",
      duration: "2h 45m",
      genre: "Action • War",
      desc: "An epic war drama with intense action sequences and emotional depth that explores the cost of conflict.",
      image: war2Image,
      video: war2Video,
      thumbnail: war2Image
    }
  ];

  // Use new releases for the main movies array
  const movies = newReleasesMovies;

  const [index, setIndex] = useState(0);
  const [showAllMovies, setShowAllMovies] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const selected = heroMovies[index];
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  // Navigation
  const nextMovie = () => setIndex((prev) => (prev + 1) % heroMovies.length);
  const prevMovie = () => setIndex((prev) => (prev - 1 + heroMovies.length) % heroMovies.length);

  // Helpers for trio display
  const getPrevIndex = (i) => (i - 1 + heroMovies.length) % heroMovies.length;
  const getNextIndex = (i) => (i + 1) % heroMovies.length;

  // Mute/Unmute functionality
  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  // Handle video change when hero movie changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // Reload video when source changes
      videoRef.current.muted = isMuted; // Maintain mute state
    }
  }, [index, isMuted]);

  // Section scrolling
  const scrollSection = (direction) => {
    const container = sectionRef.current;
    if (!container) return;
    const scrollAmount = 300;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div style={{ paddingTop: "80px", background: "#000", color: "#fff" }}>
{/* === HERO SECTION === */}
      <section className="hero">
        {/* Video Background */}
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          loop
          muted={isMuted}
          playsInline
        >
          <source src={selected.video} type="video/mp4" />
        </video>

        {/* Fallback Image Background */}
        <div
          className="hero-image-fallback"
  style={{
    backgroundImage: `url(${selected.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center right",
          }}
        />
   
  {/* Gradient overlay */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.35) 65%, rgba(0,0,0,0) 100%), linear-gradient(to top, rgba(0,0,0,0.85) 5%, rgba(0,0,0,0) 35%)",
          }}
        />

        {/* Mute/Unmute Controls */}
        <div className="hero-controls">
          <button 
            onClick={toggleMute} 
            className="mute-btn"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? "🔇" : "🔊"}
          </button>
        </div>

  {/* Content over overlay */}
        <div className="hero-content">
          <div className="text-content">
            <h1 className="hero-title">{selected.title}</h1>
            <p className="hero-meta">
        {selected.year} • {selected.duration} • {selected.genre}
      </p>
            <p className="hero-desc">{selected.desc}</p>
            {/* Inline thumbnail trio under description */}
            <div className="trio-row">
              <button onClick={prevMovie} className="strip-arrow-btn">⟨</button>
              <div className="trio">
                {[
                  heroMovies[getPrevIndex(index)],
                  heroMovies[index],
                  heroMovies[getNextIndex(index)]
                ].map((m, i) => {
                  const isCenter = i === 1;
                  return (
                    <button
                      key={`${m.id}-${i}`}
                      onClick={() => setIndex(i === 0 ? getPrevIndex(index) : i === 2 ? getNextIndex(index) : index)}
                      className="strip-thumb-btn"
                      style={{
                        outline: isCenter ? "2px solid #fff" : "1px solid rgba(255,255,255,0.25)",
                        transform: isCenter ? "scale(1.05)" : "scale(1)",
                        opacity: isCenter ? 1 : 0.85
                      }}
                    >
                      <img
                        src={m.thumbnail}
                        alt=""
                        className={`strip-thumb-img ${isCenter ? 'center' : ''}`}
                      />
                    </button>
                  );
                })}
              </div>
              <button onClick={nextMovie} className="strip-arrow-btn">⟩</button>
      </div>
    </div>
  </div>
</section>

      {/* === NEW RELEASES SECTION === */}
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">New Releases</h2>
          <button 
            onClick={() => setShowAllMovies(!showAllMovies)}
            className="see-all-btn"
          >
            {showAllMovies ? 'Show Less' : 'See all'}
          </button>
        </div>
        
        {showAllMovies ? (
          // Expanded view - show all movies in a grid
          <div className="expanded-grid">
            {movies.map((movie) => (
              <div key={movie.id} className="expanded-card movie-card-hover">
                <div className="card-image-container">
                  <img src={movie.image} alt="" className="expanded-card-image" />
                  <div className="badges">
                    <span className="premium-badge">Premium</span>
                    <span className="quality-badge">4K</span>
                    <span className="quality-badge">Dolby</span>
                  </div>
                </div>
                <div className="card-title">{movie.title}</div>
              </div>
            ))}
          </div>
        ) : (
          // Normal carousel view
          <div className="section-wrapper">
            <button 
              onClick={() => scrollSection('left')} 
              className="scroll-btn"
            >
              ⟨
            </button>
            
            <div ref={sectionRef} className="movies-container">
              {movies.map((movie, idx) => (
                <div key={movie.id} className="movie-card movie-card-hover">
                  <div className="card-image-container">
                    <img src={movie.image} alt="" className="card-image" />
                    <div className="badges">
                      <span className="premium-badge">Premium</span>
                      <span className="quality-badge">4K</span>
                      <span className="quality-badge">Dolby</span>
                    </div>
                  </div>
                  <div className="card-title">{movie.title}</div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => scrollSection('right')} 
              className="scroll-btn"
            >
              ⟩
            </button>
          </div>
        )}
      </div>

      {/* === OTHER SECTIONS === */}
      <Section title="Kannada Movies" movies={kannadaMovies} />
      <Section title="Telugu Movies" movies={teluguMovies} />
      <Section title="Top Hits" movies={movies} />
      <Section title="Continue Watching" movies={movies} />
      <Section title="Award Winning Movies" movies={movies} />
      <Section title="Recently Added" movies={movies} />
      <Section title="K-Dramas" movies={movies} />
      <Section title="Upcoming Movies" movies={movies} />

      {/* === FOOTER === */}
      <Footer />
    </div>
  );
}

// Reusable Section Component with sliding functionality
function Section({ title, movies }) {
  const sectionRef = useRef(null);

  const scrollSection = (direction) => {
    const container = sectionRef.current;
    if (!container) return;
    const scrollAmount = 300;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div style={{ marginBottom: "40px", padding: "0 20px" }}>
      <h2 style={{ marginBottom: "15px" }}>{title}</h2>
      <div className="section-wrapper">
        <button 
          onClick={() => scrollSection('left')} 
          className="scroll-btn"
        >
          ⟨
        </button>
        
        <div ref={sectionRef} className="movies-container">
          {movies.map((m) => (
            <div key={m.id} className="movie-card movie-card-hover">
              <div className="card-image-container">
                <img src={m.image} alt="" className="card-image" />
                <div className="badges">
                  <span className="premium-badge">Premium</span>
                  <span className="quality-badge">4K</span>
                  <span className="quality-badge">Dolby</span>
                </div>
              </div>
              <div className="card-title">{m.title}</div>
            </div>
          ))}
        </div>
        
        <button 
          onClick={() => scrollSection('right')} 
          className="scroll-btn"
        >
          ⟩
        </button>
      </div>
    </div>
  );
}

export default Home;