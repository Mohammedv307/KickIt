import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './ReviewsPage.css';
import football from './images/football.png';
import filledFootball from './images/ball.png';

function ReviewsPage() {
  const [pitchRating, setPitchRating] = useState(0);
  const [friendlinessRating, setFriendlinessRating] = useState(0);
  const [overallRating, setOverallRating] = useState(0);
  const [levelRating, setLevelRating] = useState(0);
  const [matchID, setMatchID] = useState('');
  const [comments, setComments] = useState('');

  const createRatingHandler = (setter) => (rate) => {
    setter(rate);
  };

  const RatingStars = ({ rating, setRating }) => (
    <div className="ratings" role="radiogroup" aria-label="Rating">
      {/* Added role= radiogroup to indicate a group of radio button */}
      {[1, 2, 3, 4, 5].map((index) => (
        <img
          key={index}
          src={index <= rating ? filledFootball : football}
          alt={`Rate ${index} star${index > 1 ? 's' : ''}`}
          className={`rating ${index <= rating ? 'active' : ''}`}
          onClick={() => setRating(index)}
          style={{ cursor: 'pointer' }}
          role="radio"
          aria-checked={index <= rating}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setRating(index);
            }
          }}
          /* Added role=radio to each image to represent a radio button
             Added ariachecked to indicate if the star is selected
             Added tabindex to make the stars fcusable
             Added onkeydown to allow rating selection via keyboard */
        />
      ))}
    </div>
  );

  const handleSubmit = () => {
    console.log('Match ID:', matchID);
    console.log('Level Rating:', levelRating);
    console.log('Pitch Rating:', pitchRating);
    console.log('Friendliness Rating:', friendlinessRating);
    console.log('Overall Rating:', overallRating);
    console.log('Comments:', comments);
    alert('Review submitted successfully!');
  };

  return (
    <div className="reviewsPage">
      <Header />
      <main className="promo-section">
        {/* Changed div to main for better sematic structure */}
        <h1 className="promo-text">
          Please Rate Your Match for 20% off your next Booking !!
        </h1>
        <section className="rating-section">
          {/* Changed div to section for better semantic structure */}
          <label htmlFor="matchID">Enter Match ID</label>
          {/* Added label for input field */}
          <input
            type="text"
            id="matchID"
            value={matchID}
            onChange={(e) => setMatchID(e.target.value)}
            placeholder="Enter Match ID"
            className="input-field"
            aria-required="true"
            /* Added aria requrred to indicate this field is required */
          />
          <fieldset>
            <legend>How accurate was the level of the match</legend>
            {/* Wrapped rating groups in fieldseet and added legend for better content */}
            <RatingStars rating={levelRating} setRating={createRatingHandler(setLevelRating)} />
          </fieldset>
          <fieldset>
            <legend>How was the pitch</legend>
            <RatingStars rating={pitchRating} setRating={createRatingHandler(setPitchRating)} />
          </fieldset>
          <fieldset>
            <legend>How friendly were the players</legend>
            <RatingStars rating={friendlinessRating} setRating={createRatingHandler(setFriendlinessRating)} />
          </fieldset>
          <fieldset>
            <legend>Rate your overall experience with Kickit</legend>
            <RatingStars rating={overallRating} setRating={createRatingHandler(setOverallRating)} />
          </fieldset>
          <label htmlFor="comments">Additional Comments</label>
          <textarea
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Enter your comments here"
            className="comments-field"
            aria-required="true"
            /* Added ariarequired to indicate this field is required */
          />
          <button onClick={handleSubmit} className="submit-button">Submit</button>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ReviewsPage;
