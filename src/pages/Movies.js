import React, { useState, useRef, useEffect } from "react";
import Footer from "../components/Footer";
import "../styles/Home.css";
import "../styles/Pages.css";

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

function Movies() {
  // Featured Movies for Hero Section
  const featuredMovies = [
    {
      id: 1,
      title: "Akanda",
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
    }
  ];

  // Action Movies
  const actionMovies = [
    {
      id: 1,
      title: "Akanda",
      year: "2024",
      duration: "2h 30m",
      genre: "Action • Drama",
      desc: "An epic action drama with intense sequences and gripping storyline.",
      image: akandaImage,
      thumbnail: akandaImage
    },
    {
      id: 2,
      title: "Devara",
      year: "2024",
      duration: "2h 30m",
      genre: "Action • Drama",
      desc: "An epic tale of power, revenge, and redemption.",
      image: devaraImage,
      thumbnail: devaraImage
    },
    {
      id: 3,
      title: "War 2",
      year: "2024",
      duration: "2h 45m",
      genre: "Action • War",
      desc: "An epic war drama with intense action sequences.",
      image: war2Image,
      thumbnail: war2Image
    },
    {
      id: 4,
      title: "OG",
      year: "2024",
      duration: "2h 35m",
      genre: "Action • Crime",
      desc: "A high-octane action thriller with intense sequences.",
      image: telugu11,
      thumbnail: telugu11
    },
    {
      id: 5,
      title: "Salaar",
      year: "2024",
      duration: "2h 40m",
      genre: "Action • Drama",
      desc: "A powerful action drama with stunning visuals.",
      image: telugu14,
      thumbnail: telugu14
    },
    {
      id: 6,
      title: "Baaghi 4",
      year: "2024",
      duration: "2h 30m",
      genre: "Action",
      desc: "High-octane action with stunning fight sequences.",
      image: kannada2,
      thumbnail: kannada2
    }
  ];

  // Drama Movies
  const dramaMovies = [
    {
      id: 1,
      title: "Chhava",
      year: "2024",
      duration: "2h 45m",
      genre: "Historical • Drama",
      desc: "A historical drama depicting legendary warrior's life.",
      image: chhavaImage,
      thumbnail: chhavaImage
    },
    {
      id: 2,
      title: "Param Sundari",
      year: "2024",
      duration: "2h 20m",
      genre: "Romance • Musical",
      desc: "A musical romance with beautiful songs and emotions.",
      image: paramSundariImage,
      thumbnail: paramSundariImage
    },
    {
      id: 3,
      title: "Seeta Ramam",
      year: "2024",
      duration: "2h 40m",
      genre: "Romance • Drama",
      desc: "A timeless love story that transcends boundaries.",
      image: telugu15,
      thumbnail: telugu15
    },
    {
      id: 4,
      title: "Maa",
      year: "2024",
      duration: "2h 15m",
      genre: "Drama • Family",
      desc: "An emotional journey of a mother's unconditional love.",
      image: kannada7,
      thumbnail: kannada7
    },
    {
      id: 5,
      title: "Paradha",
      year: "2024",
      duration: "2h 15m",
      genre: "Drama • Romance",
      desc: "A beautiful romantic drama exploring relationships.",
      image: telugu12,
      thumbnail: telugu12
    },
    {
      id: 6,
      title: "Raajasaab",
      year: "2024",
      duration: "2h 25m",
      genre: "Action • Drama",
      desc: "An epic tale of power, politics, and personal struggles.",
      image: telugu13,
      thumbnail: telugu13
    }
  ];

  // Comedy Movies
  const comedyMovies = [
    {
      id: 1,
      title: "Junior",
      year: "2024",
      duration: "2h 5m",
      genre: "Comedy • Family",
      desc: "A heartwarming comedy about family bonds.",
      image: telugu5,
      thumbnail: telugu5
    },
    {
      id: 2,
      title: "Coolie",
      year: "2024",
      duration: "2h 20m",
      genre: "Comedy • Action",
      desc: "A hilarious comedy with action-packed sequences.",
      image: telugu2,
      thumbnail: telugu2
    },
    {
      id: 3,
      title: "Mass Jathara",
      year: "2024",
      duration: "2h 10m",
      genre: "Comedy • Drama",
      desc: "A comedy drama with mass entertainment.",
      image: telugu8,
      thumbnail: telugu8
    },
    {
      id: 4,
      title: "Jaat",
      year: "2024",
      duration: "2h 25m",
      genre: "Comedy • Romance",
      desc: "A romantic comedy with hilarious moments.",
      image: kannada5,
      thumbnail: kannada5
    },
    {
      id: 5,
      title: "Kuberaa",
      year: "2024",
      duration: "2h 15m",
      genre: "Comedy",
      desc: "A comedy entertainer with great performances.",
      image: telugu7,
      thumbnail: telugu7
    }
  ];

  // Thriller Movies
  const thrillerMovies = [
    {
      id: 1,
      title: "11th Hour",
      year: "2024",
      duration: "2h 15m",
      genre: "Thriller",
      desc: "A gripping thriller that keeps you on the edge of your seat.",
      image: kannada1,
      thumbnail: kannada1
    },
    {
      id: 2,
      title: "Mtero",
      year: "2024",
      duration: "2h 10m",
      genre: "Thriller • Mystery",
      desc: "A gripping mystery thriller with unexpected twists.",
      image: kannada9,
      thumbnail: kannada9
    },
    {
      id: 3,
      title: "Drushyam",
      year: "2024",
      duration: "2h 40m",
      genre: "Thriller",
      desc: "A suspense thriller with brilliant storytelling.",
      image: telugu4,
      thumbnail: telugu4
    },
    {
      id: 4,
      title: "Tehran",
      year: "2024",
      duration: "2h 20m",
      genre: "Thriller • Action",
      desc: "An intense thriller with international intrigue.",
      image: kannada11,
      thumbnail: kannada11
    }
  ];

  const [index, setIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const selected = featuredMovies[index];
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  // Navigation
  const nextMovie = () => setIndex((prev) => (prev + 1) % featuredMovies.length);
  const prevMovie = () => setIndex((prev) => (prev - 1 + featuredMovies.length) % featuredMovies.length);

  // Helpers for trio display
  const getPrevIndex = (i) => (i - 1 + featuredMovies.length) % featuredMovies.length;
  const getNextIndex = (i) => (i + 1) % featuredMovies.length;

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
      videoRef.current.load();
      videoRef.current.muted = isMuted;
    }
  }, [index, isMuted]);

  // Section Component
  const Section = ({ title, movies }) => {
    const [showAll, setShowAll] = useState(false);
    const sectionRef = useRef(null);

    const scrollSection = (direction) => {
      const container = sectionRef.current;
      if (!container) return;

      const scrollAmount = 300;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    };

    return (
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          <button
            className="see-all-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "See All"}
          </button>
        </div>

        {showAll ? (
          <div className="expanded-grid">
            {movies.map((movie) => (
              <div key={movie.id} className="expanded-card">
                <div className="expanded-card-image">
                  <img src={movie.image} alt="" />
                  <div className="badges">
                    <span className="premium-badge">Premium</span>
                    <span className="quality-badge">4K</span>
                  </div>
                </div>
                <h3 className="card-title">{movie.title}</h3>
                <p className="card-meta">{movie.year} • {movie.duration}</p>
                <p className="card-genre">{movie.genre}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="section-wrapper">
            <button
              className="scroll-btn left"
              onClick={() => scrollSection("left")}
            >
              ⟨
            </button>
            <div className="movies-container" ref={sectionRef}>
              {movies.map((movie) => (
                <div key={movie.id} className="movie-card">
                  <div className="card-image-container">
                    <img src={movie.image} alt="" className="card-image" />
                    <div className="badges">
                      <span className="premium-badge">Premium</span>
                      <span className="quality-badge">4K</span>
                    </div>
                  </div>
                  <h3 className="card-title">{movie.title}</h3>
                  <p className="card-meta">{movie.year} • {movie.duration}</p>
                  <p className="card-genre">{movie.genre}</p>
                </div>
              ))}
            </div>
            <button
              className="scroll-btn right"
              onClick={() => scrollSection("right")}
            >
              ⟩
            </button>
          </div>
        )}
      </div>
    );
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
                  featuredMovies[getPrevIndex(index)],
                  featuredMovies[index],
                  featuredMovies[getNextIndex(index)]
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

      {/* === MOVIE SECTIONS === */}
      <Section title="Action Movies" movies={actionMovies} />
      <Section title="Drama Movies" movies={dramaMovies} />
      <Section title="Comedy Movies" movies={comedyMovies} />
      <Section title="Thriller Movies" movies={thrillerMovies} />
      <Section title="Kannada Movies" movies={[
        { id: 1, title: "11th Hour", year: "2024", duration: "2h 15m", genre: "Thriller", desc: "A gripping thriller", image: kannada1, thumbnail: kannada1 },
        { id: 2, title: "Baaghi 4", year: "2024", duration: "2h 30m", genre: "Action", desc: "High-octane action", image: kannada2, thumbnail: kannada2 },
        { id: 3, title: "Dhadak 2", year: "2024", duration: "2h 20m", genre: "Romance", desc: "Romantic drama", image: kannada4, thumbnail: kannada4 },
        { id: 4, title: "Kesari 2", year: "2024", duration: "2h 25m", genre: "Action", desc: "Epic action drama", image: kannada6, thumbnail: kannada6 },
        { id: 5, title: "Maidaan", year: "2024", duration: "2h 35m", genre: "Sports", desc: "Sports drama", image: kannada8, thumbnail: kannada8 }
      ]} />
      <Section title="Telugu Movies" movies={[
        { id: 1, title: "Drushyam", year: "2024", duration: "2h 40m", genre: "Thriller", desc: "Suspense thriller", image: telugu4, thumbnail: telugu4 },
        { id: 2, title: "Kingdom", year: "2024", duration: "2h 20m", genre: "Fantasy", desc: "Fantasy adventure", image: telugu6, thumbnail: telugu6 },
        { id: 3, title: "Kuberaa", year: "2024", duration: "2h 15m", genre: "Comedy", desc: "Comedy entertainer", image: telugu7, thumbnail: telugu7 },
        { id: 4, title: "Narasimha", year: "2024", duration: "2h 30m", genre: "Action", desc: "Action drama", image: telugu9, thumbnail: telugu9 },
        { id: 5, title: "Odelu 2", year: "2024", duration: "2h 25m", genre: "Drama", desc: "Emotional drama", image: telugu10, thumbnail: telugu10 }
      ]} />

      <Footer />
    </div>
  );
}

export default Movies;


