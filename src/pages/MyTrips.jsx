import React from 'react';
import Header from '../components/Header';

const MyTrips = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">My Trips</h1>
        <p>This is a placeholder for the My Trips page. Content will be added later.</p>
      </main>
    </div>
  );
};

export default MyTrips;
