import { useState } from 'react'
import { Mail, Phone } from 'lucide-react'
import './ContactForm.css'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('https://formspree.io/f/xyzjwqvq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      } else {
        setError('Failed to send message. Please try again.')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="contact-form-container">
      <div className="contact-form-wrapper">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Ready to elevate your brand? Let's start a conversation.</p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <Mail size={24} />
              <div>
                <h4>Email</h4>
                <p>mjjj.railton@gmail.com</p>
              </div>
            </div>
            <div className="contact-method">
              <Phone size={24} />
              <div>
                <h4>Response Time</h4>
                <p>Usually within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          {submitted && (
            <div className="success-message">
              ✓ Thank you! We'll be in touch soon.
            </div>
          )}
          
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone (Optional)</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell us about your project..."
              rows={5}
            />
          </div>

          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  )
}
