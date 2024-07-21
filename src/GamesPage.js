import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './GamesPage.css';
import Header from './Header';
import Footer from './Footer';
import photo1 from './images/Games4.jpg';
import photo2 from './images/Games2.jpg';
import photo3 from './images/Games3.jpg';
import pitch1 from './images/pitch1.jpg';
import pitch2 from './images/pitch2.jpg';
import pitch3 from './images/pitch2.jpg';

const slides = [photo1, photo2, photo3];
const locations = [
    'Ra Centre',
    'Minto Sports Field',
    'Lees Field',
    'Immaculata Sports Field'
];

const gamesData = [
    { id: '#12345', dateTime: '2023-07-01 15:00', location: locations[0], details: `Men's 7v7 Match Id: #12345`, spots: 10, level: 'Beginner', players: ['John Doe', 'Jane Smith'], image: pitch1 },
    { id: '#67890', dateTime: '2023-07-02 16:00', location: locations[1], details: `Women's 11v11 Match Id: #67890`, spots: 8, level: 'Intermediate', players: ['Alice Brown', 'Bob Johnson'], image: pitch2 },
    { id: '#11121', dateTime: '2023-07-03 18:00', location: locations[2], details: `Mixed 7v7 Match Id: #11121`, spots: 12, level: 'Advanced', players: ['Charlie Davis', 'Eve White'], image: pitch3 },
    { id: '#22232', dateTime: '2023-07-04 19:00', location: locations[3], details: `Men's 11v11 Match Id: #22232`, spots: 6, level: 'Beginner', players: ['Frank Green', 'Grace Black'], image: pitch1 },
    { id: '#33343', dateTime: '2023-07-05 20:00', location: locations[0], details: `Women's 7v7 Match Id: #33343`, spots: 9, level: 'Intermediate', players: ['Hannah Brown', 'Ian Yellow'], image: pitch2 },
    { id: '#44454', dateTime: '2023-07-06 21:00', location: locations[1], details: `Mixed 11v11 Match Id: #44454`, spots: 7, level: 'Advanced', players: ['Jack Blue', 'Katie Red'], image: pitch3 },
];

const leaguesData = [
    { id: '#54321', dateTime: '2023-07-05 14:00', location: locations[0], details: `Men's 7v7 League Id: #54321`, spots: 6, level: 'Advanced' },
    { id: '#65432', dateTime: '2023-07-06 18:00', location: locations[1], details: `Women's 11v1 League Id: #65432`, spots: 8, level: 'Intermediate' },
    { id: '#76543', dateTime: '2023-07-07 20:00', location: locations[2], details: `Mixed 7v7 League Id: #76543`, spots: 10, level: 'Beginner' },
    { id: '#87654', dateTime: '2023-07-08 15:00', location: locations[3], details: `Men's 11v11 League Id: #87654`, spots: 12, level: 'Advanced' },
    { id: '#98765', dateTime: '2023-07-09 17:00', location: locations[0], details: `Women's 7v7 League Id: #98765`, spots: 7, level: 'Intermediate' },
    { id: '#09876', dateTime: '2023-07-10 19:00', location: locations[1], details: `Mixed 11v11 League Id: #09876`, spots: 9, level: 'Beginner' },
    { id: '#10987', dateTime: '2023-07-11 16:00', location: locations[2], details: `Men's 7v7 League Id: #10987`, spots: 8, level: 'Advanced' },
    { id: '#21098', dateTime: '2023-07-12 18:00', location: locations[3], details: `Women's 11v11 League Id: #21098`, spots: 6, level: 'Intermediate' },
];

function GamesPage() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const filterLocation = queryParams.get('location') || 'All';

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentSlide((prevSlide) =>
                prevSlide === slides.length - 1 ? 0 : prevSlide + 1
            );
        }, 5000); 

        return () => clearTimeout(timer);
    }, [currentSlide, slides.length]);

    return (
        <div className="gamespage">
            <Header />
            <div className="page-header">
                <h1>Join Games & Leagues</h1>
            </div>
            <div className="slider">
                <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
                <div className="slider-nav">
                    {slides.map((_, idx) => (
                        <div
                            key={idx}
                            className={`nav-dot ${idx === currentSlide ? 'active' : ''}`}
                        ></div>
                    ))}
                </div>
            </div>
            <GamesTable initialFilterLocation={filterLocation} />
            <LeaguesTable initialFilterLocation={filterLocation} />
            <Footer />
        </div>
    );
}

