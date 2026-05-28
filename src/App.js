import './App.css';
import emilyLotCard from './assets/emily-lot-card.jpg';
import emilyLotDetails from './assets/emily-lot-details.jpg';
import itemCapture from './assets/item-capture.png';
import saveItem from './assets/save-item.jpg';
import soldImage from './assets/sold-image.jpg';
import updatedLotDetail from './assets/updated-lot-detail.jpg';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Results / Contact', href: '#results-contact' },
];

const heroScreenshots = [
  { src: emilyLotDetails, alt: 'Ruby Baby Vintage lot detail screen', position: 'back-left' },
  { src: itemCapture, alt: 'Ruby Baby Vintage item capture screen', position: 'back-right' },
  { src: emilyLotCard, alt: 'Ruby Baby Vintage app home lot card', position: 'front' },
];

const caseStudySections = [
  {
    id: 'workflow',
    eyebrow: 'Workflow',
    heading: 'From lot intake to item capture',
    description:
      'Ruby Baby Vintage needed a simple way to organize consignor lots, add item photos, and keep each piece connected to the right person and payout.',
    images: [
      { src: emilyLotCard, alt: 'Emily lot card' },
      { src: emilyLotDetails, alt: 'Emily lot details' },
      { src: itemCapture, alt: 'Item capture' },
    ],
  },
  {
    id: 'results-contact',
    eyebrow: 'Results / Contact',
    heading: 'Sales, payouts, and updated lot details',
    description:
      'Once items sell, the app updates the lot record so revenue, consignor share, and remaining inventory stay easy to understand at a glance.',
    images: [
      { src: saveItem, alt: 'Item save' },
      { src: soldImage, alt: 'Sold image' },
      { src: updatedLotDetail, alt: 'Updated lot detail' },
    ],
  },
];

function Navigation() {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#home">
          Ruby Portfolio Web
        </a>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function HeroStack() {
  return (
    <div className="hero-stack" aria-label="Ruby Baby Vintage app screenshot previews">
      {heroScreenshots.map((image) => (
        <figure className={`hero-card hero-card-${image.position}`} key={image.alt}>
          <img src={image.src} alt={image.alt} />
        </figure>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-copy">
          <p className="section-eyebrow">RUBY BABY VINTAGE</p>
          <h1>Consignment lot tracking, without the spreadsheet mess.</h1>
          <p className="hero-tagline">
            A lightweight app workflow for capturing lots, saving items, tracking sales,
            and keeping consignor payouts clear from intake to sold.
          </p>
          <a className="hero-link" href="#workflow">
            View Workflow
          </a>
        </div>
        <HeroStack />
      </div>
    </section>
  );
}

function ImageCard({ image }) {
  return (
    <figure className="image-card">
      <img src={image.src} alt={image.alt} />
    </figure>
  );
}

function CaseStudySection({ section }) {
  return (
    <section className="content-section" id={section.id}>
      <div className="section-copy">
        <p className="section-eyebrow">{section.eyebrow}</p>
        <h2>{section.heading}</h2>
        <p>{section.description}</p>
      </div>
      <div className="image-grid" aria-label={`${section.heading} screenshots`}>
        {section.images.map((image) => (
          <ImageCard key={image.alt} image={image} />
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="app">
      <Navigation />
      <main>
        <Hero />
        {caseStudySections.map((section) => (
          <CaseStudySection key={section.id} section={section} />
        ))}
      </main>
    </div>
  );
}

export default App;
