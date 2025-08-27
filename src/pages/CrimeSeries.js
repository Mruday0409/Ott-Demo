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

function CrimeSeries() {
  // Featured Crime Series for Hero Section
  const featuredCrimeSeries = [
    {
      id: 1,
      title: "Crime Investigation Unit",
      year: "2024",
      duration: "8 Episodes",
      genre: "Crime • Thriller • Investigation",
      desc: "Follow a dedicated team of investigators as they solve complex criminal cases using cutting-edge forensic science and traditional detective work.",
      image: akandaImage,
      video: akandaVideo,
      thumbnail: akandaImage
    },
    {
      id: 2,
      title: "Detective Chronicles",
      year: "2024",
      duration: "10 Episodes",
      genre: "Crime • Mystery • Drama",
      desc: "A seasoned detective's journey through the most challenging cases, revealing the psychological aspects of crime and justice.",
      image: chhavaImage,
      video: chhavaVideo,
      thumbnail: chhavaImage
    },
    {
      id: 3,
      title: "Forensic Files",
      year: "2024",
      duration: "12 Episodes",
      genre: "Crime • Science • Documentary",
      desc: "Real forensic investigations that showcase how science helps solve crimes and bring justice to victims and their families.",
      image: devaraImage,
      video: devaraVideo,
      thumbnail: devaraImage
    }
  ];

  // Crime Investigation
  const crimeInvestigation = [
    {
      id: 1,
      title: "Crime Investigation Unit",
      year: "2024",
      duration: "8 Episodes",
      genre: "Crime • Thriller",
      desc: "Real crime investigations",
      image: akandaImage,
      thumbnail: akandaImage
    },
    {
      id: 2,
      title: "Detective Stories",
      year: "2024",
      duration: "10 Episodes",
      genre: "Crime • Mystery",
      desc: "Detective case files",
      image: chhavaImage,
      thumbnail: chhavaImage
    },
    {
      id: 3,
      title: "Forensic Files",
      year: "2024",
      duration: "12 Episodes",
      genre: "Crime • Science",
      desc: "Forensic investigations",
      image: devaraImage,
      thumbnail: devaraImage
    },
    {
      id: 4,
      title: "Courtroom Drama",
      year: "2024",
      duration: "6 Episodes",
      genre: "Crime • Legal",
      desc: "Legal proceedings",
      image: paramSundariImage,
      thumbnail: paramSundariImage
    },
    {
      id: 5,
      title: "Undercover Operations",
      year: "2024",
      duration: "8 Episodes",
      genre: "Crime • Action",
      desc: "Undercover missions",
      image: war2Image,
      thumbnail: war2Image
    }
  ];

  // True Crime
  const trueCrime = [
    {
      id: 1,
      title: "Unsolved Mysteries",
      year: "2024",
      duration: "15 Episodes",
      genre: "True Crime • Mystery",
      desc: "Investigating unsolved criminal cases",
      image: akandaImage,
      thumbnail: akandaImage
    },
    {
      id: 2,
      title: "Cold Case Files",
      year: "2024",
      duration: "12 Episodes",
      genre: "True Crime • Investigation",
      desc: "Reopening cold cases",
      image: chhavaImage,
      thumbnail: chhavaImage
    },
    {
      id: 3,
      title: "Serial Killers",
      year: "2024",
      duration: "10 Episodes",
      genre: "True Crime • Psychology",
      desc: "Psychological analysis of serial killers",
      image: devaraImage,
      thumbnail: devaraImage
    },
    {
      id: 4,
      title: "Crime Scene Investigation",
      year: "2024",
      duration: "14 Episodes",
      genre: "True Crime • Forensic",
      desc: "Real crime scene analysis",
      image: paramSundariImage,
      thumbnail: paramSundariImage
    }
  ];

  // Legal Drama
  const legalDrama = [
    {
      id: 1,
      title: "Courtroom Battles",
      year: "2024",
      duration: "8 Episodes",
      genre: "Legal • Drama",
      desc: "High-stakes courtroom drama",
      image: akandaImage,
      thumbnail: akandaImage
    },
    {
      id: 2,
      title: "Defense Attorneys",
      year: "2024",
      duration: "10 Episodes",
      genre: "Legal • Defense",
      desc: "Criminal defense stories",
      image: chhavaImage,
      thumbnail: chhavaImage
    },
    {
      id: 3,
      title: "Prosecution Files",
      year: "2024",
      duration: "9 Episodes",
      genre: "Legal • Prosecution",
      desc: "Prosecution case studies",
      image: devaraImage,
      thumbnail: devaraImage
    },
    {
      id: 4,
      title: "Jury Deliberations",
      year: "2024",
      duration: "7 Episodes",
      genre: "Legal • Jury",
      desc: "Behind jury decisions",
      image: paramSundariImage,
      thumbnail: paramSundariImage
    }
  ];

  // Police Procedural
  const policeProcedural = [
    {
      id: 1,
      title: "Police Academy",
      year: "2024",
      duration: "12 Episodes",
      genre: "Police • Training",
      desc: "Police training and procedures",
      image: akandaImage,
      thumbnail: akandaImage
    },
    {
      id: 2,
      title: "Patrol Officers",
      year: "2024",
      duration: "15 Episodes",
      genre: "Police • Patrol",
      desc: "Daily life of patrol officers",
      image: chhavaImage,
      thumbnail: chhavaImage
    },
    {
      id: 3,
      title: "Special Units",
      year: "2024",
      duration: "10 Episodes",
      genre: "Police • Special",
      desc: "Special police units",
      image: devaraImage,
      thumbnail: devaraImage
    },
    {
      id: 4,
      title: "Internal Affairs",
      year: "2024",
      duration: "8 Episodes",
      genre: "Police • Internal",
      desc: "Police internal investigations",
      image: paramSundariImage,
      thumbnail: paramSundariImage
    }
  ];

  const [index, setIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const selected = featuredCrimeSeries[index];
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  // Navigation
  const nextSeries = () => setIndex((prev) => (prev + 1) % featuredCrimeSeries.length);
  const prevSeries = () => setIndex((prev) => (prev - 1 + featuredCrimeSeries.length) % featuredCrimeSeries.length);

  // Helpers for trio display
  const getPrevIndex = (i) => (i - 1 + featuredCrimeSeries.length) % featuredCrimeSeries.length;
  const getNextIndex = (i) => (i + 1) % featuredCrimeSeries.length;

  // Mute/Unmute functionality
  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  // Handle video change when hero series changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.muted = isMuted;
    }
  }, [index, isMuted]);

  // Section Component
  const Section = ({ title, series }) => {
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
            {series.map((s) => (
              <div key={s.id} className="expanded-card">
                <div className="expanded-card-image">
                  <img src={s.image} alt="" />
                  <div className="badges">
                    <span className="premium-badge">Crime</span>
                    <span className="quality-badge">HD</span>
                  </div>
                </div>
                <h3 className="card-title">{s.title}</h3>
                <p className="card-meta">{s.year} • {s.duration}</p>
                <p className="card-genre">{s.genre}</p>
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
              {series.map((s) => (
                <div key={s.id} className="movie-card">
                  <div className="card-image-container">
                    <img src={s.image} alt="" className="card-image" />
                    <div className="badges">
                      <span className="premium-badge">Crime</span>
                      <span className="quality-badge">HD</span>
                    </div>
                  </div>
                  <h3 className="card-title">{s.title}</h3>
                  <p className="card-meta">{s.year} • {s.duration}</p>
                  <p className="card-genre">{s.genre}</p>
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
              <button onClick={prevSeries} className="strip-arrow-btn">⟨</button>
              <div className="trio">
                {[
                  featuredCrimeSeries[getPrevIndex(index)],
                  featuredCrimeSeries[index],
                  featuredCrimeSeries[getNextIndex(index)]
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
              <button onClick={nextSeries} className="strip-arrow-btn">⟩</button>
            </div>
          </div>
        </div>
      </section>

      {/* === CRIME SERIES SECTIONS === */}
      <Section title="Crime Investigation" series={crimeInvestigation} />
      <Section title="True Crime" series={trueCrime} />
      <Section title="Legal Drama" series={legalDrama} />
      <Section title="Police Procedural" series={policeProcedural} />
      <Section title="Crime Documentaries" series={[
        { id: 1, title: "Criminal Psychology", year: "2024", duration: "8 Episodes", genre: "Crime • Psychology", desc: "Understanding criminal minds", image: akandaImage, thumbnail: akandaImage },
        { id: 2, title: "Crime Prevention", year: "2024", duration: "10 Episodes", genre: "Crime • Prevention", desc: "How to prevent crimes", image: chhavaImage, thumbnail: chhavaImage },
        { id: 3, title: "Victim Support", year: "2024", duration: "6 Episodes", genre: "Crime • Support", desc: "Supporting crime victims", image: devaraImage, thumbnail: devaraImage },
        { id: 4, title: "Crime Statistics", year: "2024", duration: "5 Episodes", genre: "Crime • Statistics", desc: "Crime data analysis", image: paramSundariImage, thumbnail: paramSundariImage }
      ]} />
      <Section title="Crime Thrillers" series={[
        { id: 1, title: "Psychological Thrillers", year: "2024", duration: "12 Episodes", genre: "Crime • Thriller", desc: "Mind-bending crime stories", image: akandaImage, thumbnail: akandaImage },
        { id: 2, title: "Action Crime", year: "2024", duration: "8 Episodes", genre: "Crime • Action", desc: "High-octane crime action", image: chhavaImage, thumbnail: chhavaImage },
        { id: 3, title: "Crime Suspense", year: "2024", duration: "10 Episodes", genre: "Crime • Suspense", desc: "Suspenseful crime stories", image: devaraImage, thumbnail: devaraImage },
        { id: 4, title: "Crime Horror", year: "2024", duration: "7 Episodes", genre: "Crime • Horror", desc: "Horrifying crime cases", image: paramSundariImage, thumbnail: paramSundariImage }
      ]} />

      <Footer />
    </div>
  );
}

export default CrimeSeries;
