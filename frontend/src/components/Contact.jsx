import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { personalInfo } from "../data/portfolioData";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const API = import.meta.env.VITE_API_URL;

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      const { data } = await axios.post(`${API}/contact`, formData);

      if (data.success) {
        toast.success("Message sent successfully!");
        setFormData(initialState);
        setErrors({});
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <SectionTitle title="Let’s Work Together" subtitle="Contact Me" />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="glass rounded-[2rem] p-8 sm:p-10 card-hover"
          >
            <h3 className="text-3xl font-bold">Get in touch</h3>
            <p className="mt-4 text-white/72 leading-8">
              I’m open to internships, freelance projects, and developer opportunities.
              If you have a project, idea, or hiring opportunity, feel free to reach out.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-4">
                <div className="rounded-2xl bg-gradient-to-r from-primary to-secondary p-3">
                  <Mail />
                </div>
                <div>
                  <p className="text-sm text-white/60">Email</p>
                  <p className="font-semibold break-all">{personalInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-4">
                <div className="rounded-2xl bg-gradient-to-r from-primary to-secondary p-3">
                  <Phone />
                </div>
                <div>
                  <p className="text-sm text-white/60">Phone</p>
                  <p className="font-semibold">{personalInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-4">
                <div className="rounded-2xl bg-gradient-to-r from-primary to-secondary p-3">
                  <MapPin />
                </div>
                <div>
                  <p className="text-sm text-white/60">Location</p>
                  <p className="font-semibold">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            onSubmit={handleSubmit}
            className="glass rounded-[2rem] p-8 sm:p-10 card-hover"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block mb-2 text-sm text-white/70">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-secondary"
                />
                {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
              </div>

              <div>
                <label className="block mb-2 text-sm text-white/70">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-secondary"
                />
                {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
              </div>
            </div>

            <div className="mt-5">
              <label className="block mb-2 text-sm text-white/70">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter subject"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-secondary"
              />
              {errors.subject && <p className="mt-2 text-sm text-red-400">{errors.subject}</p>}
            </div>

            <div className="mt-5">
              <label className="block mb-2 text-sm text-white/70">Message</label>
              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-secondary resize-none"
              />
              {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message}</p>}
            </div>

            <button type="submit" className="btn-primary mt-7 w-full sm:w-auto" disabled={loading}>
              <Send size={18} className="mr-2" />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}