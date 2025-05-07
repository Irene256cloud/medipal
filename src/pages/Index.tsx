
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarPlus, ChevronRight, Search, PhoneCall } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DepartmentCard from "@/components/DepartmentCard";

// Demo departments data
const departments = [
  {
    id: "cardiology",
    name: "Cardiology",
    description: "Specialized care for heart conditions and cardiovascular health.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
  },
  {
    id: "neurology",
    name: "Neurology",
    description: "Expert diagnosis and treatment of nervous system disorders.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" /></svg>
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    description: "Comprehensive care for musculoskeletal system and injuries.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    description: "Specialized healthcare services for infants, children and adolescents.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292V15a3 3 0 01-3 3H9a3 3 0 01-3-3v-2.5a4 4 0 110-5.292V4.5a3 3 0 013-3h12a3 3 0 013 3V8.5a4 4 0 110 5.292V15a3 3 0 01-3 3H9" /></svg>
  }
];

const Index = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-moonrise text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Discover Care with Medipal
              </h1>
              <p className="text-xl md:text-2xl text-gray-200">
                Your trusted partner for innovative healthcare solutions and exceptional patient care.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-moonlight-pink hover:bg-mauve-deep text-midnight-purple" asChild>
                  <Link to="/appointments">
                    <CalendarPlus className="h-5 w-5 mr-2" />
                    Book Appointment
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <Link to="/departments">
                    Learn More
                    <ChevronRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9nZ3klMjBtb3VudGFpbnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" 
                alt="Medipal Healthcare" 
                className="rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Services */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-xl text-gray-600">
              Comprehensive healthcare services tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept) => (
              <DepartmentCard
                key={dept.id}
                id={dept.id}
                name={dept.name}
                description={dept.description}
                icon={dept.icon}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" className="border-moon-purple text-moon-purple hover:bg-moon-purple/10" asChild>
              <Link to="/departments">
                View All Departments
                <ChevronRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Call to Action - Appointment */}
      <div className="bg-gradient-to-r from-moon-purple to-midnight-purple text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Need to see a doctor?</h2>
            <p className="mt-4 text-xl text-gray-100">
              Book an appointment online and skip the waiting room
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-moonlight-pink hover:bg-mauve-deep text-midnight-purple" asChild>
                <Link to="/appointments">
                  <CalendarPlus className="h-5 w-5 mr-2" />
                  Schedule Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Why Choose Us */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Medipal</h2>
            <p className="mt-4 text-xl text-gray-600">
              We're committed to providing exceptional healthcare with a patient-centered approach
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-moon-purple/10 flex items-center justify-center text-moon-purple mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Technology</h3>
              <p className="text-gray-600">
                State-of-the-art facilities and cutting-edge medical equipment for accurate diagnosis and treatment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-moon-purple/10 flex items-center justify-center text-moon-purple mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Expert Specialists</h3>
              <p className="text-gray-600">
                Board-certified physicians and healthcare professionals with extensive experience in their fields.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-moon-purple/10 flex items-center justify-center text-moon-purple mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">24/7 Care</h3>
              <p className="text-gray-600">
                Round-the-clock emergency services and patient support whenever you need us.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Quick Links */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Need Help?</h2>
              <p className="mt-4 text-xl text-gray-600">
                Our team is here to assist you with any questions or concerns.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <PhoneCall className="h-6 w-6 text-moon-purple" />
                  </div>
                  <div className="ml-4 text-gray-600">
                    <p className="text-lg">Call our helpline</p>
                    <p className="text-xl font-semibold">(123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Search className="h-6 w-6 text-moon-purple" />
                  </div>
                  <div className="ml-4 text-gray-600">
                    <p className="text-lg">Find a department or doctor</p>
                    <div className="mt-2">
                      <Button variant="outline" className="text-moon-purple border-moon-purple hover:bg-moon-purple/10" asChild>
                        <Link to="/doctors">
                          Find a Doctor
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-inner">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Emergency Contact</h3>
              <p className="text-gray-600 mb-6">
                For medical emergencies, please call our 24/7 emergency line immediately.
              </p>
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">
                      Emergency Hotline: <span className="font-medium">(123) 999-9999</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Emergency Instructions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Index;
