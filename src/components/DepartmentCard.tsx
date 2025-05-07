
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DepartmentProps {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

const DepartmentCard: React.FC<DepartmentProps> = ({
  id,
  name,
  description,
  icon,
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-gray-200 hover:border-moon-purple">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-moon-purple/10 flex items-center justify-center text-moon-purple mb-4">
            {icon}
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">{name}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 px-6 py-3 flex justify-center">
        <Button variant="outline" asChild>
          <Link to={`/departments/${id}`}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DepartmentCard;
