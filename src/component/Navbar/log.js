
"use client"
import { useEffect, useState } from 'react';
import { ChefHat } from 'lucide-react';
const Logo = () => {
  return (
    <div className="flex items-center">
      <ChefHat size={40} className="text-orange-600 hover:text-orange-600" />
    </div>
  );
};

export default Logo;
