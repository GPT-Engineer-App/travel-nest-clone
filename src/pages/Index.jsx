import React, { useState } from 'react';
import Header from '../components/Header';
import LoginModal from '../components/LoginModal';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to Airbnb</h1>
        <p className="mb-4">Find your next stay</p>
        <Button onClick={() => setIsLoginModalOpen(true)}>Open Login Modal</Button>
      </main>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </div>
  );
};

export default Index;
