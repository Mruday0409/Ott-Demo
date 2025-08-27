import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import Footer from "../components/Footer";
import "../styles/Home.css";
import "../styles/Pages.css";

// Import Hero assets - Images
import akandaImage from "../assets/Hero-images/akanda.jpg";
import chhavaImage from "../assets/Hero-images/chhava.jpg";
import devaraImage from "../assets/Hero-images/devara.jpg";
import paramSundariImage from "../assets/Hero-images/Param Sundari.jpg";
import war2Image from "../assets/Hero-images/war 2.jpg";

function Offers() {
  const { user, isLoggedIn, updateUser } = useUser();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');

  const subscriptionPlans = [
    {
      id: 1,
      name: "Basic Plan",
      price: "₹199",
      duration: "per month",
      features: [
        "HD Quality Streaming",
        "Access to 1000+ Movies",
        "Access to 500+ TV Shows",
        "2 Simultaneous Screens",
        "Mobile & Tablet Access",
        "Download for Offline Viewing"
      ],
      popular: false,
      color: "#1e40af"
    },
    {
      id: 2,
      name: "Premium Plan",
      price: "₹399",
      duration: "per month",
      features: [
        "4K Ultra HD Quality",
        "Access to 5000+ Movies",
        "Access to 2000+ TV Shows",
        "4 Simultaneous Screens",
        "All Device Access",
        "Download for Offline Viewing",
        "Early Access to New Releases",
        "Exclusive Content"
      ],
      popular: true,
      color: "#3b82f6"
    },
    {
      id: 3,
      name: "Family Plan",
      price: "₹599",
      duration: "per month",
      features: [
        "4K Ultra HD Quality",
        "Access to 10000+ Movies",
        "Access to 5000+ TV Shows",
        "6 Simultaneous Screens",
        "All Device Access",
        "Download for Offline Viewing",
        "Early Access to New Releases",
        "Exclusive Content",
        "Kids Profile",
        "Parental Controls",
        "Premium Support"
      ],
      popular: false,
      color: "#1d4ed8"
    }
  ];

  const specialOffers = [
    {
      id: 1,
      title: "New Year Special",
      discount: "50% OFF",
      description: "Get 50% off on your first 3 months of Premium Plan",
      validUntil: "Valid until Jan 31, 2025",
      image: akandaImage,
      color: "#ef4444"
    },
    {
      id: 2,
      title: "Student Discount",
      discount: "30% OFF",
      description: "Special pricing for students with valid ID",
      validUntil: "Valid for 12 months",
      image: chhavaImage,
      color: "#10b981"
    },
    {
      id: 3,
      title: "Annual Subscription",
      discount: "2 Months FREE",
      description: "Pay for 10 months, get 12 months access",
      validUntil: "Limited time offer",
      image: devaraImage,
      color: "#f59e0b"
    },
    {
      id: 4,
      title: "Family Bundle",
      discount: "25% OFF",
      description: "Perfect for families with multiple viewers",
      validUntil: "Valid until Feb 28, 2025",
      image: paramSundariImage,
      color: "#8b5cf6"
    }
  ];

  const features = [
    {
      icon: "🎬",
      title: "Unlimited Movies",
      description: "Access to thousands of movies from Bollywood, Hollywood, and regional cinema"
    },
    {
      icon: "📺",
      title: "TV Shows & Series",
      description: "Binge-watch your favorite TV shows and web series"
    },
    {
      icon: "📱",
      title: "Multi-Device Access",
      description: "Watch on your phone, tablet, laptop, or smart TV"
    },
    {
      icon: "⬇️",
      title: "Download & Watch Offline",
      description: "Download your favorite content and watch without internet"
    },
    {
      icon: "🔍",
      title: "Smart Search",
      description: "Find content easily with our advanced search and recommendation engine"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Profiles",
      description: "Create separate profiles for each family member with personalized recommendations"
    }
  ];

  const handleSubscribe = (planId) => {
    if (!isLoggedIn) {
      alert("Please login to subscribe to a plan!");
      return;
    }
    
    setSelectedPlan(planId);
    setShowPaymentModal(true);
  };

  const handlePayment = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // Simulate payment processing
    const plan = subscriptionPlans.find(p => p.id === selectedPlan);
    if (plan) {
      // Update user subscription
      updateUser({ 
        subscription: plan.name,
        subscriptionDate: new Date().toISOString(),
        paymentMethod: paymentMethod
      });
      
      setShowPaymentModal(false);
      alert(`Successfully subscribed to ${plan.name}!`);
    }
  };

  const closePaymentModal = () => {
    setShowPaymentModal(false);
    setSelectedPlan(null);
  };

  return (
    <div style={{ paddingTop: "80px", background: "#000", color: "#fff", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section className="offers-hero">
        <div className="offers-hero-content">
          <h1 className="offers-hero-title">Choose Your Perfect Plan</h1>
          <p className="offers-hero-subtitle">
            Get unlimited access to thousands of movies, TV shows, and exclusive content
          </p>
        </div>
        <div className="offers-hero-bg" style={{ backgroundImage: `url(${war2Image})` }}></div>
      </section>

      {/* Special Offers */}
      <section className="special-offers-section">
        <div className="container">
          <h2 className="section-title">Special Offers</h2>
          <div className="offers-grid">
            {specialOffers.map((offer) => (
              <div key={offer.id} className="offer-card" style={{ borderColor: offer.color }}>
                <div className="offer-image">
                  <img src={offer.image} alt="" />
                  <div className="offer-badge" style={{ backgroundColor: offer.color }}>
                    {offer.discount}
                  </div>
                </div>
                <div className="offer-content">
                  <h3 className="offer-title">{offer.title}</h3>
                  <p className="offer-description">{offer.description}</p>
                  <p className="offer-validity">{offer.validUntil}</p>
                  <button className="offer-btn" style={{ backgroundColor: offer.color }}>
                    Claim Offer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="plans-section">
        <div className="container">
          <h2 className="section-title">Subscription Plans</h2>
          <div className="plans-grid">
            {subscriptionPlans.map((plan) => (
              <div 
                key={plan.id} 
                className={`plan-card ${plan.popular ? 'popular' : ''}`}
                style={{ borderColor: plan.color }}
              >
                {plan.popular && <div className="popular-badge">Most Popular</div>}
                <div className="plan-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <div className="plan-price">
                    <span className="price">{plan.price}</span>
                    <span className="duration">{plan.duration}</span>
                  </div>
                </div>
                <ul className="plan-features">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="check-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  className="subscribe-btn"
                  style={{ backgroundColor: plan.color }}
                  onClick={() => handleSubscribe(plan.id)}
                >
                  Subscribe Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Our Platform?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3 className="faq-question">Can I cancel my subscription anytime?</h3>
              <p className="faq-answer">Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your current billing period.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">How many devices can I use simultaneously?</h3>
              <p className="faq-answer">It depends on your plan. Basic allows 2 screens, Premium allows 4 screens, and Family allows 6 screens simultaneously.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Is there a free trial available?</h3>
              <p className="faq-answer">Yes, we offer a 7-day free trial for new users. No credit card required to start your trial.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-question">Can I download content for offline viewing?</h3>
              <p className="faq-answer">Yes, all our plans include the ability to download content for offline viewing on mobile devices and tablets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="modal-overlay">
          <div className="payment-modal">
            <div className="modal-header">
              <h2>Complete Your Subscription</h2>
              <button className="close-btn" onClick={closePaymentModal}>×</button>
            </div>
            
            <div className="modal-content">
              <div className="selected-plan">
                <h3>{subscriptionPlans.find(p => p.id === selectedPlan)?.name}</h3>
                <p className="plan-price">
                  {subscriptionPlans.find(p => p.id === selectedPlan)?.price} / month
                </p>
              </div>

              <form onSubmit={handlePayment} className="payment-form">
                <div className="payment-methods">
                  <label>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    Credit/Debit Card
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="upi"
                      checked={paymentMethod === 'upi'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    UPI
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="netbanking"
                      checked={paymentMethod === 'netbanking'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    Net Banking
                  </label>
                </div>

                {paymentMethod === 'card' && (
                  <div className="card-details">
                    <input type="text" name="cardNumber" placeholder="Card Number" required />
                    <div className="card-row">
                      <input type="text" name="expiry" placeholder="MM/YY" required />
                      <input type="text" name="cvv" placeholder="CVV" required />
                    </div>
                    <input type="text" name="cardName" placeholder="Cardholder Name" required />
                  </div>
                )}

                {paymentMethod === 'upi' && (
                  <div className="upi-details">
                    <input type="text" name="upiId" placeholder="UPI ID (e.g., user@paytm)" required />
                  </div>
                )}

                {paymentMethod === 'netbanking' && (
                  <div className="netbanking-details">
                    <select name="bank" required>
                      <option value="">Select Bank</option>
                      <option value="sbi">State Bank of India</option>
                      <option value="hdfc">HDFC Bank</option>
                      <option value="icici">ICICI Bank</option>
                      <option value="axis">Axis Bank</option>
                    </select>
                  </div>
                )}

                <button type="submit" className="pay-now-btn">
                  Pay Now - {subscriptionPlans.find(p => p.id === selectedPlan)?.price}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Offers;
