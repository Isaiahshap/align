"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Consultation() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    linkedin: "",
    availability: "",
    helpNeeded: "",
    firstName: "",
    lastName: "",
    emailVIP: "",
    joinVIP: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the data to a server
    console.log("Form submitted:", formData);
    // Reset form or show success message
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="consultation" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            <span className="gold-text">Get Aligned. Meet Jessica.</span>
          </h2>
          <div className="gold-hairline w-24 mx-auto my-4"></div>
          <p className="text-white-dim font-light">
            Reserve your complimentary 20-minute consultation.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-white-dim text-sm mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black-light border border-gold-deep/30 text-off-white focus:border-gold-light focus:shadow-gold"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white-dim text-sm mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black-light border border-gold-deep/30 text-off-white focus:border-gold-light focus:shadow-gold"
                />
              </div>
            </div>

            <div>
              <label htmlFor="linkedin" className="block text-white-dim text-sm mb-2">
                LinkedIn URL *
              </label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black-light border border-gold-deep/30 text-off-white focus:border-gold-light focus:shadow-gold"
              />
            </div>

            <div>
              <label htmlFor="availability" className="block text-white-dim text-sm mb-2">
                Availability
              </label>
              <input
                type="text"
                id="availability"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black-light border border-gold-deep/30 text-off-white focus:border-gold-light focus:shadow-gold"
                placeholder="e.g., Weekdays after 3pm ET, Tuesdays all day"
              />
            </div>

            <div>
              <label htmlFor="helpNeeded" className="block text-white-dim text-sm mb-2">
                How Jessica can help <span className="text-xs">(it's okay if you're unsure)</span>
              </label>
              <textarea
                id="helpNeeded"
                name="helpNeeded"
                value={formData.helpNeeded}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-black-light border border-gold-deep/30 text-off-white focus:border-gold-light focus:shadow-gold resize-none"
              ></textarea>
            </div>

            <div className="pt-4 border-t border-gold-deep/20">
              <h3 className="text-lg font-light mb-4 gold-text">Join Align VIP</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-white-dim text-sm mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black-light border border-gold-deep/30 text-off-white focus:border-gold-light focus:shadow-gold"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-white-dim text-sm mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black-light border border-gold-deep/30 text-off-white focus:border-gold-light focus:shadow-gold"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="emailVIP" className="block text-white-dim text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="emailVIP"
                  name="emailVIP"
                  value={formData.emailVIP}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black-light border border-gold-deep/30 text-off-white focus:border-gold-light focus:shadow-gold"
                />
              </div>

              <div className="flex items-start mb-6">
                <input
                  type="checkbox"
                  id="joinVIP"
                  name="joinVIP"
                  checked={formData.joinVIP}
                  onChange={handleCheckboxChange}
                  className="mt-1"
                />
                <label htmlFor="joinVIP" className="ml-2 text-white-dim text-sm">
                  I'd like to receive exclusive insights, event invitations, and updates from Align.
                </label>
              </div>
            </div>

            <p className="text-white-dimmer text-xs">
              You'll receive a response within two business days. All information is kept confidential.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="submit"
                className="btn-primary px-8 py-3 text-center"
              >
                Request Consultation
              </button>
              <button
                type="button"
                className="btn-secondary px-8 py-3 text-center"
                onClick={() => setFormData(prev => ({ ...prev, joinVIP: true }))}
              >
                Join Align VIP
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
