import { useState, useEffect } from 'react';
import Card from '../../ui/Card/Card';
import Button from '../../ui/Button/Button';
import { supabase } from '/src/lib/supabaseClient.js';
import styles from './Reviews.module.css';

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', rating: 5, text: '' });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      const { data } = await supabase
        .from('reviews')
        .select('*')
        .eq('approved', true)
        .order('created_at', { ascending: false });
      setReviews(data || []);
      setLoading(false);
    };
    fetchReviews();
  }, []);
  
  // display first five reviews
  const displayedReviews = showAll ? reviews : reviews.slice(0, 5);

  // Star rendering
  const StarRating = ({ rating }) => (
    <div className={styles.starRating}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? styles.filledStar : styles.emptyStar}
        >
          ★
        </span>
      ))}
    </div>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await supabase.from('reviews').insert({
      name: form.name.trim(),
      rating: form.rating,
      text: form.text.trim(),
      approved: false,
    });
    setSubmitting(false);
    setShowModal(false);
    setForm({ name: '', rating: 5, text: '' });
    alert('Thank you! Your review will appear after approval.');
  };

  return (
    <>
      <section id='reviews' className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.heading}>What Our Patients Say</h2>
          <p className={styles.subheading}>Real house-call care. Real results.</p>

          {loading ? (
            <p className={styles.loading}>Loading reviews...</p>
          ) : reviews.length === 0 ? (
            <p style={{ color: '#666', fontSize: '18px' }}>No reviews yet — be the first!</p>
          ) : (
            <>
              <div className={styles.grid}>
                {displayedReviews.map((r) => (
                  <Card key={r.id}>
                    <div className={styles.avatarName}>
                      <div className={styles.avatar} />
                      <h4 className={styles.name}>{r.name}</h4>
                    </div>

                    <StarRating rating={r.rating} />

                    <p className={styles.text}>"{r.text}"</p>
                    <p className={styles.date}>
                      — {new Date(r.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </Card>
                ))}
              </div>

              {reviews.length > 5 && (
                <div className={styles.toggleButton}>
                  <Button variant="outline" size="lg" onClick={() => setShowAll(!showAll)}>
                    {showAll ? 'Show Less' : `Show More Reviews (${reviews.length}`}
                  </Button>
                  
                </div>
              )}
            </>
          )}

          <div className={styles.cta}>
            <Button variant="primary" size="lg" onClick={() => setShowModal(true)}>
              Leave a Review
            </Button>
          </div>
        </div>
      </section>

      {/* MODAL */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <h3 className={styles.modalTitle}>Leave a Review</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={styles.input}
              />

              <div className={styles.starsInput}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={star <= form.rating ? styles.filledStar : styles.emptyStar}
                    onClick={() => setForm({ ...form, rating: star })}
                  >
                    ★
                  </span>
                ))}
                <span className={styles.ratingText}>
                  {form.rating} star{form.rating !== 1 && 's'}
                </span>
              </div>

              <textarea
                placeholder="Tell us about your experience with Dr. Karla..."
                rows="7"
                required
                value={form.text}
                onChange={(e) => setForm({ ...form, text: e.target.value })}
                className={styles.textarea}
              />

              <div className={styles.modalButtons}>
                <Button type="submit" variant="primary" size="lg" disabled={submitting}>
                  {submitting ? 'Submitting...' : 'Submit Review'}
                </Button>
                <Button variant="secondary" size="lg" onClick={() => setShowModal(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Review;

