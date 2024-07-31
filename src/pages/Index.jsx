import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Search, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const fetchCategories = async () => {
  // Simulating API call
  return [
    { id: 1, name: 'Beach', icon: '🏖️' },
    { id: 2, name: 'Amazing pools', icon: '🏊' },
    { id: 3, name: 'Cabins', icon: '🏡' },
    { id: 4, name: 'Treehouses', icon: '🌳' },
    { id: 5, name: 'Tropical', icon: '🌴' },
    { id: 6, name: 'Amazing views', icon: '🏞️' },
    { id: 7, name: 'OMG!', icon: '😲' },
    { id: 8, name: 'Castles', icon: '🏰' },
    { id: 9, name: 'Countryside', icon: '🌾' },
    { id: 10, name: 'Tiny homes', icon: '🏠' },
  ];
};

const fetchExperiences = async () => {
  // Simulating API call
  return [
    { id: 1, title: 'Train at the X-Mansion', host: 'Jubilee', price: '€36 per guest', image: '/placeholder.svg', status: 'Live' },
    { id: 2, title: 'Go VIP with Kevin Hart', host: 'Kevin Hart', date: 'Coming August 21', image: '/placeholder.svg' },
    { id: 3, title: 'Join a living room session with Doja', host: 'Doja Cat', date: 'Coming October', image: '/placeholder.svg' },
    { id: 4, title: "Stay in Prince's Purple Rain house", host: 'Wendy and Lisa', date: 'Coming October', image: '/placeholder.svg' },
    { id: 5, title: 'Live like Bollywood star Janhvi Kapoor', host: 'Janhvi Kapoor', status: 'Sold out', image: '/placeholder.svg' },
  ];
};

const Index = () => {
  const { data: categories } = useQuery({ queryKey: ['categories'], queryFn: fetchCategories });
  const { data: experiences } = useQuery({ queryKey: ['experiences'], queryFn: fetchExperiences });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-center space-x-4 p-2 border rounded-full shadow-sm">
          <Button variant="ghost" className="font-semibold">Anywhere</Button>
          <div className="h-6 w-px bg-gray-300"></div>
          <Button variant="ghost" className="font-semibold">Any week</Button>
          <div className="h-6 w-px bg-gray-300"></div>
          <Button variant="ghost" className="font-semibold text-gray-500">Add guests</Button>
          <Button size="icon" className="bg-[#FF385C] text-white rounded-full">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex space-x-8 overflow-x-auto pb-4 mb-8">
        {categories?.map((category) => (
          <div key={category.id} className="flex flex-col items-center space-y-2">
            <div className="text-2xl">{category.icon}</div>
            <span className="text-xs">{category.name}</span>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">New this week</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences?.map((experience) => (
          <div key={experience.id} className="relative rounded-xl overflow-hidden">
            <img src={experience.image} alt={experience.title} className="w-full h-64 object-cover" />
            <div className="absolute top-2 left-2 bg-white text-black px-2 py-1 rounded-full text-xs font-semibold">
              {experience.status || experience.date}
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
              <h3 className="font-semibold">{experience.title}</h3>
              <p className="text-sm">Hosted by {experience.host}</p>
              {experience.price && <p className="text-sm">{experience.price}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
