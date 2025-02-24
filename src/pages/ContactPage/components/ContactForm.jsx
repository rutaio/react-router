import axios from 'axios';
import { api } from '../../../constants/globalConstants';
import { useState } from 'react';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    //console.log(name, email, review);
    try {
      await axios.post(api, {
        name,
        email,
        review,
      });
    } catch (error) {
      console.error('error');
    } finally {
      setName('');
      setEmail('');
      setReview('');
    }
  };

  return (
    <form action="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        required
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="email"
        placeholder="Your Email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <textarea
        placeholder="Your Review"
        required
        value={review}
        onChange={(event) => setReview(event.target.value)}
      ></textarea>

      <button type="submit">Send</button>
    </form>
  );
};
