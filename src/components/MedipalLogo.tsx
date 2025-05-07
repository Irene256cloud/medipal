
import React from "react";

interface MedipalLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const MedipalLogo: React.FC<MedipalLogoProps> = ({ 
  className = "", 
  size = "md" 
}) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
  };

  return (
    <div className={`font-bold ${sizeClasses[size]} ${className}`}>
      <span className="text-black">Medi</span>
      <span className="text-moon-purple dark:text-twilight-7">Pal</span>
    </div>
  );
};

export default MedipalLogo;
