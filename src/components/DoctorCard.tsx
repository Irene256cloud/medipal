
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarPlus } from "lucide-react";

interface DoctorProps {
  id: string;
  name: string;
  specialty: string;
  imageUrl: string;
  experience: number;
}

const DoctorCard: React.FC<DoctorProps> = ({
  id,
  name,
  specialty,
  imageUrl,
  experience,
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-gray-200 hover:border-moon-purple">
      <div className="aspect-w-1 aspect-h-1 relative">
        <img
          src={imageUrl || "/placeholder.svg"}
          alt={name}
          className="object-cover w-full h-60"
        />
        <div className="absolute top-0 left-0 p-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-moon-purple text-white">
            {specialty}
          </span>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        <p className="text-gray-600 text-sm mt-1">{experience} years experience</p>
      </CardContent>
      
      <CardFooter className="bg-gray-50 px-6 py-3 flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link to={`/doctors/${id}`}>View Profile</Link>
        </Button>
        <Button size="sm" className="bg-moonlight-pink hover:bg-mauve-deep text-midnight-purple" asChild>
          <Link to={`/appointments?doctor=${id}`}>
            <CalendarPlus className="h-4 w-4 mr-1" />
            Schedule
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DoctorCard;
