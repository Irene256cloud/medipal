
import React from "react";
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
  CalendarPlus,
  FileText,
  Pill,
  CreditCard,
  LogOut,
  User,
  Menu,
  MessageSquare,
  Upload,
  AlertCircle
} from "lucide-react";

// Sample appointments data
const appointments = [
  {
    id: "app-1",
    date: "May 15, 2025",
    time: "10:00 AM",
    doctor: "Dr. Luna Patel",
    department: "Neurology",
    status: "Upcoming"
  },
  {
    id: "app-2",
    date: "May 22, 2025",
    time: "2:30 PM",
    doctor: "Dr. James Wilson",
    department: "Cardiology",
    status: "Upcoming"
  },
  {
    id: "app-3",
    date: "April 28, 2025",
    time: "11:15 AM",
    doctor: "Dr. Sophia Chen",
    department: "Pediatrics",
    status: "Completed"
  }
];

// Sample prescriptions data
const prescriptions = [
  {
    id: "presc-1",
    medication: "Ibuprofen",
    dosage: "200mg",
    instructions: "Take twice daily with food",
    prescribedBy: "Dr. Luna Patel",
    date: "May 1, 2025",
    refills: 2
  },
  {
    id: "presc-2",
    medication: "Amoxicillin",
    dosage: "500mg",
    instructions: "Take three times daily for 10 days",
    prescribedBy: "Dr. James Wilson",
    date: "April 20, 2025",
    refills: 0
  }
];

