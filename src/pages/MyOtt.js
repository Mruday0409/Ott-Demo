import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import Footer from "../components/Footer";
import "../styles/Home.css";
import "../styles/Pages.css";

// Import movie images
import akandaImage from "../assets/Hero-images/akanda.jpg";
import chhavaImage from "../assets/Hero-images/chhava.jpg";
import devaraImage from "../assets/Hero-images/devara.jpg";
import paramSundariImage from "../assets/Hero-images/Param Sundari.jpg";
import war2Image from "../assets/Hero-images/war 2.jpg";

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

function MyOtt() {
  const { user, isLoggedIn } = useUser();
  const [activeTab, setActiveTab] = useState('watchlist');

  // Redirect to login if not logged in
  if (!isLoggedIn || !user) {
    return (
      <div style={{ paddingTop: "80px", background: "#000", color: "#fff", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <h1>Please Login to Access MyOtt</h1>
          <p>You need to be logged in to view your personal content.</p>
        </div>
      </div>
    );
  }

  // Generate avatar from user name
  const avatar = user.name ? user.name.charAt(0).toUpperCase() : "U";

  // Watchlist data
  const watchlist = [
    {
      id: 1,
      title: "Akanda",
      year: "2024",
      duration: "2h 30m",
      genre: "Action • Drama",
      image: akandaImage,
      addedDate: "2024-01-15",
      progress: 0
    },
    {
      id: 2,
      title: "Chhava",
      year: "2024",
      duration: "2h 45m",
      genre: "Historical • Drama",
      image: chhavaImage,
      addedDate: "2024-01-14",
      progress: 0
    },
    {
      id: 3,
      title: "Devara",
      year: "2024",
      duration: "2h 30m",
      genre: "Action • Drama",
      image: devaraImage,
      addedDate: "2024-01-13",
      progress: 0
    },
    {
      id: 4,
      title: "Param Sundari",
      year: "2024",
      duration: "2h 20m",
      genre: "Romance • Musical",
      image: paramSundariImage,
      addedDate: "2024-01-12",
      progress: 0
    },
    {
      id: 5,
      title: "War 2",
      year: "2024",
      duration: "2h 45m",
      genre: "Action • War",
      image: war2Image,
      addedDate: "2024-01-11",
      progress: 0
    }
  ];

  // Recently watched data
  const recentlyWatched = [
    {
      id: 1,
      title: "Salaar",
      year: "2024",
      duration: "2h 40m",
      genre: "Action • Drama",
      image: telugu14,
      watchedDate: "2024-01-20",
      progress: 100,
      lastWatched: "2 hours ago"
    },
    {
      id: 2,
      title: "Seeta Ramam",
      year: "2024",
      duration: "2h 40m",
      genre: "Romance • Drama",
      image: telugu15,
      watchedDate: "2024-01-19",
      progress: 100,
      lastWatched: "1 day ago"
    },
    {
      id: 3,
      title: "OG",
      year: "2024",
      duration: "2h 35m",
      genre: "Action • Crime",
      image: telugu11,
      watchedDate: "2024-01-18",
      progress: 75,
      lastWatched: "2 days ago"
    },
    {
      id: 4,
      title: "Paradha",
      year: "2024",
      duration: "2h 15m",
      genre: "Drama • Romance",
      image: telugu12,
      watchedDate: "2024-01-17",
      progress: 100,
      lastWatched: "3 days ago"
    },
    {
      id: 5,
      title: "Raajasaab",
      year: "2024",
      duration: "2h 25m",
      genre: "Action • Drama",
      image: telugu13,
      watchedDate: "2024-01-16",
      progress: 60,
      lastWatched: "4 days ago"
    }
  ];

  // Planned to watch data
  const plannedToWatch = [
    {
      id: 1,
      title: "11th Hour",
      year: "2024",
      duration: "2h 15m",
      genre: "Thriller",
      image: kannada1,
      plannedDate: "2024-01-25",
      priority: "High"
    },
    {
      id: 2,
      title: "Baaghi 4",
      year: "2024",
      duration: "2h 30m",
      genre: "Action",
      image: kannada2,
      plannedDate: "2024-01-26",
      priority: "Medium"
    },
    {
      id: 3,
      title: "Dhadak 2",
      year: "2024",
      duration: "2h 20m",
      genre: "Romance",
      image: kannada4,
      plannedDate: "2024-01-27",
      priority: "Low"
    },
    {
      id: 4,
      title: "Kesari 2",
      year: "2024",
      duration: "2h 25m",
      genre: "Action",
      image: kannada6,
      plannedDate: "2024-01-28",
      priority: "High"
    },
    {
      id: 5,
      title: "Maidaan",
      year: "2024",
      duration: "2h 35m",
      genre: "Sports",
      image: kannada8,
      plannedDate: "2024-01-29",
      priority: "Medium"
    }
  ];

  // Continue watching data
  const continueWatching = [
    {
      id: 1,
      title: "Mtero",
      year: "2024",
      duration: "2h 10m",
      genre: "Thriller • Mystery",
      image: kannada9,
      progress: 45,
      lastWatched: "1 hour ago"
    },
    {
      id: 2,
      title: "Drushyam",
      year: "2024",
      duration: "2h 40m",
      genre: "Thriller",
      image: telugu4,
      progress: 30,
      lastWatched: "3 hours ago"
    },
    {
      id: 3,
      title: "Kingdom",
      year: "2024",
      duration: "2h 20m",
      genre: "Fantasy",
      image: telugu6,
      progress: 65,
      lastWatched: "5 hours ago"
    }
  ];

  const tabs = [
    { id: 'watchlist', label: 'My Watchlist', count: watchlist.length },
    { id: 'recent', label: 'Recently Watched', count: recentlyWatched.length },
    { id: 'planned', label: 'Planned to Watch', count: plannedToWatch.length },
    { id: 'continue', label: 'Continue Watching', count: continueWatching.length }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'watchlist':
        return (
          <div className="content-grid">
            {watchlist.map((item) => (
              <div key={item.id} className="content-card">
                <div className="content-image">
                  <img src={item.image} alt="" />
                  <div className="content-overlay">
                    <button className="play-btn">▶</button>
                    <button className="remove-btn">×</button>
                  </div>
                </div>
                <div className="content-info">
                  <h3 className="content-title">{item.title}</h3>
                  <p className="content-meta">{item.year} • {item.duration}</p>
                  <p className="content-genre">{item.genre}</p>
                  <p className="content-date">Added: {item.addedDate}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case 'recent':
        return (
          <div className="content-grid">
            {recentlyWatched.map((item) => (
              <div key={item.id} className="content-card">
                <div className="content-image">
                  <img src={item.image} alt="" />
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${item.progress}%` }}></div>
                  </div>
                  <div className="content-overlay">
                    <button className="play-btn">▶</button>
                    <button className="replay-btn">↻</button>
                  </div>
                </div>
                <div className="content-info">
                  <h3 className="content-title">{item.title}</h3>
                  <p className="content-meta">{item.year} • {item.duration}</p>
                  <p className="content-genre">{item.genre}</p>
                  <p className="content-date">{item.lastWatched}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case 'planned':
        return (
          <div className="content-grid">
            {plannedToWatch.map((item) => (
              <div key={item.id} className="content-card">
                <div className="content-image">
                  <img src={item.image} alt="" />
                  <div className="priority-badge" style={{ 
                    backgroundColor: item.priority === 'High' ? '#ef4444' : 
                                   item.priority === 'Medium' ? '#f59e0b' : '#10b981' 
                  }}>
                    {item.priority}
                  </div>
                  <div className="content-overlay">
                    <button className="play-btn">▶</button>
                    <button className="remove-btn">×</button>
                  </div>
                </div>
                <div className="content-info">
                  <h3 className="content-title">{item.title}</h3>
                  <p className="content-meta">{item.year} • {item.duration}</p>
                  <p className="content-genre">{item.genre}</p>
                  <p className="content-date">Planned: {item.plannedDate}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case 'continue':
        return (
          <div className="content-grid">
            {continueWatching.map((item) => (
              <div key={item.id} className="content-card">
                <div className="content-image">
                  <img src={item.image} alt="" />
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${item.progress}%` }}></div>
                  </div>
                  <div className="content-overlay">
                    <button className="play-btn">▶</button>
                    <button className="remove-btn">×</button>
                  </div>
                </div>
                <div className="content-info">
                  <h3 className="content-title">{item.title}</h3>
                  <p className="content-meta">{item.year} • {item.duration}</p>
                  <p className="content-genre">{item.genre}</p>
                  <p className="content-date">{item.lastWatched}</p>
                </div>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ paddingTop: "80px", background: "#000", color: "#fff", minHeight: "100vh" }}>
      {/* Profile Header */}
      <section className="profile-header">
        <div className="container">
          <div className="profile-info">
            <div className="profile-avatar">
              <span className="avatar-text">{avatar}</span>
            </div>
            <div className="profile-details">
              <h1 className="profile-name">{user.name}</h1>
              <p className="profile-email">{user.email}</p>
              <div className="profile-meta">
                <span className="subscription">{user.subscription || "Basic Plan"}</span>
                <span className="member-since">Member since {user.memberSince || "January 2024"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="tabs-section">
        <div className="container">
          <div className="tabs-nav">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
                <span className="tab-count">{tab.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {tabs.find(tab => tab.id === activeTab)?.label}
            </h2>
            <div className="section-actions">
              <button className="action-btn">Sort</button>
              <button className="action-btn">Filter</button>
            </div>
          </div>
          {renderContent()}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">🎬</div>
              <div className="stat-info">
                <h3 className="stat-number">{watchlist.length + recentlyWatched.length + plannedToWatch.length}</h3>
                <p className="stat-label">Total Content</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⏱️</div>
              <div className="stat-info">
                <h3 className="stat-number">45h</h3>
                <p className="stat-label">Watch Time</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📅</div>
              <div className="stat-info">
                <h3 className="stat-number">12</h3>
                <p className="stat-label">Days Active</p>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⭐</div>
              <div className="stat-info">
                <h3 className="stat-number">4.8</h3>
                <p className="stat-label">Avg Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyOtt;
