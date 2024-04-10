import React from 'react';
import testimonialsList from '../data/testimonialsData';
import '../styles/testimonials.css';

export default function Testimonials() {
  return (
    <div className="testimonials">
      <h2>Client testimonials</h2>
      <ul className="testimonials_list">
        {testimonialsList.map((testimonial) => (
          <li key={testimonial.id}>
            <img src={testimonial.src} alt={testimonial.alt} className="avatar" />
            <p>{testimonial.testimonial}</p>
            <div className="user_info">
              <p className="user_name">{testimonial.name}</p>
              <p className="user_job">{testimonial.job}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
