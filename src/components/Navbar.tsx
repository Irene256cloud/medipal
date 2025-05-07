
import React from "react";
import { Link } from "react-router-dom";
import MedipalLogo from "./MedipalLogo";
import { Button } from "@/components/ui/button";
import { CalendarPlus, User } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <MedipalLogo size="md" />
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className="border-transparent text-gray-500 hover:border-moon-purple hover:text-moon-purple px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/departments"
                className="border-transparent text-gray-500 hover:border-moon-purple hover:text-moon-purple px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Departments
              </Link>
              <Link
                to="/doctors"
                className="border-transparent text-gray-500 hover:border-moon-purple hover:text-moon-purple px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Doctors
              </Link>
              <Link
                to="/contact"
                className="border-transparent text-gray-500 hover:border-moon-purple hover:text-moon-purple px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <Button 
              variant="outline" 
              className="border-moon-purple text-moon-purple hover:bg-moon-purple/10"
              asChild
            >
              <Link to="/appointments">
                <CalendarPlus className="h-4 w-4 mr-2" />
                Book Appointment
              </Link>
            </Button>
            <Button asChild>
              <Link to="/login">
                <User className="h-4 w-4 mr-2" />
                Login
              </Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <Button variant="ghost" size="sm" className="text-gray-500">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, show/hide based on menu state */}
      <div className="hidden sm:hidden">
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-moon-purple text-moon-purple bg-indigo-50"
          >
            Home
          </Link>
          <Link
            to="/departments"
            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:border-moon-purple hover:text-moon-purple"
          >
            Departments
          </Link>
          <Link
            to="/doctors"
            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:border-moon-purple hover:text-moon-purple"
          >
            Doctors
          </Link>
          <Link
            to="/contact"
            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:border-moon-purple hover:text-moon-purple"
          >
            Contact
          </Link>
          <Link
            to="/appointments"
            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:border-moon-purple hover:text-moon-purple"
          >
            Book Appointment
          </Link>
          <Link
            to="/login"
            className="block pl-3 pr-4 py-2 border-l-4 text-base font-medium border-transparent text-gray-500 hover:border-moon-purple hover:text-moon-purple"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
