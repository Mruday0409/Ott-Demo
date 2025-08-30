import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import "../styles/Navbar.css";
// Logo removed - using text instead

// Import movie images for search suggestions
import movie1 from "../assets/Hero-images/akanda.jpg";
import movie2 from "../assets/Hero-images/chhava.jpg";
import movie3 from "../assets/Hero-images/devara.jpg";
import movie4 from "../assets/Hero-images/Param Sundari.jpg";
import movie5 from "../assets/Hero-images/war 2.jpg";


function Navbar() {
  const navigate = useNavigate();
  const { user, isLoggedIn, login, logout } = useUser();
  const [showSearch, setShowSearch] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);
  const searchRef = useRef(null);
  const moreDropdownRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Search suggestions with images
  const searchSuggestions = [
    { title: "Bhootnii", image: movie1 },
    { title: "Shang-Chi", image: movie3 },
    { title: "Jumanji", image: movie4 },
    { title: "Elio", image: movie2 },
    { title: "The VVitch", image: movie5 },
    { title: "Action Movies", image: movie3 },
    { title: "Horror Movies", image: movie1 },
    { title: "Comedy Shows", image: movie2 }
  ];

  // Handle logo click
  const handleLogoClick = () => {
    navigate("/");
  };

  // Handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
    setShowSearch(false);
    setShowSearchBar(false); // Close search bar after search
    
    // Add to recent searches
    const newSearch = { title: query, image: movie1, timestamp: Date.now() };
    setRecentSearches(prev => {
      const filtered = prev.filter(item => item.title !== query);
      return [newSearch, ...filtered].slice(0, 5); // Keep only 5 recent searches
    });
    
    // Here you would implement actual search functionality
    console.log("Searching for:", query);
  };

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    
    // Simulate login (in real app, this would be an API call)
    if (email && password) {
      const userData = { 
        name: email.split('@')[0], // Use email prefix as name
        email: email,
        subscription: "Premium Plan",
        memberSince: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
      };
      login(userData);
      setShowLogin(false);
      alert("Login successful!");
    }
  };

  // Handle register
  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    
    // Simulate registration (in real app, this would be an API call)
    if (name && email && password) {
      const userData = { 
        name: name, 
        email: email,
        subscription: "Basic Plan",
        memberSince: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })
      };
      login(userData);
      setShowRegister(false);
      alert("Registration successful!");
    }
  };

  // Handle logout
  const handleLogout = () => {
    logout();
    setShowProfile(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
        setShowSearchBar(false);
        setSearchQuery("");
      }
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target)) {
        setShowMoreDropdown(false);
      }
      // Close hamburger menu when clicking anywhere outside of it
      if (hamburgerRef.current && !hamburgerRef.current.contains(event.target)) {
        setShowHamburgerMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle escape key to close dropdowns
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setShowSearch(false);
        setShowSearchBar(false);
        setSearchQuery("");
        setShowMoreDropdown(false);
        setShowHamburgerMenu(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
      {/* Logo */}
        <Link to="/" className="logo" onClick={handleLogoClick}>
          <span className="logo-text">OTT</span>
        </Link>

      {/* Menu links */}
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/cover-stories" className="nav-link">Cover Stories</Link>
          <Link to="/crime-series" className="nav-link">Crime Series</Link>
          
          {/* More Dropdown */}
          <div className="more-dropdown" ref={moreDropdownRef}>
            <button 
              className="nav-link more-btn"
              onClick={() => setShowMoreDropdown(!showMoreDropdown)}
            >
              More ▼
            </button>
            {showMoreDropdown && (
              <div className="more-dropdown-content">
                <Link to="/food-series" className="dropdown-link">Food Series</Link>
                <Link to="/janata-nyayalaya" className="dropdown-link">Janata Nyayalaya</Link>
                <Link to="/podcast-series" className="dropdown-link">Podcast Series</Link>
                <Link to="/legal-aid" className="dropdown-link">Legal Aid</Link>
                <Link to="/social-cause" className="dropdown-link">Social Cause</Link>
                <Link to="/citizen-journalist" className="dropdown-link">Citizen Journalist</Link>
                <Link to="/real-heroes" className="dropdown-link">Real Heroes</Link>
                <Link to="/citizen-vlog" className="dropdown-link">Citizen Vlog</Link>
                <Link to="/natural-food" className="dropdown-link">Natural Food</Link>
                <Link to="/village-medicines" className="dropdown-link">Village Medicines</Link>
                <Link to="/ott-awards" className="dropdown-link">OTT Awards</Link>
                <Link to="/gate-crash" className="dropdown-link">Gate Crash</Link>
              </div>
            )}
          </div>
          
          <Link to="/offers" className="nav-link">Offers</Link>
          <Link to="/myott" className="nav-link">MyOtt</Link>
      </div>

                      {/* Search Icon / Search Bar */}
        {/* Desktop Search - Icon that expands to search bar */}
        <div className="desktop-search">
          {showSearchBar ? (
            <div className="search-container" ref={searchRef}>
              <div className="search-bar-inline">
                <span className="search-icon-inline">🔍</span>
                <input
                  type="text"
                  className="search-input-inline"
                  placeholder="Search Title, Movie or Cast"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowSearch(e.target.value.length > 0);
                  }}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch(searchQuery);
                    }
                  }}
                  onFocus={() => setShowSearch(true)}
                  autoFocus
                />
              </div>
              
              {showSearch && (
                <div className="search-dropdown">
                  {recentSearches.length > 0 && (
                    <div className="recent-searches">
                      <div className="recent-title">Recent Searches</div>
                      {recentSearches.map((search, index) => (
                        <div
                          key={index}
                          className="recent-item"
                          onClick={() => handleSearch(search.title)}
                        >
                          <img src={search.image} alt="" className="recent-image" />
                          <span className="recent-text">{search.title}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="trending-searches">
                    <div className="trending-title">Trending Searches</div>
                    {searchSuggestions.map((suggestion, index) => (
                      <div
                        key={index}
                        className="trending-item"
                        onClick={() => handleSearch(suggestion.title)}
                      >
                        <img src={suggestion.image} alt="" className="trending-image" />
                        <span className="trending-text">{suggestion.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <span 
              className="search-icon"
              onClick={() => setShowSearchBar(true)}
            >
              🔍
            </span>
          )}
        </div>

        {/* Mobile Search - Always visible search bar */}
        <div className="mobile-search">
          <div className="search-container" ref={searchRef}>
            <div className="search-bar-inline">
              <span className="search-icon-inline">🔍</span>
              <input
                type="text"
                className="search-input-inline"
                placeholder="Search Title, Movie or Cast"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSearch(e.target.value.length > 0);
                }}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch(searchQuery);
                  }
                }}
                onFocus={() => setShowSearch(true)}
              />
            </div>
            
            {showSearch && (
              <div className="search-dropdown">
                {recentSearches.length > 0 && (
                  <div className="recent-searches">
                    <div className="recent-title">Recent Searches</div>
                    {recentSearches.map((search, index) => (
                      <div
                        key={index}
                        className="recent-item"
                        onClick={() => handleSearch(search.title)}
                      >
                        <img src={search.image} alt="" className="recent-image" />
                        <span className="recent-text">{search.title}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="trending-searches">
                  <div className="trending-title">Trending Searches</div>
                  {searchSuggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="trending-item"
                      onClick={() => handleSearch(suggestion.title)}
                    >
                      <img src={suggestion.image} alt="" className="trending-image" />
                      <span className="trending-text">{suggestion.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

      {/* Right side - Desktop */}
        <div className="nav-right desktop-only">

          {/* Language dropdown */}
          <select className="language-select">
          <option>Telugu</option>
          <option>Hindi</option>
          <option>Tamil</option>
            <option>Kannada</option>
            <option>Malayalam</option>
            <option>Bengali</option>
            <option>Gujarati</option>
            <option>Marathi</option>
            <option>Punjabi</option>
            <option>Odia</option>
            <option>Assamese</option>
            <option>English</option>
            <option>Urdu</option>
            <option>Bhojpuri</option>
            <option>Rajasthani</option>
        </select>

        {/* Subscribe button */}
          <button className="subscribe-btn">Subscribe Now</button>

          {/* Login/Profile */}
          {isLoggedIn ? (
            <div className="profile-container">
              <div 
                className="profile-icon"
                onClick={() => setShowProfile(!showProfile)}
              >
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              
              {showProfile && (
                <div className="profile-dropdown">
                  <div className="profile-item">
                    <strong>{user?.name}</strong>
                    <div style={{ fontSize: "12px", color: "#ccc" }}>{user?.email}</div>
                  </div>
                  <div className="profile-divider"></div>
                  <div className="profile-item">My Account</div>
                  <div className="profile-item">Watchlist</div>
                  <div className="profile-item">Settings</div>
                  <div className="profile-divider"></div>
                  <div className="profile-item logout-btn" onClick={handleLogout}>
                    Logout
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button 
              className="login-btn"
              onClick={() => setShowLogin(true)}
            >
              Sign In
            </button>
          )}
      </div>

      {/* Hamburger Menu - Mobile Only */}
      <div className="hamburger-menu mobile-only" ref={hamburgerRef}>
        <button 
          className="hamburger-btn"
          onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        
        {showHamburgerMenu && (
          <div className="hamburger-dropdown">
            {/* Navigation Links */}
            <div className="hamburger-section">
              <h3 className="hamburger-section-title">Navigation</h3>
              <Link to="/" className="hamburger-link" onClick={() => setShowHamburgerMenu(false)}>Home</Link>
              <Link to="/cover-stories" className="hamburger-link" onClick={() => setShowHamburgerMenu(false)}>Cover Stories</Link>
              <Link to="/crime-series" className="hamburger-link" onClick={() => setShowHamburgerMenu(false)}>Crime Series</Link>
              <Link to="/food-series" className="hamburger-link" onClick={() => setShowHamburgerMenu(false)}>Food Series</Link>
              <Link to="/janata-nyayalaya" className="hamburger-link" onClick={() => setShowHamburgerMenu(false)}>Janata Nyayalaya</Link>
              <Link to="/podcast-series" className="hamburger-link" onClick={() => setShowHamburgerMenu(false)}>Podcast Series</Link>
              <Link to="/legal-aid" className="hamburger-link" onClick={() => setShowHamburgerMenu(false)}>Legal Aid</Link>
              <Link to="/social-cause" className="hamburger-link" onClick={() => setShowHamburgerMenu(false)}>Social Cause</Link>
              <Link to="/citizen-journalist" className="hamburger-link" onClick={() => setShowHamburgerMenu(false)}>Citizen Journalist</Link>
              <Link to="/real-heroes" className="hamburger-link" onClick={() => setShowHamburgerMenu(false)}>Real Heroes</Link>
              <Link to="/citizen-vlog" className="hamburger-link" onClick={() => setShowHamburgerMenu(false)}>Citizen Vlog</Link>
              <Link to="/natural-food" className="hamburger-link" onClick={() => setShowHamburgerMenu(false)}>Natural Food</Link>
              <Link to="/village-medicines" className="hamburger-link" onClick={() => setShowHamburgerMenu(false)}>Village Medicines</Link>
              <Link to="/ott-awards" className="hamburger-link" onClick={() => setShowHamburgerMenu(false)}>OTT Awards</Link>
              <Link to="/gate-crash" className="hamburger-link" onClick={() => setShowHamburgerMenu(false)}>Gate Crash</Link>
              <Link to="/offers" className="hamburger-link" onClick={() => setShowHamburgerMenu(false)}>Offers</Link>
              <Link to="/myott" className="hamburger-link" onClick={() => setShowHamburgerMenu(false)}>MyOtt</Link>
            </div>

            {/* Language Selection */}
            <div className="hamburger-section">
              <h3 className="hamburger-section-title">Language</h3>
              <select className="hamburger-language-select">
                <option>Telugu</option>
                <option>Hindi</option>
                <option>Tamil</option>
                <option>Kannada</option>
                <option>Malayalam</option>
                <option>Bengali</option>
                <option>Gujarati</option>
                <option>Marathi</option>
                <option>Punjabi</option>
                <option>Odia</option>
                <option>Assamese</option>
                <option>English</option>
                <option>Urdu</option>
                <option>Bhojpuri</option>
                <option>Rajasthani</option>
              </select>
            </div>

            {/* Subscribe Button */}
            <div className="hamburger-section">
              <button className="hamburger-subscribe-btn">Subscribe Now</button>
            </div>

            {/* Login/Profile */}
            <div className="hamburger-section">
              {isLoggedIn ? (
                <div className="hamburger-profile">
                  <div className="hamburger-profile-info">
                    <div className="hamburger-profile-icon">
                      {user?.name?.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="hamburger-profile-name">{user?.name}</div>
                      <div className="hamburger-profile-email">{user?.email}</div>
                    </div>
                  </div>
                  <div className="hamburger-profile-links">
                    <div className="hamburger-link">My Account</div>
                    <div className="hamburger-link">Watchlist</div>
                    <div className="hamburger-link">Settings</div>
                    <div className="hamburger-link hamburger-logout" onClick={handleLogout}>Logout</div>
                  </div>
                </div>
              ) : (
                <button 
                  className="hamburger-login-btn"
                  onClick={() => {
                    setShowLogin(true);
                    setShowHamburgerMenu(false);
                  }}
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>

      {/* Login Modal */}
      {showLogin && (
        <div className="modal-overlay" onClick={() => setShowLogin(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="close-btn"
              onClick={() => setShowLogin(false)}
            >
              ×
            </button>
            <div className="modal-header">
              <h2 className="modal-title">Login</h2>
              <p className="modal-subtitle">Welcome back to OTT</p>
            </div>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-input"
                  required
                />
              </div>
              <button type="submit" className="form-button">
                Login
              </button>
            </form>
            <div style={{ textAlign: "center" }}>
              <span style={{ color: "#ccc" }}>Don't have an account? </span>
              <span 
                className="form-link"
                onClick={() => {
                  setShowLogin(false);
                  setShowRegister(true);
                }}
              >
                Sign up
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {showRegister && (
        <div className="modal-overlay" onClick={() => setShowRegister(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="close-btn"
              onClick={() => setShowRegister(false)}
            >
              ×
            </button>
            <div className="modal-header">
              <h2 className="modal-title">Create Account</h2>
              <p className="modal-subtitle">Join OTT and start streaming</p>
            </div>
            <form onSubmit={handleRegister}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-input"
                  required
                />
              </div>
              <button type="submit" className="form-button">
                Create Account
              </button>
            </form>
            <div style={{ textAlign: "center" }}>
              <span style={{ color: "#ccc" }}>Already have an account? </span>
              <span 
                className="form-link"
                onClick={() => {
                  setShowRegister(false);
                  setShowLogin(true);
                }}
              >
                Login
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;