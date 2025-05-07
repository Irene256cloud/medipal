
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CalendarProps {
  mode?: "month" | "week" | "day";
  className?: string;
  onDateSelect?: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({
  mode = "month",
  className,
  onDateSelect,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  // Sample appointment data (would come from API in real app)
  const appointments = [
    { date: new Date(currentYear, currentMonth, 10), status: "booked" },
    { date: new Date(currentYear, currentMonth, 15), status: "booked" },
    { date: new Date(currentYear, currentMonth, 20), status: "available" },
    { date: new Date(currentYear, currentMonth, 25), status: "available" },
  ];

  // Navigate to prev month
  const prevMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 0) {
        setCurrentYear((y) => y - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  // Navigate to next month
  const nextMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 11) {
        setCurrentYear((y) => y + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  // Get month name
  const monthName = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' });

  // Get days in month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Get first day of month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // Create calendar days
  const calendarDays = [];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Add previous month days
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push({ day: null, month: "prev" });
  }

  // Add current month days
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentYear, currentMonth, day);
    const appointment = appointments.find(
      (a) => a.date.toDateString() === date.toDateString()
    );
    
    calendarDays.push({
      day,
      date,
      appointment: appointment ? appointment.status : null,
      month: "current",
    });
  }

  // Fill remaining slots with next month
  const remainingSlots = 42 - calendarDays.length;
  for (let day = 1; day <= remainingSlots; day++) {
    calendarDays.push({ day, month: "next" });
  }

  return (
    <div className={cn("bg-white rounded-lg shadow", className)}>
      <div className="p-4 flex items-center justify-between border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">
          {monthName} {currentYear}
        </h2>
        <div className="flex space-x-1">
          <Button variant="outline" size="icon" onClick={prevMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {dayNames.map((name) => (
          <div
            key={name}
            className="bg-gray-50 py-2 text-xs text-center font-medium text-gray-500"
          >
            {name}
          </div>
        ))}
        
        {calendarDays.map((day, idx) => (
          <div
            key={`day-${idx}`}
            className={cn(
              "min-h-[80px] p-1 bg-white",
              day.month === "prev" || day.month === "next"
                ? "text-gray-400 bg-gray-50"
                : "text-gray-900",
              day.appointment === "booked" && "bg-moon-purple/10",
              day.appointment === "available" && "bg-nebula-teal/10"
            )}
            onClick={() => {
              if (day.date && onDateSelect) {
                onDateSelect(day.date);
              }
            }}
          >
            <div className="flex flex-col h-full">
              <span className={cn(
                "text-sm font-medium",
                day.month === "current" && day.day === new Date().getDate() && 
                currentMonth === new Date().getMonth() && 
                currentYear === new Date().getFullYear() &&
                "h-6 w-6 rounded-full bg-moon-purple text-white flex items-center justify-center"
              )}>
                {day.day}
              </span>
              
              {day.appointment === "booked" && (
                <div className="mt-1 p-1 text-xs bg-moon-purple/20 rounded text-moon-purple">
                  Booked
                </div>
              )}
              
              {day.appointment === "available" && (
                <div className="mt-1 p-1 text-xs bg-nebula-teal/20 rounded text-nebula-teal">
                  Available
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
