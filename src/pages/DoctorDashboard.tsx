
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Calendar from "@/components/Calendar";
import MedipalLogo from "@/components/MedipalLogo";
import {
  Bell,
  CalendarClock,
  FileText,
  Pill,
  ClipboardList,
  BarChart3,
  LogOut,
  User,
  Users,
  Menu,
  MessageSquare,
  Filter,
  Search,
  ChevronRight
} from "lucide-react";
import { Input } from "@/components/ui/input";

// Sample patients data
const patients = [
  {
    id: "pat-1",
    name: "John Starfield",
    age: 42,
    gender: "Male",
    lastVisit: "May 1, 2025",
    status: "Scheduled",
    nextAppointment: "May 15, 2025"
  },
  {
    id: "pat-2",
    name: "Sarah Johnson",
    age: 35,
    gender: "Female",
    lastVisit: "April 27, 2025",
    status: "Active",
    nextAppointment: "May 20, 2025"
  },
  {
    id: "pat-3",
    name: "Michael Chen",
    age: 58,
    gender: "Male",
    lastVisit: "April 15, 2025",
    status: "Active",
    nextAppointment: "June 2, 2025"
  },
  {
    id: "pat-4",
    name: "Amelia Rodriguez",
    age: 29,
    gender: "Female",
    lastVisit: "April 10, 2025",
    status: "Follow-up",
    nextAppointment: "May 18, 2025"
  }
];

// Sample appointments data
const appointments = [
  {
    id: "app-1",
    patient: "John Starfield",
    date: "May 15, 2025",
    time: "10:00 AM",
    reason: "Follow-up consultation",
    status: "Confirmed"
  },
  {
    id: "app-2",
    patient: "Sarah Johnson",
    date: "May 20, 2025",
    time: "11:30 AM",
    reason: "Annual check-up",
    status: "Confirmed"
  },
  {
    id: "app-3",
    patient: "Michael Chen",
    date: "June 2, 2025",
    time: "2:00 PM",
    reason: "Prescription renewal",
    status: "Pending"
  },
  {
    id: "app-4",
    patient: "Amelia Rodriguez",
    date: "May 18, 2025",
    time: "9:15 AM",
    reason: "Test results review",
    status: "Confirmed"
  },
  {
    id: "app-5",
    patient: "Robert Lee",
    date: "May 22, 2025",
    time: "3:45 PM",
    reason: "Initial consultation",
    status: "Pending"
  }
];

// Sample department data for filters
const departments = [
  { id: "all", name: "All Departments" },
  { id: "cardiology", name: "Cardiology" },
  { id: "neurology", name: "Neurology" },
  { id: "orthopedics", name: "Orthopedics" },
  { id: "pediatrics", name: "Pediatrics" }
];

