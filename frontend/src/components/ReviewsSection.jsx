import { useEffect, useState } from "react";
import axios from "axios";
import { Star } from "lucide-react";
import toast from "react-hot-toast";

const API = import.meta.env.VITE_API_URL;

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({
    name: "",
    role: "",
    message: "",
    rating: 5,
  });
  const [loading, setLoading] = useState(false);

  const fetchReviews = async () => {
    try {
      const res = await axios.get(`${API}/reviews`);
      console.log("Fetched Reviews:", res.data);

      if (res.data.success) {
        setReviews(res.data.data || res.data.reviews || []);
      }
    } catch (error) {
      console.error("Fetch Reviews Error:", error);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.role || !form.message || !form.rating) {
      return toast.error("Please fill all fields");
    }

    try {
      setLoading(true);

      const res = await axios.post(`${API}/reviews`, form);

      if (res.data.success) {
        toast.success("Review submitted successfully");

        setForm({
          name: "",
          role: "",
          message: "",
          rating: 5,
        });

        fetchReviews(); // refresh instantly
      }
    } catch (error) {
      console.error("Submit Review Error:", error);
      toast.error(error.response?.data?.message || "Failed to submit review");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="reviews" className="py-24 px-6 md:px-10 lg:px-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-3">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What People Say
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Reviews and feedback from people who have seen my work and portfolio.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT: Review Form */}
          <div className="bg-slate-900/70 border border-white/10 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Leave a Review
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-2xl bg-slate-800 border border-white/10 px-5 py-4 outline-none text-white placeholder:text-slate-400"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />

              <input
                type="text"
                placeholder="Your Role / Company"
                className="w-full rounded-2xl bg-slate-800 border border-white/10 px-5 py-4 outline-none text-white placeholder:text-slate-400"
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
              />

              <textarea
                rows="5"
                placeholder="Write your review..."
                className="w-full rounded-2xl bg-slate-800 border border-white/10 px-5 py-4 outline-none resize-none text-white placeholder:text-slate-400"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />

              <select
                className="w-full rounded-2xl bg-slate-800 border border-white/10 px-5 py-4 outline-none text-white"
                value={form.rating}
                onChange={(e) =>
                  setForm({ ...form, rating: Number(e.target.value) })
                }
              >
                <option value={5}>5 Stars</option>
                <option value={4}>4 Stars</option>
                <option value={3}>3 Stars</option>
                <option value={2}>2 Stars</option>
                <option value={1}>1 Star</option>
              </select>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                {loading ? "Submitting..." : "Submit Review"}
              </button>
            </form>
          </div>

          {/* RIGHT: Reviews List */}
          <div className="space-y-6">
            <p className="text-white text-lg font-semibold">
              Total Reviews: {reviews.length}
            </p>

            {reviews.length > 0 ? (
              reviews.map((review) => (
                <div
                  key={review._id}
                  className="bg-slate-900/70 border border-white/10 rounded-3xl p-6 shadow-xl"
                >
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating || 5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Message */}
                  <p className="text-slate-300 leading-7 mb-4">
                    "{review.message}"
                  </p>

                  {/* Name & Role */}
                  <h4 className="font-semibold text-lg text-white">
                    {review.name}
                  </h4>
                  <p className="text-slate-400 text-sm">{review.role}</p>
                </div>
              ))
            ) : (
              <div className="bg-slate-900/70 border border-white/10 rounded-3xl p-8 text-center text-slate-400">
                No reviews yet. Be the first to leave one.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection