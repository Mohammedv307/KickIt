import React, { useState } from 'react';
import { Container, Button, Form, Card, Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import './Homepage.css';
import league1 from "./images/league1.jpg";
import league2 from "./images/league2.jpg";
import Questionnaire from './Questionnaire';
import Footer from './Footer';
import logo from './images/Logo.png';
import user from './images/user.png';

const translations = {
    en: {
        heroTitle: "Find a league or drop in game today !!",
        searchPlaceholder: "Enter a field near you...",
        searchButton: "Search",
        leagueCard1Title: "Join a league of your level today",
        leagueCard1Text: "Find More about our leagues here",
        leagueCard2Title: "Register your player profile",
        leagueCard2Text: "Register player",
        reviewsTitle: "Kickit Player Reviews",
        faqTitle: "Frequently Asked Questions",
        switchLanguageButton: "Français",
        reviews: [
            {
                id: 1,
                name: 'Alex Johnson',
                date: 'July 18, 2024',
                rating: 5,
                review: 'Kickit has completely changed the way I book games. It’s super easy to find and join drop-in games near me!',
            },
            {
                id: 2,
                name: 'Samantha Lee',
                date: 'July 17, 2024',
                rating: 4,
                review: 'Great platform for joining leagues! The only issue I had was a minor bug with the booking system, but support was quick to help.',
            },
            {
                id: 3,
                name: 'Michael Brown',
                date: 'July 16, 2024',
                rating: 5,
                review: 'I love how seamless the process is with Kickit. Found some great games and made new friends.',
            },
            {
                id: 4,
                name: 'Jessica Martinez',
                date: 'July 15, 2024',
                rating: 4,
                review: 'Fantastic app for soccer enthusiasts! Would love to see more leagues added in my area.',
            },
            {
                id: 5,
                name: 'David Smith',
                date: 'July 14, 2024',
                rating: 3,
                review: 'Good platform, but some of the game locations are too far for me. Wish there were more options closer to home.',
            },
        ],
        faqs: [
            {
                question: "Who will be officiating games",
                answer: "All games will be officiated by trained referees to ensure an enjoyable and safe match."
            },
            {
                question: "How can I determine what level I am",
                answer: "Please visit our homepage and find the determine your level tool which will help you determine what level correctly corresponds to you"
            },
            {
                question: "Can I cancel a booking?",
                answer: "No unfortunately you cannot cancel a booking, please ensure you can commit to a game when booking."
            },
            {
                question: "How can I contact support?",
                answer: "You can contact support by writing us an email. Our support team will get back to you as soon as possible."
            },
        ]
    },
    fr: {
        heroTitle: "Trouvez une ligue ou un jeu libre aujourd'hui !!",
        searchPlaceholder: "Entrez un terrain près de chez vous...",
        searchButton: "Chercher",
        leagueCard1Title: "Rejoignez une ligue de votre niveau aujourd'hui",
        leagueCard1Text: "En savoir plus sur nos ligues ici",
        leagueCard2Title: "Enregistrez votre profil de joueur",
        leagueCard2Text: "Enregistrer le joueur",
        reviewsTitle: "Avis des joueurs de Kickit",
        faqTitle: "Questions fréquemment posées",
        switchLanguageButton: "Anglais",
        reviews: [
            {
                id: 1,
                name: 'Alex Johnson',
                date: '18 juillet 2024',
                rating: 5,
                review: 'Kickit a complètement changé la façon dont je réserve des jeux. C\'est super facile de trouver et de rejoindre des jeux libres près de chez moi!',
            },
            {
                id: 2,
                name: 'Samantha Lee',
                date: '17 juillet 2024',
                rating: 4,
                review: "Super plateforme pour rejoindre des ligues! Le seul problème que j'ai eu était un bug mineur avec le système de réservation, mais le support a été rapide à aider.",
            },
            {
                id: 3,
                name: 'Michael Brown',
                date: '16 juillet 2024',
                rating: 5,
                review: 'J\'adore la fluidité du processus avec Kickit. J\'ai trouvé des jeux formidables et me suis fait de nouveaux amis.',
            },
            {
                id: 4,
                name: 'Jessica Martinez',
                date: '15 juillet 2024',
                rating: 4,
                review: 'Application fantastique pour les amateurs de football! J\'aimerais voir plus de ligues ajoutées dans ma région.',
            },
            {
                id: 5,
                name: 'David Smith',
                date: '14 juillet 2024',
                rating: 3,
                review: 'Bonne plateforme, mais certains lieux de jeu sont trop loin pour moi. J\'aimerais avoir plus d\'options plus proches de chez moi.',
            },
        ],
        faqs: [
            {
                question: "Qui arbitrera les jeux",
                answer: "Tous les jeux seront arbitrés par des arbitres formés pour garantir un match agréable et sûr."
            },
            {
                question: "Comment puis-je déterminer mon niveau",
                answer: "Veuillez visiter notre page d'accueil et trouver l'outil de détermination de votre niveau qui vous aidera à déterminer le niveau qui vous correspond correctement"
            },
            {
                question: "Puis-je annuler une réservation?",
                answer: "Non, malheureusement, vous ne pouvez pas annuler une réservation, veuillez vous assurer que vous pouvez vous engager dans un jeu lors de la réservation."
            },
            {
                question: "Comment puis-je contacter le support?",
                answer: "Vous pouvez contacter le support en nous envoyant un e-mail. Notre équipe de support vous répondra dès que possible."
            },
        ]
    }
};

const locations = [
    { value: 'Ra Centre', label: 'Ra Centre' },
    { value: 'Minto Sports Field', label: 'Minto Sports Field' },
    { value: 'Lees Field', label: 'Lees Field' },
    { value: 'Immaculata Sports Field', label: 'Immaculata Sports Field' }
];

const customStyles = {
    control: (base) => ({
        ...base,
        borderRadius: '5px',
        padding: '10px',
        fontSize: '1em',
        border: '1px solid #ddd',
        marginBottom: '15px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        '&:hover': {
            borderColor: '#AE1111'
        }
    }),
    menu: (base) => ({
        ...base,
        backgroundColor: 'rgba(255, 255, 255, 0.9)'
    }),
    option: (base, { isSelected, isFocused }) => ({
        ...base,
        color: isSelected ? '#fff' : '#000',
        backgroundColor: isSelected ? '#AE1111' : isFocused ? '#f1f1f1' : null,
        padding: '10px'
    }),
    singleValue: (base) => ({
        ...base,
        color: '#000'
    })
};

const Homepage = () => {
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [language, setLanguage] = useState('en');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (selectedLocation) {
            navigate(`/games?location=${encodeURIComponent(selectedLocation.value)}`);
        } else {
            alert("Please select a valid location.");
        }
    };

    const t = translations[language];

    return (
        <div className="homepage">
            <header className="header">
                <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                    <Container className="header-container">
                        <Navbar.Brand as={Link} to="/" className="logo-container">
                            <img src={logo} width="100" height="100" alt="KickIt Logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                            <Nav className="nav-links">
                                <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
                                <Nav.Link as={Link} to="/games" className="nav-link-custom">Games</Nav.Link>
                                <Nav.Link as={Link} to="/bookings" className="nav-link-custom">Book</Nav.Link>
                                <Nav.Link as={Link} to="/signup" className="nav-link-custom active">Sign Up</Nav.Link>
                                <Nav.Link as={Link} to="/reviews" className="nav-link-custom">Reviews</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Button variant="outline-light" className="language-switcher-button" onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}>
                            {t.switchLanguageButton}
                        </Button>
                        <div className="user-container">
                            <Link to="/signup">
                                <img src={user} width="80" height="80" alt="User" className="user-icon" />
                            </Link>
                        </div>
                    </Container>
                </Navbar>
            </header>

            <section className="hero">
                <div className="hero-bg"></div>
                <Container className="text-center hero-text">
                    <h1>{t.heroTitle}</h1>
                    <Form className="search-bar" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
                        <Select
                            value={selectedLocation}
                            onChange={setSelectedLocation}
                            options={locations}
                            placeholder={t.searchPlaceholder}
                            className="select-container"
                            classNamePrefix="select"
                            styles={customStyles}
                        />
                        <Button variant="outline-primary" onClick={handleSearch}>{t.searchButton}</Button>
                    </Form>
                </Container>
            </section>

            <Container className="league-cards my-5">
                <div className="cards-container">
                    <Card className="league-card">
                        <Card.Img variant="top" src={league1} />
                        <Card.Body>
                            <Card.Title>{t.leagueCard1Title}</Card.Title>
                            <Card.Text>
                                <Link to="/games">{t.leagueCard1Text}</Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="league-card">
                        <Card.Img variant="top" src={league2} />
                        <Card.Body>
                            <Card.Title>{t.leagueCard2Title}</Card.Title>
                            <Card.Text>
                                <Link to="/signup">{t.leagueCard2Text}</Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Container>

            <Container className="questionnaire-section my-5">
                <Questionnaire />
            </Container>

            <Container className="reviews-section my-5">
                <h2 className="reviews-title">{t.reviewsTitle}</h2>
                <div className="reviews-container">
                    {t.reviews.map((review) => (
                        <div key={review.id} className="review-card">
                            <div className="review-header">
                                <h2 className="review-name">{review.name}</h2>
                                <span className="review-date">{review.date}</span>
                            </div>
                            <div className="review-body">
                                <div className="review-rating">
                                    {'⭐'.repeat(review.rating)}
                                </div>
                                <p className="review-text">{review.review}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>

            <Container className="faq-section my-5">
                <h2 className="faq-title">{t.faqTitle}</h2>
                <div className="faqs-container">
                    {t.faqs.map((faq, index) => (
                        <div key={index} className="faq-card">
                            <h3 className="faq-question">{faq.question}</h3>
                            <p className="faq-answer">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </Container>

            <Footer />
        </div>
    );
};

export default Homepage;
