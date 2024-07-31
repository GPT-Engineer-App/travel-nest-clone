import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Menu, User } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-[#FF385C] font-bold text-3xl">
          <img src="/airbnb-logo.png" alt="Airbnb" className="h-8" />
        </Link>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" className="font-semibold">
            Airbnb your home
          </Button>
          <Button variant="ghost" size="icon">
            <Globe className="h-5 w-5" />
          </Button>
          <Button variant="outline" className="flex items-center space-x-2 rounded-full border-gray-300">
            <Menu className="h-5 w-5" />
            <User className="h-6 w-6 text-gray-500" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
