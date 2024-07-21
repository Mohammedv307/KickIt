import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import GamesPage from './GamesPage';
import BookingsPage from './BookingsPage';
import ReviewsPage from './ReviewsPage';
import SignUp from './SignUp';
import pitch1 from './images/pitch1.jpg';
import pitch2 from './images/pitch2.jpg';
import pitch3 from './images/pitch2.jpg';

const locations = [
    'Ra Centre',
    'Minto Sports Field',
    'Lees Field',
    'Immaculata Sports Field'
];

const gamesData = [
  { id: '#12345', dateTime: '2023-07-01 15:00', location: locations[0], details: `Men's 7v7`, spots: 10, level: 'Beginner', players: ['John Doe', 'Jane Smith'], image: pitch1 },
  { id: '#67890', dateTime: '2023-07-02 16:00', location: locations[1], details: `Women's 11v11`, spots: 8, level: 'Intermediate', players: ['Alice Brown', 'Bob Johnson'], image: pitch2 },
  { id: '#11121', dateTime: '2023-07-03 18:00', location: locations[2], details: `Mixed 7v7`, spots: 12, level: 'Advanced', players: ['Charlie Davis', 'Eve White'], image: pitch3 },
  { id: '#22232', dateTime: '2023-07-04 19:00', location: locations[3], details: `Men's 11v11`, spots: 6, level: 'Beginner', players: ['Frank Green', 'Grace Black'], image: pitch1 },
  { id: '#33343', dateTime: '2023-07-05 20:00', location: locations[0], details: `Women's 7v7`, spots: 9, level: 'Intermediate', players: ['Hannah Brown', 'Ian Yellow'], image: pitch2 },
  { id: '#44454', dateTime: '2023-07-06 21:00', location: locations[1], details: `Mixed 11v11`, spots: 7, level: 'Advanced', players: ['Jack Blue', 'Katie Red'], image: pitch3 },
];

const leaguesData = [
  { id: '#54321', dateTime: '2023-07-05 14:00', location: locations[0], details: `Men's 7v7`, spots: 6, level: 'Advanced' },
  { id: '#65432', dateTime: '2023-07-06 18:00', location: locations[1], details: `Women's 11v11`, spots: 8, level: 'Intermediate' },
  { id: '#76543', dateTime: '2023-07-07 20:00', location: locations[2], details: `Mixed 7v7`, spots: 10, level: 'Beginner' },
  { id: '#87654', dateTime: '2023-07-08 15:00', location: locations[3], details: `Men's 11v11`, spots: 12, level: 'Advanced' },
  { id: '#98765', dateTime: '2023-07-09 17:00', location: locations[0], details: `Women's 7v7`, spots: 7, level: 'Intermediate' },
  { id: '#09876', dateTime: '2023-07-10 19:00', location: locations[1], details: `Mixed 11v11`, spots: 9, level: 'Beginner' },
  { id: '#10987', dateTime: '2023-07-11 16:00', location: locations[2], details: `Men's 7v7`, spots: 8, level: 'Advanced' },
  { id: '#21098', dateTime: '2023-07-12 18:00', location: locations[3], details: `Women's 11v11`, spots: 6, level: 'Intermediate' },
];

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/games" element={<GamesPage gamesData={gamesData} leaguesData={leaguesData} />} />
                <Route path="/bookings" element={<BookingsPage gamesData={gamesData} leaguesData={leaguesData} />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/reviews" element={<ReviewsPage />} />
            </Routes>
        </Router>
    );
};

export default App;

