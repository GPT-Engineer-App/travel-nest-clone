import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const TripCard = ({ image, location, host, date }) => (
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
    <div className="rounded-lg overflow-hidden shadow-md">
      <img src={image} alt={location} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold">{location}</h3>
        <p className="text-sm text-gray-600">Hosted by {host}</p>
        <p className="text-sm text-gray-600">{date}</p>
      </div>
    </div>
  </div>
);

const MyTrips = () => {
  const pastTrips = [
    { image: "/placeholder.svg", location: "Marinje Zemlje", host: "Alma", date: "May 23-26, 2018" },
    { image: "/placeholder.svg", location: "Plovdiv", host: "Stefaniya", date: "Sep 19-21, 2017" },
    { image: "/placeholder.svg", location: "Zürich", host: "Christian", date: "Sep 3-9, 2017" },
    { image: "/placeholder.svg", location: "Thessaloniki", host: "Alexandra", date: "Jan 22-25, 2017" },
    { image: "/placeholder.svg", location: "Wembley", host: "Bemi", date: "Oct 14-19, 2016" },
    { image: "/placeholder.svg", location: "Sarajevo", host: "Dario Darije", date: "May 11-15, 2016" },
  ];

  const canceledTrips = [
    { image: "/placeholder.svg", location: "Jakovici", host: "Ivana", date: "Sep 28 - Oct 1, 2022" },
    { image: "/placeholder.svg", location: "Kyiv", host: "Apaoa", date: "Mar 7-9, 2022" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Where you've been</h1>
        <div className="flex flex-wrap -mx-2 mb-12">
          {pastTrips.map((trip, index) => (
            <TripCard key={index} {...trip} />
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4">Canceled trips</h2>
        <div className="flex flex-wrap -mx-2 mb-8">
          {canceledTrips.map((trip, index) => (
            <TripCard key={index} {...trip} />
          ))}
        </div>

        <p className="text-sm text-gray-600 mb-12">
          Can't find your reservation here? <Link to="#" className="text-[#FF385C] underline">Visit the Help Center</Link>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="font-bold mb-2">Support</h3>
            <ul className="space-y-2">
              <li><Link to="#">Help Center</Link></li>
              <li><Link to="#">AirCover</Link></li>
              <li><Link to="#">Anti-discrimination</Link></li>
              <li><Link to="#">Disability support</Link></li>
              <li><Link to="#">Cancellation options</Link></li>
              <li><Link to="#">Report neighborhood concern</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Hosting</h3>
            <ul className="space-y-2">
              <li><Link to="#">Airbnb your home</Link></li>
              <li><Link to="#">AirCover for Hosts</Link></li>
              <li><Link to="#">Hosting resources</Link></li>
              <li><Link to="#">Community forum</Link></li>
              <li><Link to="#">Hosting responsibly</Link></li>
              <li><Link to="#">Airbnb-friendly apartments</Link></li>
              <li><Link to="#">Join a free Hosting class</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Airbnb</h3>
            <ul className="space-y-2">
              <li><Link to="#">Newsroom</Link></li>
              <li><Link to="#">New features</Link></li>
              <li><Link to="#">Careers</Link></li>
              <li><Link to="#">Investors</Link></li>
              <li><Link to="#">Gift cards</Link></li>
              <li><Link to="#">Airbnb.org emergency stays</Link></li>
            </ul>
          </div>
        </div>
      </main>
      <footer className="border-t py-4 px-4 mt-12">
        <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex space-x-4">
            <span>© 2024 Airbnb, Inc.</span>
            <Link to="#">Terms</Link>
            <Link to="#">Sitemap</Link>
            <Link to="#">Privacy</Link>
            <Link to="#">Your Privacy Choices</Link>
          </div>
          <div className="flex space-x-4 items-center">
            <Link to="#">English (US)</Link>
            <Link to="#">$ USD</Link>
            <Link to="#" className="text-2xl">f</Link>
            <Link to="#" className="text-2xl">t</Link>
            <Link to="#" className="text-2xl">i</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MyTrips;