const PatientDashboard = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <Link to="/" className="flex items-center">
            <MedipalLogo />
          </Link>
        </div>
        
        <div className="flex flex-col justify-between flex-grow">
          <nav className="flex-1 px-2 py-4 space-y-1">
            <Link to="/patient-dashboard" className="flex items-center px-4 py-2 text-sm font-medium rounded-md bg-moon-purple/10 text-moon-purple">
              <User className="mr-3 h-5 w-5" />
              Dashboard
            </Link>
            <Link to="/patient-dashboard/appointments" className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              <CalendarPlus className="mr-3 h-5 w-5" />
              Appointments
            </Link>
            <Link to="/patient-dashboard/records" className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              <FileText className="mr-3 h-5 w-5" />
              Medical Records
            </Link>
            <Link to="/patient-dashboard/prescriptions" className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              <Pill className="mr-3 h-5 w-5" />
              Prescriptions
            </Link>
            <Link to="/patient-dashboard/billing" className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              <CreditCard className="mr-3 h-5 w-5" />
              Billing
            </Link>
            <Link to="/patient-dashboard/messages" className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              <MessageSquare className="mr-3 h-5 w-5" />
              Messages
            </Link>
          </nav>
          
          <div className="px-2 py-4 space-y-1">
            <Link to="/logout" className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              <LogOut className="mr-3 h-5 w-5" />
              Sign Out
            </Link>
          </div>
        </div>
      </aside>
      
      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setMobileMenuOpen(false)}></div>
        
        <div className="fixed inset-y-0 left-0 flex flex-col w-full max-w-xs bg-white">
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <MedipalLogo />
            </Link>
            <button onClick={() => setMobileMenuOpen(false)} className="text-gray-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav className="flex-1 px-2 py-4 space-y-1">
            <Link to="/patient-dashboard" className="flex items-center px-4 py-2 text-sm font-medium rounded-md bg-moon-purple/10 text-moon-purple" onClick={() => setMobileMenuOpen(false)}>
              <User className="mr-3 h-5 w-5" />
              Dashboard
            </Link>
            <Link to="/patient-dashboard/appointments" className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>
              <CalendarPlus className="mr-3 h-5 w-5" />
              Appointments
            </Link>
            <Link to="/patient-dashboard/records" className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>
              <FileText className="mr-3 h-5 w-5" />
              Medical Records
            </Link>
            <Link to="/patient-dashboard/prescriptions" className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>
              <Pill className="mr-3 h-5 w-5" />
              Prescriptions
            </Link>
            <Link to="/patient-dashboard/billing" className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>
              <CreditCard className="mr-3 h-5 w-5" />
              Billing
            </Link>
            <Link to="/patient-dashboard/messages" className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>
              <MessageSquare className="mr-3 h-5 w-5" />
              Messages
            </Link>
          </nav>
          
          <div className="px-2 py-4 space-y-1 border-t border-gray-200">
            <Link to="/logout" className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900" onClick={() => setMobileMenuOpen(false)}>
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
                  <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <span className="ml-2 text-sm font-medium text-gray-700 hidden sm:inline-block">
                  John Starfield
                </span>
              </div>
            </div>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-gray-100 p-4 sm:p-6 lg:p-8">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Patient Dashboard</h1>
            <p className="text-gray-600">Welcome back, John Starfield</p>
          </div>
          
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="appointments">Appointments</TabsTrigger>
              <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
              <TabsTrigger value="records">Records</TabsTrigger>
            </TabsList>
            
            {/* Overview Tab */}
            <TabsContent value="overview">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Upcoming Appointments */}
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Upcoming Appointments</CardTitle>
                        <CardDescription>Your scheduled appointments</CardDescription>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link to="/appointments">
                          <CalendarPlus className="h-4 w-4 mr-2" />
                          Book New
                        </Link>
                      </Button>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {appointments.filter(app => app.status === "Upcoming").map((appointment) => (
                          <div key={appointment.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                            <div>
                              <p className="font-medium text-gray-900">{appointment.doctor}</p>
                              <p className="text-sm text-gray-600">{appointment.department}</p>
                              <div className="flex items-center mt-1 text-sm text-gray-500">
                                <span>{appointment.date} • {appointment.time}</span>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm" asChild>
                              <Link to={`/patient-dashboard/appointments/${appointment.id}`}>
                                Details
                              </Link>
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Recent Prescriptions */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Prescriptions</CardTitle>
                      <CardDescription>Your current medications</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {prescriptions.map((prescription) => (
                          <div key={prescription.id} className="p-3 bg-gray-50 rounded-md">
                            <div className="flex justify-between">
                              <div>
                                <p className="font-medium text-gray-900">{prescription.medication} {prescription.dosage}</p>
                                <p className="text-sm text-gray-600">{prescription.instructions}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-sm font-medium text-gray-900">Prescribed: {prescription.date}</p>
                                <p className="text-sm text-gray-600">By: {prescription.prescribedBy}</p>
                                <p className="text-sm text-gray-600">Refills: {prescription.refills}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link to="/patient-dashboard/prescriptions">
                          View All Prescriptions
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  
                  {/* Upload Documents */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Upload Documents</CardTitle>
                      <CardDescription>Share lab results or medical documents</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-sm font-medium text-gray-900">Drag and drop files here</p>
                        <p className="mt-1 text-xs text-gray-500">Or</p>
                        <div className="mt-2">
                          <Button size="sm" variant="outline">Browse Files</Button>
                        </div>
                        <p className="mt-2 text-xs text-gray-500">PDF, JPG, PNG up to 10MB</p>
                      </div>
                    </CardContent>
                  </Card>
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
                  
                  {/* Medication Reminders */}
                  <Card className="bg-gradient-to-br from-moon-purple to-midnight-purple text-white">
                    <CardHeader>
                      <CardTitle className="text-white">Medication Reminders</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center p-3 bg-white/10 backdrop-blur-sm rounded-md text-moonlight">
                          <Pill className="h-5 w-5 mr-3 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Ibuprofen 200mg</p>
                            <p className="text-sm opacity-90">Today at 8:00 PM</p>
                          </div>
                        </div>
                        <div className="flex items-center p-3 bg-white/10 backdrop-blur-sm rounded-md text-moonlight">
                          <AlertCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                          <div>
                            <p className="font-medium">Amoxicillin Refill</p>
                            <p className="text-sm opacity-90">Needed in 2 days</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Health Metrics */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Health Metrics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Blood Pressure</span>
                          <span className="text-sm">120/80 mmHg</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Heart Rate</span>
                          <span className="text-sm">72 bpm</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">BMI</span>
                          <span className="text-sm">24.5</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Last Check-up</span>
                          <span className="text-sm">March 15, 2025</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" size="sm">
                        View Health History
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
                  <CardTitle>All Appointments</CardTitle>
                  <CardDescription>View and manage your appointments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {appointments.map((appointment) => (
                      <div key={appointment.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-md border-l-4 border-moon-purple">
                        <div>
                          <p className="font-medium text-gray-900">{appointment.doctor}</p>
                          <p className="text-sm text-gray-600">{appointment.department}</p>
                          <div className="flex items-center mt-1 text-sm text-gray-500">
                            <span>{appointment.date} • {appointment.time}</span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mr-2 ${
                            appointment.status === "Upcoming" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                          }`}>
                            {appointment.status}
                          </span>
                          <Button variant="outline" size="sm">
                            Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button asChild>
                    <Link to="/appointments">
                      <CalendarPlus className="h-4 w-4 mr-2" />
                      Book New Appointment
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* Prescriptions Tab */}
            <TabsContent value="prescriptions">
              <Card>
                <CardHeader>
                  <CardTitle>Your Prescriptions</CardTitle>
                  <CardDescription>Current and past medications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {prescriptions.map((prescription) => (
                      <div key={prescription.id} className="p-4 bg-gray-50 rounded-md">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-lg font-medium text-gray-900">{prescription.medication}</h4>
                            <p className="text-sm text-gray-600 mt-1">Dosage: {prescription.dosage}</p>
                            <p className="text-sm text-gray-600">{prescription.instructions}</p>
                          </div>
                          <div className="text-right">
                            <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              prescription.refills > 0 ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                            }`}>
                              {prescription.refills > 0 ? `${prescription.refills} refills left` : "No refills"}
                            </div>
                            <p className="text-sm text-gray-500 mt-1">Prescribed: {prescription.date}</p>
                          </div>
                        </div>
                        <div className="mt-4 pt-3 border-t border-gray-200 flex justify-between items-center">
                          <p className="text-sm text-gray-600">By {prescription.prescribedBy}</p>
                          <div className="space-x-2">
                            {prescription.refills > 0 && (
                              <Button size="sm" variant="outline">Request Refill</Button>
                            )}
                            <Button size="sm" variant="outline">View Details</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Records Tab */}
            <TabsContent value="records">
              <Card>
                <CardHeader>
                  <CardTitle>Medical Records</CardTitle>
                  <CardDescription>Access your health documents</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-md">
                      <div className="flex items-center">
                        <FileText className="h-6 w-6 mr-3 text-gray-500" />
                        <div>
                          <p className="font-medium text-gray-900">Annual Physical Exam</p>
                          <p className="text-sm text-gray-600">March 15, 2025 • Dr. James Wilson</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-md">
                      <div className="flex items-center">
                        <FileText className="h-6 w-6 mr-3 text-gray-500" />
                        <div>
                          <p className="font-medium text-gray-900">Blood Test Results</p>
                          <p className="text-sm text-gray-600">February 10, 2025 • Medipal Laboratory</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-md">
                      <div className="flex items-center">
                        <FileText className="h-6 w-6 mr-3 text-gray-500" />
                        <div>
                          <p className="font-medium text-gray-900">MRI Scan</p>
                          <p className="text-sm text-gray-600">January 22, 2025 • Radiology Department</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-medium text-gray-900 mb-3">Upload New Document</h4>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <p className="mt-2 text-sm font-medium text-gray-900">Drag and drop files here</p>
                      <p className="mt-1 text-xs text-gray-500">Or</p>
                      <div className="mt-2">
                        <Button size="sm">Browse Files</Button>
                      </div>
                      <p className="mt-2 text-xs text-gray-500">PDF, JPG, PNG up to 10MB</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default PatientDashboard;
