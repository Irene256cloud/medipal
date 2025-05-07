
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DepartmentCard from "@/components/DepartmentCard";

// Demo departments data (more comprehensive)
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
  },
  {
    id: "oncology",
    name: "Oncology",
    description: "Comprehensive cancer care including diagnosis, treatment and support.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
  },
  {
    id: "dermatology",
    name: "Dermatology",
    description: "Diagnosis and treatment of skin, hair, and nail conditions.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology",
    description: "Specialized care for eye health and vision correction.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
  },
  {
    id: "gastroenterology",
    name: "Gastroenterology",
    description: "Diagnosis and treatment of digestive system disorders.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
  }
];

const Departments = () => {
  return (
    <>
      <Navbar />
      
      {/* Header */}
      <div className="bg-gradient-moonrise text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Our Medical Departments
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              Medipal Hospital offers comprehensive care across specialized departments, 
              each staffed with expert healthcare professionals dedicated to your wellbeing.
            </p>
          </div>
        </div>
      </div>
      
      {/* Departments Grid */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
        </div>
      </div>
      
      {/* Department Facilities */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              State-of-the-Art Facilities
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our departments are equipped with advanced medical technology and comfortable patient environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9nZ3klMjBtb3VudGFpbnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" 
                alt="Advanced Imaging" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Imaging</h3>
                <p className="text-gray-600">
                  Latest MRI, CT scan, and ultrasound technology for accurate diagnostic imaging.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9nZ3klMjBtb3VudGFpbnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" 
                alt="Surgical Suites" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Modern Surgical Suites</h3>
                <p className="text-gray-600">
                  State-of-the-art operating rooms with the latest surgical equipment and technology.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9nZ3klMjBtb3VudGFpbnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" 
                alt="Patient Rooms" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Comfortable Patient Rooms</h3>
                <p className="text-gray-600">
                  Private, well-appointed rooms designed for your comfort and recovery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Department Staff */}
      <div className="bg-gradient-to-r from-moon-purple to-midnight-purple text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Expert Medical Staff</h2>
            <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
              Each department is led by board-certified specialists and staffed by experienced healthcare professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-moonlight-pink">Board-Certified Physicians</h3>
              <ul className="space-y-3 text-gray-100">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-nebula-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">Experts in their medical specialties</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-nebula-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">Ongoing medical education and training</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-nebula-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">Leaders in medical research and innovation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-moonlight-pink">Dedicated Support Staff</h3>
              <ul className="space-y-3 text-gray-100">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-nebula-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">Experienced nurses and medical assistants</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-nebula-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">Specialized technicians for advanced procedures</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-nebula-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">Compassionate patient care coordinators</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Departments;
