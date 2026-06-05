import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Zap, TrendingUp, Users, BarChart3, Phone } from 'lucide-react'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <img src="/logo.png" alt="MJR Studio" className="hero-logo" />
          <h1 className="hero-title">
            Elevate Your Brand
          </h1>
          <p className="hero-subtitle">
            Premium web design and digital strategy for ambitious businesses. We create websites that don't just look exceptional—they drive measurable results.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary">Schedule a Consultation</button>
            <button className="btn btn-secondary">View Our Work</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">156%</span>
              <span className="stat-label">Avg. Growth</span>
            </div>
            <div className="stat">
              <span className="stat-value">$2.4M+</span>
              <span className="stat-label">Client Revenue</span>
            </div>
            <div className="stat">
              <span className="stat-value">47</span>
              <span className="stat-label">Brands Elevated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Tailored solutions for your brand's growth</p>
          </div>

          <div className="services-grid">
            {/* Website Refresh */}
            <div className="service-card">
              <div className="service-icon">
                <Zap size={32} />
              </div>
              <h3>Website Refresh</h3>
              <p className="service-price">$3,500 - $5,500</p>
              <p className="service-description">
                Modernize your existing website with refined design, enhanced performance, and conversion optimization.
              </p>
              <ul className="service-features">
                <li><CheckCircle size={18} /> Modern, elegant design</li>
                <li><CheckCircle size={18} /> Performance optimization</li>
                <li><CheckCircle size={18} /> Conversion-focused layout</li>
                <li><CheckCircle size={18} /> SEO enhancement</li>
              </ul>
              <button className="btn btn-outline">Learn More</button>
            </div>

            {/* Premium Website */}
            <div className="service-card featured">
              <div className="badge">Most Popular</div>
              <div className="service-icon">
                <TrendingUp size={32} />
              </div>
              <h3>Premium Website</h3>
              <p className="service-price">$6,500 - $12,000</p>
              <p className="service-description">
                Custom-crafted website designed to attract your ideal clients and convert them into loyal customers.
              </p>
              <ul className="service-features">
                <li><CheckCircle size={18} /> Custom design & development</li>
                <li><CheckCircle size={18} /> Advanced optimization</li>
                <li><CheckCircle size={18} /> Booking/inquiry system</li>
                <li><CheckCircle size={18} /> SEO & analytics</li>
                <li><CheckCircle size={18} /> Full support & training</li>
              </ul>
              <button className="btn btn-primary">Get Started</button>
            </div>

            {/* Ongoing Partnership */}
            <div className="service-card">
              <div className="service-icon">
                <Users size={32} />
              </div>
              <h3>Ongoing Partnership</h3>
              <p className="service-price">$1,500 - $3,500/mo</p>
              <p className="service-description">
                Long-term partnership to continuously refine your digital presence and maximize growth.
              </p>
              <ul className="service-features">
                <li><CheckCircle size={18} /> Monthly optimization</li>
                <li><CheckCircle size={18} /> Performance analytics</li>
                <li><CheckCircle size={18} /> Content management</li>
                <li><CheckCircle size={18} /> A/B testing & refinement</li>
                <li><CheckCircle size={18} /> Priority support</li>
              </ul>
              <button className="btn btn-outline">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="case-studies">
        <div className="container">
          <div className="section-header">
            <h2>Our Work</h2>
            <p>Real results for real brands</p>
          </div>

          <div className="case-studies-grid">
            {/* Elevate Dance Academy */}
            <Link to="/case-study/elevate-dance-academy" className="case-study-card">
              <div className="case-study-image" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)' }}>
                <BarChart3 size={48} color="white" />
              </div>
              <div className="case-study-content">
                <h3>Elevate Dance Academy</h3>
                <p className="case-study-category">Dance Studio</p>
                <p className="case-study-description">
                  Transformed their online presence with emotional branding and streamlined booking, increasing trial classes by 187%.
                </p>
                <div className="case-study-result">
                  <span className="result-metric">+187%</span>
                  <span className="result-label">Trial Bookings</span>
                </div>
                <span className="read-more">View Case Study <ArrowRight size={16} /></span>
              </div>
            </Link>

            {/* Blush & Bloom Studio */}
            <Link to="/case-study/blush-and-bloom" className="case-study-card">
              <div className="case-study-image" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)' }}>
                <BarChart3 size={48} color="white" />
              </div>
              <div className="case-study-content">
                <h3>Blush & Bloom Studio</h3>
                <p className="case-study-category">Beauty & Salon</p>
                <p className="case-study-description">
                  Mobile-first redesign with Instagram integration increased appointment bookings by 142%.
                </p>
                <div className="case-study-result">
                  <span className="result-metric">+142%</span>
                  <span className="result-label">Appointments</span>
                </div>
                <span className="read-more">View Case Study <ArrowRight size={16} /></span>
              </div>
            </Link>

            {/* Placeholder Case Study */}
            <div className="case-study-card placeholder">
              <div className="case-study-image" style={{ background: 'linear-gradient(135deg, #2d2d2d 0%, #3d3d3d 100%)' }}>
                <BarChart3 size={48} color="white" />
              </div>
              <div className="case-study-content">
                <h3>Your Brand Here</h3>
                <p className="case-study-category">Next Success Story</p>
                <p className="case-study-description">
                  Ready to elevate your brand? Let's create your success story together.
                </p>
                <div className="case-study-result">
                  <span className="result-metric">+X%</span>
                  <span className="result-label">Growth</span>
                </div>
                <span className="read-more">Start Your Journey <ArrowRight size={16} /></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Why Choose MJR Studio</h2>
              <p>
                We're not just designers. We're strategic partners dedicated to elevating your brand and driving tangible business results. Every project we undertake is approached with meticulous attention to detail and a commitment to excellence.
              </p>
              <p>
                Our methodology combines aesthetic sophistication with data-driven strategy, ensuring your digital presence not only captivates but converts.
              </p>
              <div className="about-features">
                <div className="feature">
                  <CheckCircle size={24} className="feature-icon" />
                  <div>
                    <h4>Premium Design</h4>
                    <p>Sophisticated, elegant design that reflects your brand's excellence.</p>
                  </div>
                </div>
                <div className="feature">
                  <CheckCircle size={24} className="feature-icon" />
                  <div>
                    <h4>Strategic Approach</h4>
                    <p>Every design decision is rooted in research and conversion optimization.</p>
                  </div>
                </div>
                <div className="feature">
                  <CheckCircle size={24} className="feature-icon" />
                  <div>
                    <h4>Measurable Results</h4>
                    <p>We focus on metrics that matter: conversions, engagement, and growth.</p>
                  </div>
                </div>
                <div className="feature">
                  <CheckCircle size={24} className="feature-icon" />
                  <div>
                    <h4>Dedicated Partnership</h4>
                    <p>Long-term support to ensure your continued success and growth.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <TrendingUp size={64} />
                  <p>Premium Design Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Elevate Your Brand?</h2>
            <p>Let's discuss how MJR Studio can transform your digital presence.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">
                <Phone size={20} />
                Schedule a Consultation
              </button>
              <button className="btn btn-secondary btn-large">
                Send an Inquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <img src="/logo.png" alt="MJR Studio" className="footer-logo" />
              <h4>MJR Studio</h4>
              <p>Premium web design and digital strategy for ambitious brands.</p>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Website Refresh</a></li>
                <li><a href="#services">Premium Website</a></li>
                <li><a href="#services">Ongoing Partnership</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Case Studies</h4>
              <ul>
                <li><a href="/case-study/elevate-dance-academy">Elevate Dance Academy</a></li>
                <li><a href="/case-study/blush-and-bloom">Blush & Bloom Studio</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li><a href="#contact">Schedule a Call</a></li>
                <li><a href="#contact">Send a Message</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 MJR Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