const DoctorDashboard = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter appointments based on department (in a real app, this would filter by API call)
  const filteredAppointments = selectedDepartment === "all" 
    ? appointments 
    : appointments.filter(app => app.id.includes(selectedDepartment));
  
  // Filter patients based on search query
  const filteredPatients = searchQuery 
    ? patients.filter(patient => 
        patient.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) 
    : patients;
  
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-cosmic-night text-white">
        <div className="p-4 border-b border-white/10">
          <Link to="/" className="flex items-center">
            <MedipalLogo className="text-white" />
          </Link>
        </div>
        
        <div className="flex flex-col justify-between flex-grow">
          <nav className="flex-1 px-2 py-4 space-y-1">
            <Link to="/doctor-dashboard" className="flex items-center px-4 py-2 text-sm font-medium rounded-md bg-midnight-purple/50 text-white">
              <User className="mr-3 h-5 w-5" />
              Dashboard
            </Link>
            <Link to="/doctor-dashboard/appointments" className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-midnight-purple/30 hover:text-white">
              <CalendarClock className="mr-3 h-5 w-5" />
              Appointments
            </Link>
            <Link to="/doctor-dashboard/patients" className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-midnight-purple/30 hover:text-white">
              <Users className="mr-3 h-5 w-5" />
              Patients
            </Link>
            <Link to="/doctor-dashboard/prescriptions" className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-midnight-purple/30 hover:text-white">
              <Pill className="mr-3 h-5 w-5" />
              Prescriptions
            </Link>
            <Link to="/doctor-dashboard/records" className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-midnight-purple/30 hover:text-white">
              <FileText className="mr-3 h-5 w-5" />
              Medical Records
            </Link>
            <Link to="/doctor-dashboard/analytics" className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-midnight-purple/30 hover:text-white">
              <BarChart3 className="mr-3 h-5 w-5" />
              Analytics
            </Link>
            <Link to="/doctor-dashboard/messages" className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-midnight-purple/30 hover:text-white">
              <MessageSquare className="mr-3 h-5 w-5" />
              Messages
            </Link>
          </nav>
          
          <div className="px-2 py-4 space-y-1">
            <Link to="/logout" className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-midnight-purple/30 hover:text-white">
              <LogOut className="mr-3 h-5 w-5" />
              Sign Out
            </Link>
          </div>
        </div>
      </aside>
      
      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setMobileMenuOpen(false)}></div>
        
        <div className="fixed inset-y-0 left-0 flex flex-col w-full max-w-xs bg-cosmic-night">
          <div className="p-4 border-b border-white/10 flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <MedipalLogo className="text-white" />
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} className="text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav className="flex-1 px-2 py-4 space-y-1">
            <Link to="/doctor-dashboard" className="flex items-center px-4 py-2 text-sm font-medium rounded-md bg-midnight-purple/50 text-white" onClick={() => setMobileMenuOpen(false)}>
              <User className="mr-3 h-5 w-5" />
              Dashboard
            </Link>
            <Link to="/doctor-dashboard/appointments" className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-midnight-purple/30 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
              <CalendarClock className="mr-3 h-5 w-5" />
              Appointments
            </Link>
            <Link to="/doctor-dashboard/patients" className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-midnight-purple/30 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
              <Users className="mr-3 h-5 w-5" />
              Patients
            </Link>
            <Link to="/doctor-dashboard/prescriptions" className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-midnight-purple/30 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
              <Pill className="mr-3 h-5 w-5" />
              Prescriptions
            </Link>
            <Link to="/doctor-dashboard/records" className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-midnight-purple/30 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
              <FileText className="mr-3 h-5 w-5" />
              Medical Records
            </Link>
            <Link to="/doctor-dashboard/analytics" className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-midnight-purple/30 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
              <BarChart3 className="mr-3 h-5 w-5" />
              Analytics
            </Link>
            <Link to="/doctor-dashboard/messages" className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-midnight-purple/30 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
              <MessageSquare className="mr-3 h-5 w-5" />
              Messages
            </Link>
          </nav>
          
          <div className="px-2 py-4 space-y-1 border-t border-white/10">
            <Link to="/logout" className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-300 hover:bg-midnight-purple/30 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
              <LogOut className="mr-3 h-5 w-5" />
              Sign Out
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center md:hidden">
              <button onClick={() => setMobileMenuOpen(true)} className="text-gray-500">
                <Menu className="h-6 w-6" />
              </button>
            </div>
            
            <div className="flex-1 flex justify-end items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700 relative">
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400"></span>
              </button>
              
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" />
                  <AvatarFallback>LP</AvatarFallback>
                </Avatar>
                <div className="ml-2 hidden sm:block">
                  <div className="text-sm font-medium text-gray-700">Dr. Luna Patel</div>
                  <div className="text-xs text-gray-500">Neurology</div>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-gray-100 p-4 sm:p-6 lg:p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Doctor Dashboard</h1>
            <p className="text-gray-600">Welcome, Dr. Luna Patel</p>
          </div>
          
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="appointments">Appointments</TabsTrigger>
              <TabsTrigger value="patients">Patients</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            
            {/* Overview Tab */}
            <TabsContent value="overview">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Today's Schedule */}
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Today's Schedule</CardTitle>
                        <CardDescription>May 10, 2025</CardDescription>
                      </div>
                      <div className="flex space-x-2">
                        <select 
                          className="text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-moon-purple focus:border-moon-purple py-1 pl-3 pr-8"
                          value={selectedDepartment}
                          onChange={(e) => setSelectedDepartment(e.target.value)}
                        >
                          {departments.map(dept => (
                            <option key={dept.id} value={dept.id}>{dept.name}</option>
                          ))}
                        </select>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {filteredAppointments.slice(0, 3).map((appointment) => (
                          <div key={appointment.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                            <div>
                              <p className="font-medium text-gray-900">{appointment.patient}</p>
                              <p className="text-sm text-gray-600">{appointment.reason}</p>
                              <div className="flex items-center mt-1 text-sm text-gray-500">
                                <span>{appointment.time}</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                appointment.status === "Confirmed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                              }`}>
                                {appointment.status}
                              </span>
                              <div className="mt-2">
                                <Button variant="outline" size="sm">
                                  View Details
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="ghost" size="sm">
                        View All Appointments
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link to="/doctor-dashboard/appointments">
                          Schedule
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  {/* Recent Patients */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Patients</CardTitle>
                      <CardDescription>Last 3 patient consultations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {patients.slice(0, 3).map((patient) => (
                          <div key={patient.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                            <div className="flex items-center">
                              <Avatar className="h-10 w-10">
                                <AvatarFallback>{patient.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div className="ml-3">
                                <p className="font-medium text-gray-900">{patient.name}</p>
                                <p className="text-sm text-gray-600">{patient.age}, {patient.gender}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium">Last Visit: <span className="text-gray-600">{patient.lastVisit}</span></p>
                              <Button variant="ghost" size="sm" asChild className="mt-1">
                                <Link to={`/doctor-dashboard/patients/${patient.id}`}>
                                  View Record
                                </Link>
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/doctor-dashboard/patients">
                          View All Patients
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  {/* Quick Actions */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-gradient-to-br from-moon-purple to-midnight-purple text-white">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <Pill className="h-8 w-8 mb-3" />
                        <h3 className="font-medium text-lg">New Prescription</h3>
                        <p className="text-sm opacity-90 mb-4">Write a new prescription</p>
                        <Button variant="secondary" size="sm" className="w-full">Create</Button>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-br from-nebula-teal/80 to-nebula-teal text-white">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <FileText className="h-8 w-8 mb-3" />
                        <h3 className="font-medium text-lg">Medical Records</h3>
                        <p className="text-sm opacity-90 mb-4">Search patient records</p>
                        <Button variant="secondary" size="sm" className="w-full">Access</Button>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-br from-moonlight-pink to-mauve-deep text-white">
                      <CardContent className="p-6 flex flex-col items-center text-center">
                        <ClipboardList className="h-8 w-8 mb-3" />
                        <h3 className="font-medium text-lg">Lab Results</h3>
                        <p className="text-sm opacity-90 mb-4">View pending reports</p>
                        <Button variant="secondary" size="sm" className="w-full">Check</Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                {/* Right Column */}
                <div className="space-y-6">
                  {/* Calendar */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Calendar</CardTitle>
                      <CardDescription>Your schedule overview</CardDescription>
                    </CardHeader>
                    <CardContent className="p-1">
                      <Calendar />
                    </CardContent>
                  </Card>
                  
                  {/* Important Notifications */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Notifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="p-3 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-700">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium">Lab results ready for Sarah Johnson</p>
                              <p className="text-xs mt-1">Urgent review required</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-3 bg-blue-50 border-l-4 border-blue-400 text-blue-700">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium">Department meeting</p>
                              <p className="text-xs mt-1">Today at 4:00 PM in Conference Room A</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-3 bg-green-50 border-l-4 border-green-400 text-green-700">
                          <div className="flex">
                            <div className="flex-shrink-0">
                              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div className="ml-3">
                              <p className="text-sm font-medium">New research protocol available</p>
                              <p className="text-xs mt-1">Updated treatment guidelines for neurological conditions</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Statistics */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Weekly Stats</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium">Patients Seen</span>
                            <span className="text-sm font-bold">28</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-moon-purple h-2 rounded-full" style={{ width: '70%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium">Prescriptions Written</span>
                            <span className="text-sm font-bold">19</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-mauve-deep h-2 rounded-full" style={{ width: '50%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium">Lab Orders</span>
                            <span className="text-sm font-bold">12</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-nebula-teal h-2 rounded-full" style={{ width: '30%' }}></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" size="sm" asChild className="w-full">
                        <Link to="/doctor-dashboard/analytics">
                          View Detailed Analytics
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            {/* Appointments Tab */}
            <TabsContent value="appointments">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>All Appointments</CardTitle>
                      <CardDescription>View and manage your schedule</CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                      </Button>
                      <Button size="sm" className="bg-moon-purple hover:bg-mauve-deep">
                        Add Appointment
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {filteredAppointments.map((appointment) => (
                      <div key={appointment.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-md border-l-4 border-moon-purple">
                        <div>
                          <p className="font-medium text-gray-900">{appointment.patient}</p>
                          <p className="text-sm text-gray-600">{appointment.reason}</p>
                          <div className="flex items-center mt-1 text-sm text-gray-500">
                            <span>{appointment.date} • {appointment.time}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            appointment.status === "Confirmed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                          }`}>
                            {appointment.status}
                          </span>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              Reschedule
                            </Button>
                            <Button variant="outline" size="sm">
                              Details
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Showing {filteredAppointments.length} appointments</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" disabled>Previous</Button>
                    <Button variant="ghost" size="sm">Next</Button>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* Patients Tab */}
            <TabsContent value="patients">
              <Card>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                    <div>
                      <CardTitle>My Patients</CardTitle>
                      <CardDescription>Manage patient records</CardDescription>
                    </div>
                    <div className="w-full sm:w-auto flex items-center space-x-2">
                      <div className="relative w-full sm:w-64">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input 
                          placeholder="Search patients..." 
                          className="pl-10"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                        />
                      </div>
                      <Button size="sm" className="bg-moon-purple hover:bg-mauve-deep whitespace-nowrap">
                        Add Patient
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Age/Gender
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Last Visit
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Next Appointment
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredPatients.map((patient) => (
                          <tr key={patient.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  <Avatar>
                                    <AvatarFallback>{patient.name.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {patient.name}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{patient.age} yrs</div>
                              <div className="text-sm text-gray-500">{patient.gender}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">{patient.lastVisit}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                patient.status === "Active" ? "bg-green-100 text-green-800" : 
                                patient.status === "Scheduled" ? "bg-blue-100 text-blue-800" : 
                                "bg-yellow-100 text-yellow-800"
                              }`}>
                                {patient.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {patient.nextAppointment}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex space-x-2">
                                <Button variant="ghost" size="sm" asChild>
                                  <Link to={`/doctor-dashboard/patients/${patient.id}`}>
                                    View
                                  </Link>
                                </Button>
                                <Button variant="outline" size="sm" asChild>
                                  <Link to={`/doctor-dashboard/patients/${patient.id}/edit`}>
                                    Edit
                                  </Link>
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Analytics Tab */}
            <TabsContent value="analytics">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Patient Statistics</CardTitle>
                    <CardDescription>Patient volume and trends</CardDescription>
                  </CardHeader>
                  <CardContent className="h-80">
                    <div className="flex items-center justify-center h-full text-gray-500">
                      {/* In a real app, this would be a chart */}
                      <div className="text-center">
                        <BarChart3 className="h-16 w-16 mx-auto text-gray-400" />
                        <p className="mt-2">Patient visit analytics chart would appear here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Prescription Analytics</CardTitle>
                    <CardDescription>Most prescribed medications</CardDescription>
                  </CardHeader>
                  <CardContent className="h-80">
                    <div className="flex items-center justify-center h-full text-gray-500">
                      {/* In a real app, this would be a chart */}
                      <div className="text-center">
                        <BarChart3 className="h-16 w-16 mx-auto text-gray-400" />
                        <p className="mt-2">Prescription analytics chart would appear here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Performance Metrics</CardTitle>
                    <CardDescription>Your clinical performance over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-4 rounded-md">
                        <div className="text-sm font-medium text-gray-500">Average Appointment Time</div>
                        <div className="mt-1 flex items-baseline">
                          <div className="text-2xl font-semibold text-gray-900">24 min</div>
                          <div className="ml-2 text-sm text-green-600">-2 min from last month</div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-md">
                        <div className="text-sm font-medium text-gray-500">Patient Satisfaction</div>
                        <div className="mt-1 flex items-baseline">
                          <div className="text-2xl font-semibold text-gray-900">4.8/5</div>
                          <div className="ml-2 text-sm text-green-600">+0.2 from last month</div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-md">
                        <div className="text-sm font-medium text-gray-500">Follow-up Rate</div>
                        <div className="mt-1 flex items-baseline">
                          <div className="text-2xl font-semibold text-gray-900">92%</div>
                          <div className="ml-2 text-sm text-green-600">+3% from last month</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default DoctorDashboard;
