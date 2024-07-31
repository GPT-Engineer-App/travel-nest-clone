import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Globe, Menu, User, LogOut, Suitcase } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LoginModal from './LoginModal';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleLogout = () => {
    logout();
  };
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <Link to="/" className="flex items-center">
        <img src="/airbnb-logo.png" alt="Airbnb" className="h-8 w-auto" />
      </Link>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="font-semibold">Stays</Button>
        <Button variant="ghost" className="font-semibold">Experiences</Button>
      </div>
      <div className="flex-1 max-w-2xl mx-auto">
        <div className="flex items-center border rounded-full shadow-sm">
          <Input type="text" placeholder="Where" className="border-none rounded-l-full" />
          <div className="border-l h-8"></div>
          <Input type="text" placeholder="Check in" className="border-none" />
          <div className="border-l h-8"></div>
          <Input type="text" placeholder="Check out" className="border-none" />
          <div className="border-l h-8"></div>
          <Input type="text" placeholder="Who" className="border-none rounded-r-full" />
          <Button size="icon" variant="ghost" className="bg-[#FF385C] text-white rounded-full ml-2">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="font-semibold">Airbnb your home</Button>
        <Button variant="ghost" size="icon">
          <Globe className="h-5 w-5" />
        </Button>
        <Button variant="outline" className="flex items-center space-x-2 rounded-full">
          <Menu className="h-4 w-4" />
          <User className="h-4 w-4" />
        </Button>
        {isAuthenticated ? (
          <>
            <Link to="/my-trips">
              <Button variant="ghost" className="flex items-center space-x-2">
                <Suitcase className="h-4 w-4" />
                <span>My Trips</span>
              </Button>
            </Link>
            <Button variant="ghost" onClick={handleLogout} className="flex items-center space-x-2">
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </Button>
          </>
        ) : (
          <Button variant="ghost" onClick={handleLoginClick}>Login</Button>
        )}
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </header>
  );
};

export default Header;
