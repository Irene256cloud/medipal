
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Calendar from "@/components/Calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarClock } from "lucide-react";

// Demo departments data
const departments = [
  { id: "cardiology", name: "Cardiology" },
  { id: "neurology", name: "Neurology" },
  { id: "orthopedics", name: "Orthopedics" },
  { id: "pediatrics", name: "Pediatrics" },
  { id: "dermatology", name: "Dermatology" },
  { id: "oncology", name: "Oncology" },
];

// Demo doctors data
const doctors = [
  { id: "dr-luna", name: "Dr. Luna Patel", department: "neurology" },
  { id: "dr-james", name: "Dr. James Wilson", department: "cardiology" },
  { id: "dr-sophia", name: "Dr. Sophia Chen", department: "pediatrics" },
  { id: "dr-michael", name: "Dr. Michael Johnson", department: "orthopedics" },
  { id: "dr-amara", name: "Dr. Amara Washington", department: "dermatology" },
  { id: "dr-david", name: "Dr. David Kim", department: "oncology" },
];

// Available time slots (would be dynamic based on date and doctor in real app)
const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", 
  "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM"
];

const Appointments = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [reason, setReason] = useState("");
  const [step, setStep] = useState(1);
  
  // Filter doctors based on department selection
  const filteredDoctors = selectedDepartment 
    ? doctors.filter(doctor => doctor.department === selectedDepartment)
    : doctors;

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };
  
  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Here we would normally submit the appointment
      alert("Appointment request submitted!");
      // Reset form
      setSelectedDepartment("");
      setSelectedDoctor("");
      setSelectedDate(null);
      setSelectedTime("");
      setReason("");
      setStep(1);
    }
  };
  
  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  // Check if the current step is valid to proceed
  const isStepValid = () => {
    switch(step) {
      case 1:
        return selectedDepartment && selectedDoctor;
      case 2:
        return selectedDate && selectedTime;
      case 3:
        return reason.trim().length > 0;
      default:
        return false;
    }
  };

  return (
    <>
      <Navbar />
      
      {/* Header */}
      <div className="bg-gradient-moonrise text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Book Your Appointment
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              Schedule a visit with our specialists in just a few steps
            </p>
          </div>
        </div>
      </div>
      
      {/* Appointment Booking Steps */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-3xl">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-gray-300"></div>
              </div>
              <div className="relative flex justify-between">
                <div className={`flex flex-col items-center ${step >= 1 ? 'text-moon-purple' : 'text-gray-500'}`}>
                  <div className={`rounded-full h-8 w-8 flex items-center justify-center ${step >= 1 ? 'bg-moon-purple text-white' : 'bg-white border-2 border-gray-300'}`}>
                    1
                  </div>
                  <div className="text-sm mt-2">Select Doctor</div>
                </div>
                <div className={`flex flex-col items-center ${step >= 2 ? 'text-moon-purple' : 'text-gray-500'}`}>
                  <div className={`rounded-full h-8 w-8 flex items-center justify-center ${step >= 2 ? 'bg-moon-purple text-white' : 'bg-white border-2 border-gray-300'}`}>
                    2
                  </div>
                  <div className="text-sm mt-2">Choose Date & Time</div>
                </div>
                <div className={`flex flex-col items-center ${step >= 3 ? 'text-moon-purple' : 'text-gray-500'}`}>
                  <div className={`rounded-full h-8 w-8 flex items-center justify-center ${step >= 3 ? 'bg-moon-purple text-white' : 'bg-white border-2 border-gray-300'}`}>
                    3
                  </div>
                  <div className="text-sm mt-2">Confirm Details</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Step Content */}
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
            {/* Step 1: Select Department & Doctor */}
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">Select Department & Doctor</h2>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                      Department
                    </label>
                    <Select
                      value={selectedDepartment}
                      onValueChange={setSelectedDepartment}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a department" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((department) => (
                          <SelectItem key={department.id} value={department.id}>
                            {department.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="doctor" className="block text-sm font-medium text-gray-700">
                      Doctor
                    </label>
                    <Select
                      value={selectedDoctor}
                      onValueChange={setSelectedDoctor}
                      disabled={!selectedDepartment}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={selectedDepartment ? "Select a doctor" : "Please select a department first"} />
                      </SelectTrigger>
                      <SelectContent>
                        {filteredDoctors.map((doctor) => (
                          <SelectItem key={doctor.id} value={doctor.id}>
                            {doctor.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}
            
            {/* Step 2: Choose Date & Time */}
            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">Choose Date & Time</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                  <div className="col-span-1 md:col-span-3">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Date
                    </label>
                    <Calendar onDateSelect={handleDateSelect} />
                  </div>
                  
                  <div className="col-span-1 md:col-span-2">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Selected Date
                        </label>
                        <div className="p-3 bg-gray-50 border border-gray-200 rounded-md">
                          {selectedDate ? (
                            <div className="flex items-center">
                              <CalendarClock className="h-5 w-5 text-moon-purple mr-2" />
                              <span>{selectedDate.toDateString()}</span>
                            </div>
                          ) : (
                            <span className="text-gray-500">Please select a date on the calendar</span>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Available Time Slots
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {timeSlots.map((time) => (
                            <Button
                              key={time}
                              variant={selectedTime === time ? "default" : "outline"}
                              className={selectedTime === time ? "bg-moon-purple hover:bg-mauve-deep" : ""}
                              onClick={() => setSelectedTime(time)}
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Step 3: Confirm Details */}
            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-900">Confirm Appointment Details</h2>
                
                <div className="bg-gray-50 p-4 rounded-md">
                  <dl className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <dt className="font-medium text-gray-500">Department</dt>
                      <dd className="col-span-2 text-gray-900">
                        {departments.find(d => d.id === selectedDepartment)?.name || ""}
                      </dd>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <dt className="font-medium text-gray-500">Doctor</dt>
                      <dd className="col-span-2 text-gray-900">
                        {doctors.find(d => d.id === selectedDoctor)?.name || ""}
                      </dd>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <dt className="font-medium text-gray-500">Date</dt>
                      <dd className="col-span-2 text-gray-900">
                        {selectedDate ? selectedDate.toDateString() : ""}
                      </dd>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <dt className="font-medium text-gray-500">Time</dt>
                      <dd className="col-span-2 text-gray-900">{selectedTime}</dd>
                    </div>
                  </dl>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
                    Reason for Visit
                  </label>
                  <Textarea
                    id="reason"
                    placeholder="Please briefly describe why you're scheduling this appointment"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    rows={4}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <Input id="email" placeholder="Enter your email address" />
                  </div>
                </div>
              </div>
            )}
            
            {/* Navigation Buttons */}
            <div className="mt-8 flex justify-between">
              {step > 1 ? (
                <Button variant="outline" onClick={handlePrevStep}>
                  Previous
                </Button>
              ) : (
                <div></div>
              )}
              <Button 
                onClick={handleNextStep} 
                disabled={!isStepValid()}
                className={isStepValid() ? "bg-moon-purple hover:bg-mauve-deep" : ""}
              >
                {step < 3 ? "Next" : "Book Appointment"}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Important Information */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Before Your Visit</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-moon-purple mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Arrive 15 minutes before your appointment time</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-moon-purple mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Bring your insurance card and ID</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-moon-purple mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Have a list of current medications</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Cancellation Policy</h3>
              <p className="text-gray-600">
                If you need to cancel or reschedule your appointment, please do so at least 24 hours in advance to avoid a cancellation fee. You can cancel through your patient portal or by calling our office.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
              <p className="text-gray-600 mb-4">
                If you're having trouble booking an appointment online, our staff is here to help.
              </p>
              <Button variant="outline" className="w-full">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Appointments;
