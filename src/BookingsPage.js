import React, { useState } from 'react';
import { Container, Form, Button, FormControl } from 'react-bootstrap';
import Select from 'react-select';
import './BookingsPage.css';
import Header from './Header';
import Footer from './Footer';
import backgroundImage from './images/Book.jpg';

const customStyles = {
  control: (base) => ({
    ...base,
    borderRadius: '5px',
    padding: '10px',
    fontSize: '1em',
    border: '1px solid #ddd',
    marginBottom: '15px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: '#000', 
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: 'rgba(255, 255, 255, 1)', 
    color: '#000', 
  }),
  option: (base, { isSelected, isFocused }) => ({
    ...base,
    color: isSelected ? '#fff' : '#000',
    backgroundColor: isSelected ? '#AE1111' : isFocused ? '#f1f1f1' : null,
    padding: '10px',
  }),
  singleValue: (base) => ({
    ...base,
    color: '#000',
  }),
};

const levelOptions = [
  { value: 'Beginner', label: 'Beginner' },
  { value: 'Amateur', label: 'Amateur' },
  { value: 'Semi-Pro', label: 'Semi-Pro' },
  { value: 'Professional', label: 'Professional' }
];

const positionOptions = [
  { value: 'Goalkeeper', label: 'Goalkeeper' },
  { value: 'Defender', label: 'Defender' },
  { value: 'Midfielder', label: 'Midfielder' },
  { value: 'Forward', label: 'Forward' }
];

const BookingsPage = ({ gamesData, leaguesData }) => {
  const [bookingType, setBookingType] = useState('Game');
  const [selectedOption, setSelectedOption] = useState(null);
  const [details, setDetails] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    level: '',
    position: ''
  });

  const handleSearch = () => {
    const id = selectedOption ? selectedOption.value : '';
    const data = bookingType === 'Game' ? gamesData : leaguesData;
    const detail = data.find(item => item.id === id);
    setDetails(detail);
  };

  const handleInputChange = (name, selectedOption) => {
    setFormData({ ...formData, [name]: selectedOption });
  };

  const handleBooking = () => {
    if (!selectedOption || !formData.name || !formData.level || !formData.position) {
      alert('Please fill out all fields');
      return;
    }
    console.log('Booking Details:', {
      bookingType,
      id: selectedOption ? selectedOption.value : '',
      name: formData.name,
      level: formData.level.value,
      position: formData.position.value
    });
    alert('Booking confirmed!');
  };

  const getOptions = () => {
    const data = bookingType === 'Game' ? gamesData : leaguesData;
    return data.map(item => ({
      value: item.id,
      label: item.id
    }));
  };

  return (
    <div className="bookingspage" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Header />

      <div className="content">
        <div className="booking-form">
          <h1>Book a League or Game</h1>
          <Form>
            <Form.Group controlId="bookingType">
              <Form.Label>Select Booking Type</Form.Label>
              <Form.Control as="select" value={bookingType} onChange={(e) => setBookingType(e.target.value)}>
                <option value="Game">Game</option>
                <option value="League">League</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="id">
              <Form.Label>{bookingType === 'Game' ? 'Match ID' : 'League ID'}</Form.Label>
              <Select
                value={selectedOption}
                onChange={setSelectedOption}
                options={getOptions()}
                isClearable
                placeholder="Select ID"
                styles={customStyles}
                classNamePrefix="select"
                className="select-container"
                aria-label="Select Match or League ID"
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSearch} className="search-button">Search</Button>
          </Form>

          {details && (
            <div className="match-details">
              <h2>Match Details</h2>
              <p><strong>Date/Time:</strong> {details.dateTime}</p>
              <p><strong>Location:</strong> {details.location}</p>
              <p><strong>Details:</strong> {details.details}</p>
              <p><strong>Spots:</strong> {details.spots}</p>
              <p><strong>Level:</strong> {details.level}</p>
              {details.players && (
                <p><strong>Players:</strong> {details.players.join(', ')}</p>
              )}
            </div>
          )}

          {details && (
            <div className="booking-details">
              <h2>Enter Your Details</h2>
              <Form>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <FormControl type="text" name="name" value={formData.name} onChange={(e) => handleInputChange(e.target.name, e.target.value)} className="input-custom" aria-label="Name" />
                </Form.Group>
                <Form.Group controlId="level">
                  <Form.Label>Level</Form.Label>
                  <Select
                    value={formData.level}
                    onChange={(selectedOption) => handleInputChange('level', selectedOption)}
                    options={levelOptions}
                    isClearable
                    placeholder="Select Level"
                    styles={customStyles}
                    classNamePrefix="select"
                    className="select-container"
                    aria-label="Select Level"
                  />
                </Form.Group>
                <Form.Group controlId="position">
                  <Form.Label>Select Position</Form.Label>
                  <Select
                    value={formData.position}
                    onChange={(selectedOption) => handleInputChange('position', selectedOption)}
                    options={positionOptions}
                    isClearable
                    placeholder="Select Position"
                    styles={customStyles}
                    classNamePrefix="select"
                    className="select-container"
                    aria-label="Select Position"
                  />
                </Form.Group>
                <Button variant="success" onClick={handleBooking}>Book</Button>
              </Form>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingsPage;
