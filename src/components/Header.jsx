import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, Globe, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="flex items-center justify-between p-4 border-b">
      <Link to="/" className="flex items-center">
        <img src="/airbnb-logo.png" alt="Airbnb" className="h-8 w-auto" />
      </Link>
      <div className="flex items-center border rounded-full p-2 shadow-sm">
        <Input
          type="text"
          placeholder="Start your search"
          className="border-none focus:ring-0"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button size="icon" variant="ghost" className="bg-red-500 text-white rounded-full">
          <Search className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost">Airbnb your home</Button>
        <Button variant="ghost" size="icon">
          <Globe className="h-5 w-5" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center space-x-2">
              <Menu className="h-4 w-4" />
              <User className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {isAuthenticated ? (
              <>
                <DropdownMenuItem>
                  <Link to="/my-trips">My Trips</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
              </>
            ) : (
              <DropdownMenuItem>
                <Link to="/login">Log in</Link>
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
