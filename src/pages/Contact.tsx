
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-beige pb-16">
      <div className="container mx-auto px-4 pt-8">
        <h1 className="text-3xl font-playfair font-bold text-deepblue mb-6">
          Contact Us
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-playfair font-bold text-deepblue mb-4">
              Get in Touch
            </h2>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded mb-6">
                <p className="font-medium">Thank you for your message!</p>
                <p>We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-gold focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="feedback">General Feedback</option>
                    <option value="bug">Report a Bug</option>
                    <option value="feature">Feature Request</option>
                    <option value="content">Content Correction</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-gold focus:border-transparent"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gold hover:bg-amber-600 text-white font-medium py-2 px-6 rounded transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-playfair font-bold text-deepblue mb-4">
                Contact Information
              </h2>
              
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-deepblue">Email</p>
                  <a
                    href="mailto:support@historyexplorer.com"
                    className="text-gold hover:underline"
                  >
                    support@historyexplorer.com
                  </a>
                </div>
                
                <div>
                  <p className="font-medium text-deepblue">Technical Support</p>
                  <a
                    href="mailto:tech@historyexplorer.com"
                    className="text-gold hover:underline"
                  >
                    tech@historyexplorer.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-playfair font-bold text-deepblue mb-4">
                FAQs
              </h2>
              
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-deepblue">Is the content historically accurate?</p>
                  <p className="text-gray-700">
                    Yes, all content is based on NCERT curriculum and reviewed for accuracy.
                  </p>
                </div>
                
                <div>
                  <p className="font-medium text-deepblue">Can I use History Explorer for my classroom?</p>
                  <p className="text-gray-700">
                    Absolutely! It's designed as an educational resource for both individual and classroom use.
                  </p>
                </div>
                
                <div>
                  <p className="font-medium text-deepblue">How often is new content added?</p>
                  <p className="text-gray-700">
                    We regularly update our database with new historical events and features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
