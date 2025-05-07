
import React, { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DoctorCard from "@/components/DoctorCard";

// Sample doctors data
const doctorsData = [
  {
    id: "dr-luna",
    name: "Dr. Luna Patel",
    specialty: "Neurology",
    imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    experience: 10
  },
  {
    id: "dr-james",
    name: "Dr. James Wilson",
    specialty: "Cardiology",
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    experience: 15
  },
  {
    id: "dr-sophia",
    name: "Dr. Sophia Chen",
    specialty: "Pediatrics",
    imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    experience: 8
  },
  {
    id: "dr-michael",
    name: "Dr. Michael Johnson",
    specialty: "Orthopedics",
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    experience: 12
  },
  {
    id: "dr-amara",
    name: "Dr. Amara Washington",
    specialty: "Dermatology",
    imageUrl: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    experience: 9
  },
  {
    id: "dr-david",
    name: "Dr. David Kim",
    specialty: "Oncology",
    imageUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    experience: 14
  },
  {
    id: "dr-elena",
    name: "Dr. Elena Rodriguez",
    specialty: "Gastroenterology",
    imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    experience: 11
  },
  {
    id: "dr-robert",
    name: "Dr. Robert Lee",
    specialty: "Ophthalmology",
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    experience: 7
  }
];

// List of specialties for filter
const specialties = [
  "All Specialties",
  "Neurology",
  "Cardiology",
  "Pediatrics",
  "Orthopedics",
  "Dermatology",
  "Oncology",
  "Gastroenterology",
  "Ophthalmology"
];

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");
  
  // Filter doctors based on search term and specialty
  const filteredDoctors = doctorsData.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === "All Specialties" || doctor.specialty === selectedSpecialty;
    
    return matchesSearch && matchesSpecialty;
  });

  return (
    <>
      <Navbar />
      
      {/* Header */}
      <div className="bg-gradient-moonrise text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Meet Our Doctors
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              Our team of experienced and dedicated physicians is committed to providing exceptional care for all your healthcare needs.
            </p>
          </div>
        </div>
      </div>
      
      {/* Search and Filter */}
      <div className="bg-white py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search doctors..."
                className="pl-10 bg-gray-50 border-gray-300"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Filter by specialty:</span>
              <select
                className="border border-gray-300 rounded-md bg-gray-50 py-2 pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-moon-purple focus:border-moon-purple"
                value={selectedSpecialty}
                onChange={e => setSelectedSpecialty(e.target.value)}
              >
                {specialties.map(specialty => (
                  <option key={specialty} value={specialty}>{specialty}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {/* Doctors Grid */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDoctors.map(doctor => (
                <DoctorCard
                  key={doctor.id}
                  id={doctor.id}
                  name={doctor.name}
                  specialty={doctor.specialty}
                  imageUrl={doctor.imageUrl}
                  experience={doctor.experience}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No doctors found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Join Our Team */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Join Our Medical Team</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              We're always looking for talented and passionate healthcare professionals to join our team.
            </p>
            <div className="mt-8">
              <Button className="bg-moon-purple hover:bg-mauve-deep">View Career Opportunities</Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Expert Care */}
      <div className="bg-gradient-to-r from-moon-purple to-midnight-purple text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold">Expert Care You Can Trust</h2>
              <p className="mt-4 text-lg text-gray-200">
                All our physicians are board-certified and committed to providing the highest quality care. With years of experience and specialized training, our doctors ensure you receive the best treatment for your health needs.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-nebula-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">Board-certified specialists</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-nebula-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">Ongoing professional education</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-nebula-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">Patient-centered approach</span>
                </li>
              </ul>
            </div>
            
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed28aaf57?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" 
                alt="Medical Team" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Doctors;
