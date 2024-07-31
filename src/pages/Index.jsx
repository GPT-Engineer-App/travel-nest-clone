import React from 'react';
import Header from '../components/Header';
import { Button } from "@/components/ui/button";

const CategoryButton = ({ icon, label }) => (
  <Button variant="ghost" className="flex flex-col items-center p-2">
    {icon}
    <span className="mt-1 text-xs">{label}</span>
  </Button>
);

const ExperienceCard = ({ image, title, host, price, date }) => (
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
    <div className="rounded-lg overflow-hidden shadow-md">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm text-gray-600">Hosted by {host}</p>
        <p className="mt-2">From ${price} / person</p>
        <p className="text-sm text-gray-600">{date}</p>
      </div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex overflow-x-auto space-x-4 mb-8">
          <CategoryButton icon={<span>💰</span>} label="Icons" />
          <CategoryButton icon={<span>🏖️</span>} label="Beach" />
          <CategoryButton icon={<span>🏊</span>} label="Amazing pools" />
          <CategoryButton icon={<span>🏡</span>} label="Cabins" />
          <CategoryButton icon={<span>🌳</span>} label="Treehouses" />
          <CategoryButton icon={<span>🏝️</span>} label="Tropical" />
          {/* Add more category buttons as needed */}
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Experiences</h2>
        <div className="flex flex-wrap -mx-2">
          <ExperienceCard
            image="/placeholder.svg"
            title="Train at the X-Mansion"
            host="Jubilee"
            price={36}
            date="Coming August 21"
          />
          <ExperienceCard
            image="/placeholder.svg"
            title="Go VIP with Kevin Hart"
            host="Kevin Hart"
            price={0}
            date="Coming August 21"
          />
          <ExperienceCard
            image="/placeholder.svg"
            title="Join a living room session with Doja"
            host="Doja Cat"
            price={0}
            date="Coming October"
          />
          <ExperienceCard
            image="/placeholder.svg"
            title="Stay in Prince's Purple Rain house"
            host="Wendy and Lisa"
            price={0}
            date="Coming October"
          />
          <ExperienceCard
            image="/placeholder.svg"
            title="Live like Bollywood star Janhvi Kapoor"
            host="Janhvi Kapoor"
            price={0}
            date="Sold out"
          />
        </div>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">Past experiences</h2>
        <div className="flex flex-wrap -mx-2">
          {/* Add past experience cards here, similar to the Experiences section */}
        </div>
      </main>
    </div>
  );
};

export default Index;
