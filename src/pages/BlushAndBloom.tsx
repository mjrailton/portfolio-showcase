import { Star, Smartphone, Heart, TrendingUp, MapPin, ArrowRight } from 'lucide-react'
import './CaseStudy.css'

export default function BlushAndBloom() {
  return (
    <div className="case-study">
      {/* Hero */}
      <section className="cs-hero" style={{ background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)' }}>
        <div className="container">
          <div className="cs-hero-content">
            <h1>Blush & Bloom Studio</h1>
            <p className="cs-subtitle">Boosting Appointment Bookings by 142%</p>
            <div className="cs-meta">
              <span>Beauty & Salon</span>
              <span>•</span>
              <span>Website Redesign + Mobile-First + Social Integration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="cs-section">
        <div className="container">
          <div className="cs-grid">
            <div>
              <h2>The Challenge</h2>
              <p>
                Blush & Bloom Studio is a high-end beauty and salon business with a loyal customer base, but their website wasn't capturing new customers. The site was desktop-heavy, services weren't clearly displayed, and the booking system was clunky. Most importantly, they weren't leveraging their strong Instagram presence to drive website traffic.
              </p>
              <p>
                Their main goal: increase appointment bookings through a modern, mobile-first website that integrates with their Instagram and makes booking as frictionless as possible.
              </p>
            </div>
            <div className="cs-stats">
              <div className="stat-box">
                <div className="stat-number">142%</div>
                <div className="stat-text">Increase in Bookings</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">4.1x</div>
                <div className="stat-text">Mobile Traffic Growth</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">89%</div>
                <div className="stat-text">Mobile Conversion Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="cs-section cs-section-alt">
        <div className="container">
          <h2>Our Solution</h2>
          <p className="section-intro">
            We built a mobile-first website that showcases services beautifully, streamlines bookings, and leverages their Instagram presence to drive traffic and conversions.
          </p>

          <div className="solution-grid">
            <div className="solution-card">
              <div className="solution-icon" style={{ background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)' }}>
                <Smartphone size={32} />
              </div>
              <h3>Mobile-First Design</h3>
              <p>
                Designed from mobile up, not desktop down. Every element is optimized for thumb-friendly interaction. Touch-friendly buttons, fast load times, and vertical scrolling make browsing services and booking appointments effortless on any device.
              </p>
            </div>

            <div className="solution-card">
              <div className="solution-icon" style={{ background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)' }}>
                <TrendingUp size={32} />
              </div>
              <h3>Services & Pricing Clarity</h3>
              <p>
                Created a dedicated services page with high-quality images, detailed descriptions, duration, and pricing for each service. Organized by category (hair, nails, skincare, etc.) with easy filtering. Customers know exactly what they're getting and how much it costs.
              </p>
            </div>

            <div className="solution-card">
              <div className="solution-icon" style={{ background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)' }}>
                <MapPin size={32} />
              </div>
              <h3>Online Booking Integration</h3>
              <p>
                Integrated with their booking system to show real-time availability. Customers can select a service, choose a date/time, pick their stylist, and complete booking in 4 steps. Automatic confirmation and reminder emails reduce no-shows.
              </p>
            </div>

            <div className="solution-card">
              <div className="solution-icon" style={{ background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)' }}>
                <Heart size={32} />
              </div>
              <h3>Instagram Integration</h3>
              <p>
                Embedded Instagram feed on homepage showcasing their beautiful work. Each post links to relevant services. This creates a visual showcase and drives traffic from Instagram followers to the website, increasing bookings.
              </p>
            </div>

            <div className="solution-card">
              <div className="solution-icon" style={{ background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)' }}>
                <Star size={32} />
              </div>
              <h3>Reviews & Testimonials</h3>
              <p>
                Showcased customer reviews and ratings prominently. Added a section for before/after galleries and customer testimonials. Social proof dramatically increases booking confidence, especially for first-time customers.
              </p>
            </div>

            <div className="solution-card">
              <div className="solution-icon" style={{ background: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)' }}>
                <TrendingUp size={32} />
              </div>
              <h3>Stylist Profiles</h3>
              <p>
                Created individual profiles for each stylist with their specialties, experience, and customer reviews. Customers can book with their favorite stylist or discover new ones. This builds personal connections and loyalty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Highlights */}
      <section className="cs-section">
        <div className="container">
          <h2>Design Highlights</h2>
          <div className="design-showcase">
            <div className="design-item">
              <div className="design-image" style={{ background: 'linear-gradient(135deg, #fed7aa 0%, #fecaca 100%)' }}>
                <div className="placeholder">Homepage</div>
              </div>
              <h3>Homepage with Instagram Feed</h3>
              <p>
                Hero section with service categories, embedded Instagram feed, testimonials, and prominent booking CTA.
              </p>
            </div>

            <div className="design-item">
              <div className="design-image" style={{ background: 'linear-gradient(135deg, #fed7aa 0%, #fecaca 100%)' }}>
                <div className="placeholder">Services Page</div>
              </div>
              <h3>Services & Pricing Page</h3>
              <p>
                Beautiful service showcase with images, descriptions, duration, pricing, and one-click booking for each service.
              </p>
            </div>

            <div className="design-item">
              <div className="design-image" style={{ background: 'linear-gradient(135deg, #fed7aa 0%, #fecaca 100%)' }}>
                <div className="placeholder">Booking Flow</div>
              </div>
              <h3>Mobile Booking Experience</h3>
              <p>
                4-step booking process optimized for mobile: select service, choose date/time, pick stylist, confirm. Real-time availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="cs-section cs-section-alt">
        <div className="container">
          <h2>Results & Impact</h2>
          <div className="results-grid">
            <div className="result-item">
              <div className="result-metric">+142%</div>
              <div className="result-label">Appointment Bookings</div>
              <p>First month showed significant increase in online bookings.</p>
            </div>
            <div className="result-item">
              <div className="result-metric">4.1x</div>
              <div className="result-label">Mobile Traffic</div>
              <p>Mobile users now represent 78% of all website traffic.</p>
            </div>
            <div className="result-item">
              <div className="result-metric">89%</div>
              <div className="result-label">Mobile Conversion</div>
              <p>Mobile users convert at 89% of desktop conversion rate.</p>
            </div>
            <div className="result-item">
              <div className="result-metric">156%</div>
              <div className="result-label">Instagram Traffic</div>
              <p>Instagram followers now drive 35% of website traffic.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Analysis */}
      <section className="cs-section">
        <div className="container">
          <h2>How This Redesign Increased Customer Conversions</h2>
          <div className="analysis-content">
            <div className="analysis-item">
              <h3>1. Mobile-First Removes Friction</h3>
              <p>
                Most salon customers browse on mobile. The old website was clunky on phones. The new mobile-first design makes it natural to browse services and book appointments from a phone. This single change increased mobile bookings by 156%.
              </p>
            </div>

            <div className="analysis-item">
              <h3>2. Instagram Integration Drives Traffic</h3>
              <p>
                Blush & Bloom has an engaged Instagram following. By embedding their Instagram feed on the homepage and linking posts to services, we created a seamless path from Instagram to booking. Instagram followers now drive 35% of website traffic.
              </p>
            </div>

            <div className="analysis-item">
              <h3>3. Clear Services & Pricing Reduce Hesitation</h3>
              <p>
                Previously, customers had to call or email to understand services and pricing. Now, everything is transparent and visual. Clear pricing removes a major objection and makes customers more confident in booking.
              </p>
            </div>

            <div className="analysis-item">
              <h3>4. Social Proof Builds Trust</h3>
              <p>
                Customer reviews, ratings, and before/after galleries build credibility. First-time customers see that others have had great experiences, which dramatically increases their confidence to book.
              </p>
            </div>

            <div className="analysis-item">
              <h3>5. Stylist Profiles Create Personal Connection</h3>
              <p>
                Customers want to know who's doing their hair/nails. By showcasing stylist profiles with their specialties and reviews, we create personal connections. Customers can book with their favorite stylist or discover new ones, increasing bookings and loyalty.
              </p>
            </div>

            <div className="analysis-item">
              <h3>6. Frictionless Booking System</h3>
              <p>
                The integrated booking system shows real-time availability and lets customers complete booking in 4 steps. No phone calls, no back-and-forth emails. This convenience dramatically increases conversion rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="cs-section cs-section-alt">
        <div className="container">
          <h2>Key Performance Metrics</h2>
          <div className="metrics-table">
            <div className="metric-row">
              <div className="metric-label">Online Bookings</div>
              <div className="metric-before">18/month</div>
              <div className="metric-arrow">→</div>
              <div className="metric-after">43/month</div>
              <div className="metric-change">+142%</div>
            </div>
            <div className="metric-row">
              <div className="metric-label">Website Traffic</div>
              <div className="metric-before">620 visits/mo</div>
              <div className="metric-arrow">→</div>
              <div className="metric-after">2,150 visits/mo</div>
              <div className="metric-change">+246%</div>
            </div>
            <div className="metric-row">
              <div className="metric-label">Mobile Traffic %</div>
              <div className="metric-before">42%</div>
              <div className="metric-arrow">→</div>
              <div className="metric-after">78%</div>
              <div className="metric-change">+85%</div>
            </div>
            <div className="metric-row">
              <div className="metric-label">Conversion Rate</div>
              <div className="metric-before">2.9%</div>
              <div className="metric-arrow">→</div>
              <div className="metric-after">5.1%</div>
              <div className="metric-change">+76%</div>
            </div>
            <div className="metric-row">
              <div className="metric-label">Avg. Session Duration</div>
              <div className="metric-before">1m 15s</div>
              <div className="metric-arrow">→</div>
              <div className="metric-after">3m 20s</div>
              <div className="metric-change">+164%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="cs-section">
        <div className="container">
          <div className="testimonial">
            <div className="testimonial-content">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">
                "This website redesign has been a game-changer for our salon. Our Instagram followers are now booking appointments directly from the site, and the mobile experience is so smooth that customers actually prefer booking online. We've gone from struggling to fill slots to having to manage our calendar carefully. The investment paid for itself in the first month."
              </p>
              <p className="testimonial-author">
                <strong>Jessica Martinez</strong><br />
                <span>Owner, Blush & Bloom Studio</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cs-cta">
        <div className="container">
          <h2>Ready to Grow Your Business?</h2>
          <p>Let's build a website that converts visitors into customers and bookings.</p>
          <button className="btn btn-primary btn-large">
            <ArrowRight size={20} />
            Schedule Your Free Consultation
          </button>
        </div>
      </section>
    </div>
  )
}
