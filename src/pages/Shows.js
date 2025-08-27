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

function Shows() {
  // Featured Shows for Hero Section
  const featuredShows = [
    {
      id: 1,
      title: "The Kingdom Chronicles",
      year: "2024",
      duration: "8 Episodes",
      genre: "Fantasy • Adventure",
      desc: "An epic fantasy series following the journey of heroes in a mystical kingdom filled with magic and adventure.",
      image: telugu6,
      video: akandaVideo,
      thumbnail: telugu6
    },
    {
      id: 2,
      title: "Mass Entertainment",
      year: "2024",
      duration: "12 Episodes",
      genre: "Comedy • Drama",
      desc: "A hilarious comedy series that brings together the best of entertainment with mass appeal and family fun.",
      image: telugu8,
      video: chhavaVideo,
      thumbnail: telugu8
    },
    {
      id: 3,
      title: "The Coolie Chronicles",
      year: "2024",
      duration: "10 Episodes",
      genre: "Comedy • Action",
      desc: "A comedy-action series following the adventures of a coolie with extraordinary abilities and hilarious situations.",
      image: telugu2,
      video: devaraVideo,
      thumbnail: telugu2
    }
  ];

  // Web Series
  const webSeries = [
    {
      id: 1,
      title: "The Kingdom Chronicles",
      year: "2024",
      duration: "8 Episodes",
      genre: "Fantasy • Adventure",
      desc: "An epic fantasy series with magical adventures.",
      image: telugu6,
      thumbnail: telugu6
    },
    {
      id: 2,
      title: "Mass Entertainment",
      year: "2024",
      duration: "12 Episodes",
      genre: "Comedy • Drama",
      desc: "A hilarious comedy series with mass appeal.",
      image: telugu8,
      thumbnail: telugu8
    },
    {
      id: 3,
      title: "The Coolie Chronicles",
      year: "2024",
      duration: "10 Episodes",
      genre: "Comedy • Action",
      desc: "Comedy-action series with extraordinary adventures.",
      image: telugu2,
      thumbnail: telugu2
    },
    {
      id: 4,
      title: "Junior's World",
      year: "2024",
      duration: "6 Episodes",
      genre: "Comedy • Family",
      desc: "A heartwarming family comedy series.",
      image: telugu5,
      thumbnail: telugu5
    },
    {
      id: 5,
      title: "Kuberaa's Tales",
      year: "2024",
      duration: "9 Episodes",
      genre: "Comedy • Entertainment",
      desc: "Entertaining comedy series with great performances.",
      image: telugu7,
      thumbnail: telugu7
    }
  ];

  // Reality Shows
  const realityShows = [
    {
      id: 1,
      title: "Dance Reality",
      year: "2024",
      duration: "15 Episodes",
      genre: "Reality • Dance",
      desc: "A competitive dance reality show featuring talented dancers.",
      image: paramSundariImage,
      thumbnail: paramSundariImage
    },
    {
      id: 2,
      title: "Comedy Challenge",
      year: "2024",
      duration: "20 Episodes",
      genre: "Reality • Comedy",
      desc: "A comedy competition show with hilarious challenges.",
      image: kannada5,
      thumbnail: kannada5
    },
    {
      id: 3,
      title: "Action Heroes",
      year: "2024",
      duration: "12 Episodes",
      genre: "Reality • Action",
      desc: "An action-packed reality show featuring stunt performers.",
      image: akandaImage,
      thumbnail: akandaImage
    },
    {
      id: 4,
      title: "Musical Journey",
      year: "2024",
      duration: "18 Episodes",
      genre: "Reality • Music",
      desc: "A musical reality show discovering new talents.",
      image: paramSundariImage,
      thumbnail: paramSundariImage
    }
  ];

  // Documentaries
  const documentaries = [
    {
      id: 1,
      title: "Historical Warriors",
      year: "2024",
      duration: "5 Episodes",
      genre: "Documentary • History",
      desc: "A documentary series exploring the lives of legendary warriors.",
      image: chhavaImage,
      thumbnail: chhavaImage
    },
    {
      id: 2,
      title: "Cinema Chronicles",
      year: "2024",
      duration: "8 Episodes",
      genre: "Documentary • Cinema",
      desc: "Behind-the-scenes look at the making of blockbuster films.",
      image: devaraImage,
      thumbnail: devaraImage
    },
    {
      id: 3,
      title: "Music Legends",
      year: "2024",
      duration: "6 Episodes",
      genre: "Documentary • Music",
      desc: "Documentary series about legendary musicians and composers.",
      image: paramSundariImage,
      thumbnail: paramSundariImage
    },
    {
      id: 4,
      title: "Action Masters",
      year: "2024",
      duration: "7 Episodes",
      genre: "Documentary • Action",
      desc: "Exploring the world of action cinema and stunt work.",
      image: war2Image,
      thumbnail: war2Image
    }
  ];

  // Kids Shows
  const kidsShows = [
    {
      id: 1,
      title: "Junior's Adventures",
      year: "2024",
      duration: "25 Episodes",
      genre: "Kids • Adventure",
      desc: "Fun-filled adventures for kids with educational content.",
      image: telugu5,
      thumbnail: telugu5
    },
    {
      id: 2,
      title: "Family Fun Time",
      year: "2024",
      duration: "30 Episodes",
      genre: "Kids • Family",
      desc: "Family-friendly entertainment for all ages.",
      image: kannada7,
      thumbnail: kannada7
    },
    {
      id: 3,
      title: "Comedy Kids",
      year: "2024",
      duration: "20 Episodes",
      genre: "Kids • Comedy",
      desc: "Hilarious comedy shows designed for children.",
      image: telugu2,
      thumbnail: telugu2
    }
  ];

  const [index, setIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const selected = featuredShows[index];
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  // Navigation
  const nextShow = () => setIndex((prev) => (prev + 1) % featuredShows.length);
  const prevShow = () => setIndex((prev) => (prev - 1 + featuredShows.length) % featuredShows.length);

  // Helpers for trio display
  const getPrevIndex = (i) => (i - 1 + featuredShows.length) % featuredShows.length;
  const getNextIndex = (i) => (i + 1) % featuredShows.length;

  // Mute/Unmute functionality
  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  // Handle video change when hero show changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.muted = isMuted;
    }
  }, [index, isMuted]);

  // Section Component
  const Section = ({ title, shows }) => {
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
            {shows.map((show) => (
              <div key={show.id} className="expanded-card">
                <div className="expanded-card-image">
                  <img src={show.image} alt="" />
                  <div className="badges">
                    <span className="premium-badge">Series</span>
                    <span className="quality-badge">HD</span>
                  </div>
                </div>
                <h3 className="card-title">{show.title}</h3>
                <p className="card-meta">{show.year} • {show.duration}</p>
                <p className="card-genre">{show.genre}</p>
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
              {shows.map((show) => (
                <div key={show.id} className="movie-card">
                  <div className="card-image-container">
                    <img src={show.image} alt="" className="card-image" />
                    <div className="badges">
                      <span className="premium-badge">Series</span>
                      <span className="quality-badge">HD</span>
                    </div>
                  </div>
                  <h3 className="card-title">{show.title}</h3>
                  <p className="card-meta">{show.year} • {show.duration}</p>
                  <p className="card-genre">{show.genre}</p>
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
              <button onClick={prevShow} className="strip-arrow-btn">⟨</button>
              <div className="trio">
                {[
                  featuredShows[getPrevIndex(index)],
                  featuredShows[index],
                  featuredShows[getNextIndex(index)]
                ].map((s, i) => {
                  const isCenter = i === 1;
                  return (
                    <button
                      key={`${s.id}-${i}`}
                      onClick={() => setIndex(i === 0 ? getPrevIndex(index) : i === 2 ? getNextIndex(index) : index)}
                      className="strip-thumb-btn"
                      style={{
                        outline: isCenter ? "2px solid #fff" : "1px solid rgba(255,255,255,0.25)",
                        transform: isCenter ? "scale(1.05)" : "scale(1)",
                        opacity: isCenter ? 1 : 0.85
                      }}
                    >
                      <img
                        src={s.thumbnail}
                        alt=""
                        className={`strip-thumb-img ${isCenter ? 'center' : ''}`}
                      />
                    </button>
                  );
                })}
              </div>
              <button onClick={nextShow} className="strip-arrow-btn">⟩</button>
            </div>
          </div>
        </div>
      </section>

      {/* === SHOW SECTIONS === */}
      <Section title="Web Series" shows={webSeries} />
      <Section title="Reality Shows" shows={realityShows} />
      <Section title="Documentaries" shows={documentaries} />
      <Section title="Kids Shows" shows={kidsShows} />
      <Section title="Comedy Shows" shows={[
        { id: 1, title: "Comedy Central", year: "2024", duration: "15 Episodes", genre: "Comedy", desc: "Stand-up comedy series", image: telugu8, thumbnail: telugu8 },
        { id: 2, title: "Fun Factory", year: "2024", duration: "12 Episodes", genre: "Comedy • Entertainment", desc: "Comedy entertainment show", image: telugu7, thumbnail: telugu7 },
        { id: 3, title: "Laugh Track", year: "2024", duration: "18 Episodes", genre: "Comedy • Variety", desc: "Variety comedy show", image: kannada5, thumbnail: kannada5 }
      ]} />
      <Section title="Action Shows" shows={[
        { id: 1, title: "Action Heroes", year: "2024", duration: "10 Episodes", genre: "Action • Drama", desc: "Action-packed drama series", image: akandaImage, thumbnail: akandaImage },
        { id: 2, title: "War Stories", year: "2024", duration: "8 Episodes", genre: "Action • War", desc: "War drama series", image: war2Image, thumbnail: war2Image },
        { id: 3, title: "Stunt Masters", year: "2024", duration: "14 Episodes", genre: "Action • Reality", desc: "Stunt reality show", image: devaraImage, thumbnail: devaraImage }
      ]} />

      <Footer />
    </div>
  );
}

export default Shows;