function GamesTable({ initialFilterLocation }) {
    const [filterLocation, setFilterLocation] = useState(initialFilterLocation);
    const [filterGender, setFilterGender] = useState('All');

    const handleFilterChangeLocation = (e) => {
        setFilterLocation(e.target.value);
    };

    const handleFilterChangeGender = (e) => {
        setFilterGender(e.target.value);
    };

    const filteredGames = gamesData.filter(game => {
        const locationMatch = filterLocation === 'All' || game.location === filterLocation;
        const genderMatch = filterGender === 'All' || game.details.includes(filterGender);
        return locationMatch && genderMatch;
    });

    return (
        <div className="dropInGames">
            <div className="gamesHeader">
                <h2 style={{ color: 'red', textAlign: 'center' }}>Drop In Games</h2>
                <div className="filters" style={{ textAlign: 'left', padding: '0 15px' }}>
                    <select value={filterLocation} onChange={handleFilterChangeLocation}>
                        <option value="All">All Locations</option>
                        <option value="Ra Centre">Ra Centre</option>
                        <option value="Minto Sports Field">Minto Sports Field</option>
                        <option value="Lees Field">Lees Field</option>
                        <option value="Immaculata Sports Field">Immaculata Sports Field</option>
                    </select>
                    <select value={filterGender} onChange={handleFilterChangeGender}>
                        <option value="All">All Genders</option>
                        <option value="Men's">Men's</option>
                        <option value="Women's">Women's</option>
                        <option value="Mixed">Mixed</option>
                    </select>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Date/Time</th>
                        <th>Location</th>
                        <th>Details</th>
                        <th>Spots</th>
                        <th>Level</th>
                        <th>Players</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredGames.map((game, index) => (
                        <tr key={index}>
                            <td>{game.dateTime}</td>
                            <td>
                                {game.location}
                                <img src={game.image} alt={`Location of ${game.location}`} width="100" height="100" style={{ display: 'block', marginTop: '10px' }} />
                            </td>
                            <td>{game.details}</td>
                            <td>{game.spots}</td>
                            <td>{game.level}</td>
                            <td>{game.players.join(', ')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function LeaguesTable({ initialFilterLocation }) {
    const [filterLocation, setFilterLocation] = useState(initialFilterLocation);
    const [filterGender, setFilterGender] = useState('All');

    const handleFilterChangeLocation = (e) => {
        setFilterLocation(e.target.value);
    };

    const handleFilterChangeGender = (e) => {
        setFilterGender(e.target.value);
    };

    const filteredLeagues = leaguesData.filter(league => {
        const locationMatch = filterLocation === 'All' || league.location === filterLocation;
        const genderMatch = filterGender === 'All' || league.details.includes(filterGender);
        return locationMatch && genderMatch;
    });

    return (
        <div className="leagues">
            <div className="leaguesHeader">
                <h2 style={{ color: 'red', textAlign: 'center' }}>Leagues</h2>
                <div className="filters" style={{ textAlign: 'left', padding: '0 15px' }}>
                    <select value={filterLocation} onChange={handleFilterChangeLocation}>
                        <option value="All">All Locations</option>
                        <option value="Ra Centre">Ra Centre</option>
                        <option value="Minto Sports Field">Minto Sports Field</option>
                        <option value="Lees Field">Lees Field</option>
                        <option value="Immaculata Sports Field">Immaculata Sports Field</option>
                    </select>
                    <select value={filterGender} onChange={handleFilterChangeGender}>
                        <option value="All">All Genders</option>
                        <option value="Men's">Men's</option>
                        <option value="Women's">Women's</option>
                        <option value="Mixed">Mixed</option>
                    </select>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Date/Time</th>
                        <th>Location</th>
                        <th>Details</th>
                        <th>Spots</th>
                        <th>Level</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredLeagues.map((league, index) => (
                        <tr key={index}>
                            <td>{league.dateTime}</td>
                            <td>{league.location}</td>
                            <td>{league.details}</td>
                            <td>{league.spots}</td>
                            <td>{league.level}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default GamesPage;
