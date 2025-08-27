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

function CoverStories() {
  // Featured Stories for Hero Section
  const featuredStories = [
    {
      id: 1,
      title: "Behind the Scenes: Akanda",
      year: "2024",
      duration: "15m",
      genre: "Documentary • Behind the Scenes",
      desc: "Exclusive behind-the-scenes footage and interviews with the cast and crew of the blockbuster action drama Akanda.",
      image: akandaImage,
      video: akandaVideo,
      thumbnail: akandaImage
    },
    {
      id: 2,
      title: "Making of Chhava",
      year: "2024",
      duration: "20m",
      genre: "Documentary • Making Of",
      desc: "Discover the incredible journey of bringing the historical epic Chhava to life with stunning visuals and authentic storytelling.",
      image: chhavaImage,
      video: chhavaVideo,
      thumbnail: chhavaImage
    },
    {
      id: 3,
      title: "Devara: The Epic Journey",
      year: "2024",
      duration: "18m",
      genre: "Documentary • Feature",
      desc: "An in-depth look at the making of Devara, from concept to completion, featuring exclusive interviews and never-before-seen footage.",
      image: devaraImage,
      video: devaraVideo,
      thumbnail: devaraImage
    }
  ];

  // Behind the Scenes Content
  const behindTheScenes = [
    {
      id: 1,
      title: "Akanda: Action Sequences",
      year: "2024",
      duration: "12m",
      genre: "Behind the Scenes",
      desc: "How the intense action sequences were choreographed and filmed.",
      image: akandaImage,
      thumbnail: akandaImage
    },
    {
      id: 2,
      title: "Chhava: Historical Accuracy",
      year: "2024",
      duration: "15m",
      genre: "Documentary",
      desc: "The research and attention to detail that went into creating authentic historical settings.",
      image: chhavaImage,
      thumbnail: chhavaImage
    },
    {
      id: 3,
      title: "Devara: Visual Effects",
      year: "2024",
      duration: "10m",
      genre: "VFX Breakdown",
      desc: "A breakdown of the stunning visual effects that brought the epic world to life.",
      image: devaraImage,
      thumbnail: devaraImage
    },
    {
      id: 4,
      title: "Param Sundari: Music Magic",
      year: "2024",
      duration: "14m",
      genre: "Music Documentary",
      desc: "The creation of the beautiful musical score and songs.",
      image: paramSundariImage,
      thumbnail: paramSundariImage
    },
    {
      id: 5,
      title: "War 2: Battle Scenes",
      year: "2024",
      duration: "16m",
      genre: "Behind the Scenes",
      desc: "The massive scale and coordination required for the epic battle sequences.",
      image: war2Image,
      thumbnail: war2Image
    }
  ];

  // Director's Cut
  const directorsCut = [
    {
      id: 1,
      title: "Director's Commentary: Akanda",
      year: "2024",
      duration: "25m",
      genre: "Commentary",
      desc: "Director's insights and commentary on key scenes and creative decisions.",
      image: akandaImage,
      thumbnail: akandaImage
    },
    {
      id: 2,
      title: "Deleted Scenes: Chhava",
      year: "2024",
      duration: "18m",
      genre: "Deleted Scenes",
      desc: "Scenes that didn't make the final cut but offer additional character development.",
      image: chhavaImage,
      thumbnail: chhavaImage
    },
    {
      id: 3,
      title: "Alternative Ending: Devara",
      year: "2024",
      duration: "8m",
      genre: "Alternative Content",
      desc: "An alternative ending that was considered but ultimately changed.",
      image: devaraImage,
      thumbnail: devaraImage
    },
    {
      id: 4,
      title: "Character Backstories",
      year: "2024",
      duration: "22m",
      genre: "Character Study",
      desc: "Deep dive into the character development and backstories.",
      image: paramSundariImage,
      thumbnail: paramSundariImage
    }
  ];

  // Exclusive Interviews
  const exclusiveInterviews = [
    {
      id: 1,
      title: "Cast Interview: Akanda",
      year: "2024",
      duration: "30m",
      genre: "Interview",
      desc: "Exclusive interviews with the main cast discussing their roles and experiences.",
      image: akandaImage,
      thumbnail: akandaImage
    },
    {
      id: 2,
      title: "Director's Vision: Chhava",
      year: "2024",
      duration: "25m",
      genre: "Interview",
      desc: "The director shares his vision and challenges in bringing this epic to life.",
      image: chhavaImage,
      thumbnail: chhavaImage
    },
    {
      id: 3,
      title: "Producer's Journey",
      year: "2024",
      duration: "20m",
      genre: "Interview",
      desc: "The producer discusses the challenges and triumphs of making this blockbuster.",
      image: devaraImage,
      thumbnail: devaraImage
    },
    {
      id: 4,
      title: "Music Director's Story",
      year: "2024",
      duration: "18m",
      genre: "Interview",
      desc: "The music director shares the creative process behind the memorable soundtrack.",
      image: paramSundariImage,
      thumbnail: paramSundariImage
    }
  ];

  const [index, setIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const selected = featuredStories[index];
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  // Navigation
  const nextMovie = () => setIndex((prev) => (prev + 1) % featuredStories.length);
  const prevMovie = () => setIndex((prev) => (prev - 1 + featuredStories.length) % featuredStories.length);

  // Helpers for trio display
  const getPrevIndex = (i) => (i - 1 + featuredStories.length) % featuredStories.length;
  const getNextIndex = (i) => (i + 1) % featuredStories.length;

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
                    <span className="premium-badge">Exclusive</span>
                    <span className="quality-badge">HD</span>
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
                      <span className="premium-badge">Exclusive</span>
                      <span className="quality-badge">HD</span>
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
                  featuredStories[getPrevIndex(index)],
                  featuredStories[index],
                  featuredStories[getNextIndex(index)]
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

      {/* === COVER STORIES SECTIONS === */}
      <Section title="Behind the Scenes" movies={behindTheScenes} />
      <Section title="Director's Cut" movies={directorsCut} />
      <Section title="Exclusive Interviews" movies={exclusiveInterviews} />
      <Section title="Making Of Documentaries" movies={[
        { id: 1, title: "The Making of War 2", year: "2024", duration: "35m", genre: "Documentary", desc: "Complete making of the epic war drama", image: war2Image, thumbnail: war2Image },
        { id: 2, title: "Param Sundari: Music Journey", year: "2024", duration: "28m", genre: "Music Doc", desc: "The musical journey of Param Sundari", image: paramSundariImage, thumbnail: paramSundariImage },
        { id: 3, title: "Salaar: The Epic", year: "2024", duration: "32m", genre: "Documentary", desc: "Making of the epic action drama", image: telugu14, thumbnail: telugu14 },
        { id: 4, title: "Seeta Ramam: Love Story", year: "2024", duration: "25m", genre: "Romance Doc", desc: "The making of the timeless love story", image: telugu15, thumbnail: telugu15 }
      ]} />

      <Footer />
    </div>
  );
}

export default CoverStories;
