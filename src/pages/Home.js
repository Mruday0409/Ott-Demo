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
      <Section title="Cover Story Series" movies={[
        { id: 1, title: "Behind the Scenes", year: "2024", duration: "45m", genre: "Documentary", desc: "Exclusive behind-the-scenes content", image: akandaImage, thumbnail: akandaImage },
        { id: 2, title: "Making of Blockbusters", year: "2024", duration: "50m", genre: "Documentary", desc: "How movies are made", image: chhavaImage, thumbnail: chhavaImage },
        { id: 3, title: "Director's Cut", year: "2024", duration: "40m", genre: "Documentary", desc: "Director's perspective", image: devaraImage, thumbnail: devaraImage },
        { id: 4, title: "Actor's Journey", year: "2024", duration: "35m", genre: "Documentary", desc: "Actor's life story", image: paramSundariImage, thumbnail: paramSundariImage },
        { id: 5, title: "Production Secrets", year: "2024", duration: "42m", genre: "Documentary", desc: "Production insights", image: war2Image, thumbnail: war2Image }
      ]} />
      <Section title="Crime Series" movies={[
        { id: 1, title: "Crime Investigation", year: "2024", duration: "8 Episodes", genre: "Crime • Thriller", desc: "Real crime investigations", image: akandaImage, thumbnail: akandaImage },
        { id: 2, title: "Detective Stories", year: "2024", duration: "10 Episodes", genre: "Crime • Mystery", desc: "Detective case files", image: chhavaImage, thumbnail: chhavaImage },
        { id: 3, title: "Forensic Files", year: "2024", duration: "12 Episodes", genre: "Crime • Science", desc: "Forensic investigations", image: devaraImage, thumbnail: devaraImage },
        { id: 4, title: "Courtroom Drama", year: "2024", duration: "6 Episodes", genre: "Crime • Legal", desc: "Legal proceedings", image: paramSundariImage, thumbnail: paramSundariImage },
        { id: 5, title: "Undercover Operations", year: "2024", duration: "8 Episodes", genre: "Crime • Action", desc: "Undercover missions", image: war2Image, thumbnail: war2Image }
      ]} />
      <Section title="Food Series" movies={[
        { id: 1, title: "Street Food Chronicles", year: "2024", duration: "30m", genre: "Food • Travel", desc: "Exploring street food", image: akandaImage, thumbnail: akandaImage },
        { id: 2, title: "Chef's Kitchen", year: "2024", duration: "45m", genre: "Food • Cooking", desc: "Professional cooking", image: chhavaImage, thumbnail: chhavaImage },
        { id: 3, title: "Traditional Recipes", year: "2024", duration: "35m", genre: "Food • Culture", desc: "Traditional cooking", image: devaraImage, thumbnail: devaraImage },
        { id: 4, title: "Food Adventures", year: "2024", duration: "40m", genre: "Food • Adventure", desc: "Culinary adventures", image: paramSundariImage, thumbnail: paramSundariImage },
        { id: 5, title: "Healthy Eating", year: "2024", duration: "25m", genre: "Food • Health", desc: "Healthy food choices", image: war2Image, thumbnail: war2Image }
      ]} />
      <Section title="Continue Watching" movies={movies} />
      <Section title="Janata Nyayalaya" movies={[
        { id: 1, title: "Public Court", year: "2024", duration: "60m", genre: "Legal • Public", desc: "Public court proceedings", image: akandaImage, thumbnail: akandaImage },
        { id: 2, title: "Citizen Justice", year: "2024", duration: "45m", genre: "Legal • Social", desc: "Citizen-led justice", image: chhavaImage, thumbnail: chhavaImage },
        { id: 3, title: "Community Resolution", year: "2024", duration: "50m", genre: "Legal • Community", desc: "Community disputes", image: devaraImage, thumbnail: devaraImage },
        { id: 4, title: "Public Grievances", year: "2024", duration: "40m", genre: "Legal • Public", desc: "Public complaints", image: paramSundariImage, thumbnail: paramSundariImage },
        { id: 5, title: "Social Justice", year: "2024", duration: "55m", genre: "Legal • Social", desc: "Social justice issues", image: war2Image, thumbnail: war2Image }
      ]} />
      <Section title="Recently Added" movies={movies} />
      <Section title="Podcast Series" movies={[
        { id: 1, title: "Tech Talk", year: "2024", duration: "45m", genre: "Podcast • Technology", desc: "Technology discussions", image: akandaImage, thumbnail: akandaImage },
        { id: 2, title: "Business Insights", year: "2024", duration: "50m", genre: "Podcast • Business", desc: "Business strategies", image: chhavaImage, thumbnail: chhavaImage },
        { id: 3, title: "Health & Wellness", year: "2024", duration: "40m", genre: "Podcast • Health", desc: "Health discussions", image: devaraImage, thumbnail: devaraImage },
        { id: 4, title: "Entertainment News", year: "2024", duration: "35m", genre: "Podcast • Entertainment", desc: "Entertainment updates", image: paramSundariImage, thumbnail: paramSundariImage },
        { id: 5, title: "Social Issues", year: "2024", duration: "55m", genre: "Podcast • Social", desc: "Social discussions", image: war2Image, thumbnail: war2Image }
      ]} />
      <Section title="Legal Aid" movies={[
        { id: 1, title: "Free Legal Help", year: "2024", duration: "30m", genre: "Legal • Aid", desc: "Free legal assistance", image: akandaImage, thumbnail: akandaImage },
        { id: 2, title: "Know Your Rights", year: "2024", duration: "25m", genre: "Legal • Education", desc: "Legal rights education", image: chhavaImage, thumbnail: chhavaImage },
        { id: 3, title: "Legal Procedures", year: "2024", duration: "35m", genre: "Legal • Guide", desc: "Legal process guide", image: devaraImage, thumbnail: devaraImage },
        { id: 4, title: "Court Assistance", year: "2024", duration: "40m", genre: "Legal • Court", desc: "Court procedures", image: paramSundariImage, thumbnail: paramSundariImage },
        { id: 5, title: "Legal Documentation", year: "2024", duration: "30m", genre: "Legal • Documents", desc: "Document preparation", image: war2Image, thumbnail: war2Image }
      ]} />
      <Section title="Social Cause Documentaries" movies={[
        { id: 1, title: "Environmental Issues", year: "2024", duration: "60m", genre: "Documentary • Environment", desc: "Environmental awareness", image: akandaImage, thumbnail: akandaImage },
        { id: 2, title: "Education for All", year: "2024", duration: "45m", genre: "Documentary • Education", desc: "Education initiatives", image: chhavaImage, thumbnail: chhavaImage },
        { id: 3, title: "Women Empowerment", year: "2024", duration: "50m", genre: "Documentary • Social", desc: "Women's rights", image: devaraImage, thumbnail: devaraImage },
        { id: 4, title: "Rural Development", year: "2024", duration: "55m", genre: "Documentary • Rural", desc: "Rural progress", image: paramSundariImage, thumbnail: paramSundariImage },
        { id: 5, title: "Healthcare Access", year: "2024", duration: "40m", genre: "Documentary • Health", desc: "Healthcare initiatives", image: war2Image, thumbnail: war2Image }
      ]} />
      <Section title="Citizen Journalist" movies={[
        { id: 1, title: "Ground Report", year: "2024", duration: "20m", genre: "Journalism • Citizen", desc: "Citizen reporting", image: akandaImage, thumbnail: akandaImage },
        { id: 2, title: "Local News", year: "2024", duration: "15m", genre: "Journalism • Local", desc: "Local news coverage", image: chhavaImage, thumbnail: chhavaImage },
        { id: 3, title: "Community Stories", year: "2024", duration: "25m", genre: "Journalism • Community", desc: "Community reporting", image: devaraImage, thumbnail: devaraImage },
        { id: 4, title: "Public Issues", year: "2024", duration: "30m", genre: "Journalism • Public", desc: "Public issue coverage", image: paramSundariImage, thumbnail: paramSundariImage },
        { id: 5, title: "Social Media News", year: "2024", duration: "18m", genre: "Journalism • Digital", desc: "Digital journalism", image: war2Image, thumbnail: war2Image }
      ]} />
      <Section title="Real Heroes" movies={[
        { id: 1, title: "Everyday Heroes", year: "2024", duration: "35m", genre: "Documentary • Heroes", desc: "Unsung heroes", image: akandaImage, thumbnail: akandaImage },
        { id: 2, title: "Social Workers", year: "2024", duration: "40m", genre: "Documentary • Social", desc: "Social work heroes", image: chhavaImage, thumbnail: chhavaImage },
        { id: 3, title: "Community Leaders", year: "2024", duration: "30m", genre: "Documentary • Community", desc: "Community leadership", image: devaraImage, thumbnail: devaraImage },
        { id: 4, title: "Volunteers", year: "2024", duration: "25m", genre: "Documentary • Volunteer", desc: "Volunteer stories", image: paramSundariImage, thumbnail: paramSundariImage },
        { id: 5, title: "Change Makers", year: "2024", duration: "45m", genre: "Documentary • Change", desc: "Social change makers", image: war2Image, thumbnail: war2Image }
      ]} />
      <Section title="Citizen Vlog" movies={[
        { id: 1, title: "Public Problems", year: "2024", duration: "15m", genre: "Vlog • Public", desc: "Public issue vlogs", image: akandaImage, thumbnail: akandaImage },
        { id: 2, title: "Community Issues", year: "2024", duration: "20m", genre: "Vlog • Community", desc: "Community problems", image: chhavaImage, thumbnail: chhavaImage },
        { id: 3, title: "Social Awareness", year: "2024", duration: "18m", genre: "Vlog • Social", desc: "Social awareness", image: devaraImage, thumbnail: devaraImage },
        { id: 4, title: "Local Concerns", year: "2024", duration: "12m", genre: "Vlog • Local", desc: "Local issues", image: paramSundariImage, thumbnail: paramSundariImage },
        { id: 5, title: "Citizen Voice", year: "2024", duration: "22m", genre: "Vlog • Voice", desc: "Citizen opinions", image: war2Image, thumbnail: war2Image }
      ]} />
      <Section title="Natural Food" movies={[
        { id: 1, title: "Village Food", year: "2024", duration: "30m", genre: "Food • Natural", desc: "Traditional village food", image: akandaImage, thumbnail: akandaImage },
        { id: 2, title: "Organic Farming", year: "2024", duration: "35m", genre: "Food • Organic", desc: "Organic food production", image: chhavaImage, thumbnail: chhavaImage },
        { id: 3, title: "Traditional Cooking", year: "2024", duration: "25m", genre: "Food • Traditional", desc: "Traditional recipes", image: devaraImage, thumbnail: devaraImage },
        { id: 4, title: "Healthy Living", year: "2024", duration: "28m", genre: "Food • Health", desc: "Healthy food choices", image: paramSundariImage, thumbnail: paramSundariImage },
        { id: 5, title: "Farm to Table", year: "2024", duration: "32m", genre: "Food • Farm", desc: "Farm fresh food", image: war2Image, thumbnail: war2Image }
      ]} />
      <Section title="Village Medicines" movies={[
        { id: 1, title: "Traditional Medicine", year: "2024", duration: "40m", genre: "Health • Traditional", desc: "Traditional healing", image: akandaImage, thumbnail: akandaImage },
        { id: 2, title: "Herbal Remedies", year: "2024", duration: "35m", genre: "Health • Herbal", desc: "Herbal treatments", image: chhavaImage, thumbnail: chhavaImage },
        { id: 3, title: "Natural Healing", year: "2024", duration: "30m", genre: "Health • Natural", desc: "Natural cures", image: devaraImage, thumbnail: devaraImage },
        { id: 4, title: "Ayurveda", year: "2024", duration: "45m", genre: "Health • Ayurveda", desc: "Ayurvedic medicine", image: paramSundariImage, thumbnail: paramSundariImage },
        { id: 5, title: "Home Remedies", year: "2024", duration: "25m", genre: "Health • Home", desc: "Home treatments", image: war2Image, thumbnail: war2Image }
      ]} />
      <Section title="OTT Annual Awards" movies={[
        { id: 1, title: "Awards Ceremony", year: "2024", duration: "120m", genre: "Awards • Ceremony", desc: "Annual awards show", image: akandaImage, thumbnail: akandaImage },
        { id: 2, title: "Best Content", year: "2024", duration: "90m", genre: "Awards • Content", desc: "Best content awards", image: chhavaImage, thumbnail: chhavaImage },
        { id: 3, title: "Creator Awards", year: "2024", duration: "75m", genre: "Awards • Creator", desc: "Creator recognition", image: devaraImage, thumbnail: devaraImage },
        { id: 4, title: "Audience Choice", year: "2024", duration: "60m", genre: "Awards • Audience", desc: "Audience favorites", image: paramSundariImage, thumbnail: paramSundariImage },
        { id: 5, title: "Special Recognition", year: "2024", duration: "45m", genre: "Awards • Special", desc: "Special awards", image: war2Image, thumbnail: war2Image }
      ]} />
      <Section title="Gate Crash" movies={[
        { id: 1, title: "Unexpected Events", year: "2024", duration: "30m", genre: "Reality • Unexpected", desc: "Unexpected moments", image: akandaImage, thumbnail: akandaImage },
        { id: 2, title: "Surprise Visits", year: "2024", duration: "25m", genre: "Reality • Surprise", desc: "Surprise encounters", image: chhavaImage, thumbnail: chhavaImage },
        { id: 3, title: "Unplanned Moments", year: "2024", duration: "20m", genre: "Reality • Unplanned", desc: "Spontaneous events", image: devaraImage, thumbnail: devaraImage },
        { id: 4, title: "Behind the Scenes", year: "2024", duration: "35m", genre: "Reality • Behind", desc: "Behind the scenes", image: paramSundariImage, thumbnail: paramSundariImage },
        { id: 5, title: "Candid Moments", year: "2024", duration: "28m", genre: "Reality • Candid", desc: "Candid captures", image: war2Image, thumbnail: war2Image }
      ]} />

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