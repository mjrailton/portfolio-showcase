import { Star, Users, TrendingUp, Clock, CheckCircle, ArrowRight } from 'lucide-react'
import './CaseStudy.css'

export default function ElevateDanceAcademy() {
  return (
    <div className="case-study">
      {/* Hero */}
      <section className="cs-hero" style={{ background: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)' }}>
        <div className="container">
          <div className="cs-hero-content">
            <h1>Elevate Dance Academy</h1>
            <p className="cs-subtitle">Increasing Trial Class Bookings by 187%</p>
            <div className="cs-meta">
              <span>Dance Studio</span>
              <span>•</span>
              <span>Website Redesign + Booking System</span>
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
                Elevate Dance Academy had an outdated website that didn't reflect their vibrant, modern studio. Potential students couldn't easily find class schedules, and the booking process was confusing and disconnected. They were losing interested prospects to competitors with better online experiences.
              </p>
              <p>
                Their main goal: increase trial class bookings and establish a strong emotional connection with prospective dancers and their families.
              </p>
            </div>
            <div className="cs-stats">
              <div className="stat-box">
                <div className="stat-number">187%</div>
                <div className="stat-text">Increase in Trial Bookings</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">3.2x</div>
                <div className="stat-text">More Website Traffic</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">68%</div>
                <div className="stat-text">Conversion Rate Improvement</div>
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
            We completely redesigned Elevate's online presence with a focus on emotional branding, clear information architecture, and frictionless booking.
          </p>

          <div className="solution-grid">
            <div className="solution-card">
              <div className="solution-icon" style={{ background: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)' }}>
                <Users size={32} />
              </div>
              <h3>Modern Homepage with Emotional Branding</h3>
              <p>
                Created a hero section that captures the energy and joy of dance. High-quality video backgrounds and inspiring imagery immediately communicate the studio's vibrant culture. The messaging shifted from "dance classes" to "discover your passion" and "join our community."
              </p>
            </div>

            <div className="solution-card">
              <div className="solution-icon" style={{ background: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)' }}>
                <Clock size={32} />
              </div>
              <h3>Streamlined Class Schedule</h3>
              <p>
                Built an intuitive class schedule page with filters by age group, dance style, and skill level. Color-coded classes make it easy to scan. Each class has a detailed description, instructor bio, and a prominent "Book Trial" button.
              </p>
            </div>

            <div className="solution-card">
              <div className="solution-icon" style={{ background: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)' }}>
                <TrendingUp size={32} />
              </div>
              <h3>Integrated Booking System</h3>
              <p>
                Implemented a simple, mobile-friendly booking system. Students can select a class, choose their trial date, and complete booking in 3 steps. Automated confirmation emails and SMS reminders reduce no-shows.
              </p>
            </div>

            <div className="solution-card">
              <div className="solution-icon" style={{ background: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)' }}>
                <Star size={32} />
              </div>
              <h3>Instructor Bios & Testimonials</h3>
              <p>
                Showcased instructor personalities with professional photos, bios, and specialties. Added a testimonials section featuring real student and parent feedback, building trust and social proof.
              </p>
            </div>

            <div className="solution-card">
              <div className="solution-icon" style={{ background: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)' }}>
                <CheckCircle size={32} />
              </div>
              <h3>Lead Capture Form</h3>
              <p>
                Created a free trial class lead form with minimal friction. Offers a "First Class Free" incentive to encourage sign-ups. Integrates with their CRM for automated follow-up sequences.
              </p>
            </div>

            <div className="solution-card">
              <div className="solution-icon" style={{ background: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)' }}>
                <TrendingUp size={32} />
              </div>
              <h3>Pricing & Membership Clarity</h3>
              <p>
                Redesigned pricing section with clear membership tiers, class packages, and a comparison table. Made it obvious what each option includes, reducing confusion and support requests.
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
              <div className="design-image" style={{ background: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)' }}>
                <div className="placeholder">Homepage</div>
              </div>
              <h3>Homepage Redesign</h3>
              <p>
                Hero section with video background, class categories, instructor showcase, and prominent CTA buttons for trial bookings.
              </p>
            </div>

            <div className="design-item">
              <div className="design-image" style={{ background: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)' }}>
                <div className="placeholder">Class Schedule</div>
              </div>
              <h3>Class Schedule Page</h3>
              <p>
                Interactive schedule with filtering, color-coded classes, instructor details, and one-click booking for each class.
              </p>
            </div>

            <div className="design-item">
              <div className="design-image" style={{ background: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)' }}>
                <div className="placeholder">Booking Flow</div>
              </div>
              <h3>Booking Experience</h3>
              <p>
                3-step booking process: select class, choose date, enter details. Mobile-optimized with progress indicator and clear CTAs.
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
              <div className="result-metric">+187%</div>
              <div className="result-label">Trial Class Bookings</div>
              <p>First month after launch saw dramatic increase in trial sign-ups.</p>
            </div>
            <div className="result-item">
              <div className="result-metric">3.2x</div>
              <div className="result-label">Website Traffic</div>
              <p>Improved SEO and social sharing drove more visitors to the site.</p>
            </div>
            <div className="result-item">
              <div className="result-metric">68%</div>
              <div className="result-label">Conversion Rate</div>
              <p>Visitors are now 68% more likely to book a trial class.</p>
            </div>
            <div className="result-item">
              <div className="result-metric">92%</div>
              <div className="result-label">Trial-to-Member</div>
              <p>Trial students are converting to paid memberships at 92% rate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Analysis */}
      <section className="cs-section">
        <div className="container">
          <h2>How This Redesign Increased Conversions</h2>
          <div className="analysis-content">
            <div className="analysis-item">
              <h3>1. Emotional Connection from First Click</h3>
              <p>
                The old website was generic and corporate. The new design immediately communicates the energy, passion, and community of the studio through vibrant colors, dynamic imagery, and inspiring copy. When prospective students land on the site, they feel the culture before they even read about classes.
              </p>
            </div>

            <div className="analysis-item">
              <h3>2. Reduced Friction in Discovery</h3>
              <p>
                Previously, finding the right class required scrolling through PDFs or calling the studio. Now, the interactive schedule with filters makes it effortless. Students can instantly find classes that match their age, skill level, and schedule—removing a major barrier to booking.
              </p>
            </div>

            <div className="analysis-item">
              <h3>3. Trust Through Social Proof</h3>
              <p>
                The instructor bios and testimonials section builds credibility. Parents want to know who's teaching their kids. By showcasing instructor expertise and real student testimonials, we reduced purchase anxiety and increased confidence in the decision to book a trial.
              </p>
            </div>

            <div className="analysis-item">
              <h3>4. Frictionless Booking Experience</h3>
              <p>
                The old booking process required multiple steps and external tools. The new integrated system lets users book a trial in 3 clicks, directly on the website. This single change eliminated a major conversion bottleneck.
              </p>
            </div>

            <div className="analysis-item">
              <h3>5. Mobile-First Design</h3>
              <p>
                Most prospects browse on mobile. The redesigned site is fully responsive, with touch-friendly buttons and fast load times. Mobile conversions increased by 156% after launch.
              </p>
            </div>

            <div className="analysis-item">
              <h3>6. Clear Value Proposition</h3>
              <p>
                The messaging shifted from "we offer dance classes" to "join a community, discover your passion, express yourself." This emotional positioning resonates much better with families looking for more than just lessons—they want belonging.
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
              <div className="metric-label">Trial Class Bookings</div>
              <div className="metric-before">12/month</div>
              <div className="metric-arrow">→</div>
              <div className="metric-after">34/month</div>
              <div className="metric-change">+187%</div>
            </div>
            <div className="metric-row">
              <div className="metric-label">Website Traffic</div>
              <div className="metric-before">450 visits/mo</div>
              <div className="metric-arrow">→</div>
              <div className="metric-after">1,440 visits/mo</div>
              <div className="metric-change">+220%</div>
            </div>
            <div className="metric-row">
              <div className="metric-label">Conversion Rate</div>
              <div className="metric-before">2.7%</div>
              <div className="metric-arrow">→</div>
              <div className="metric-after">4.6%</div>
              <div className="metric-change">+68%</div>
            </div>
            <div className="metric-row">
              <div className="metric-label">Avg. Time on Site</div>
              <div className="metric-before">1m 20s</div>
              <div className="metric-arrow">→</div>
              <div className="metric-after">3m 45s</div>
              <div className="metric-change">+180%</div>
            </div>
            <div className="metric-row">
              <div className="metric-label">Mobile Traffic %</div>
              <div className="metric-before">38%</div>
              <div className="metric-arrow">→</div>
              <div className="metric-after">64%</div>
              <div className="metric-change">+68%</div>
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
                "The new website completely transformed how we attract students. We went from struggling to fill classes to having waitlists. The booking system is so simple that parents love it, and we've cut down on no-shows significantly. This redesign was the best investment we made for our studio."
              </p>
              <p className="testimonial-author">
                <strong>Sarah Chen</strong><br />
                <span>Owner, Elevate Dance Academy</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cs-cta">
        <div className="container">
          <h2>Ready to Transform Your Business?</h2>
          <p>Let's create a website that drives real results for your business.</p>
          <button className="btn btn-primary btn-large">
            <ArrowRight size={20} />
            Book a Free Strategy Call
          </button>
        </div>
      </section>
    </div>
  )
}
