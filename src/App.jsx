import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import MyTrips from './pages/MyTrips';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/my-trips" element={<MyTrips />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
