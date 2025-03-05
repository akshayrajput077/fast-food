
"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CircleUserRound } from 'lucide-react';
import { localData } from '@/services/auth/signIn.service';
const Logo = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function fetchdata() {
      const users = await localData();
      console.log(users);
      setUser(users);  // Store the original data
      // setFoods(res.data); // Set initial foods as the original list
    }
    fetchdata();

  }, 0)

  return (
    <div className="flex items-center">
      {user ? (
        // If the user is logged in, show their first letter of the first name
        <div className="flex items-center justify-center bg-orange-600 text-white rounded-full w-10 h-10">
          {user.FirstName ? user.FirstName[0].toUpperCase() : <CircleUserRound size={40} className="text-orange-600 hover:text-orange-600" />}
          {user.LastName ? user.LastName[0].toUpperCase() : <CircleUserRound size={40} className="text-orange-600 hover:text-orange-600" />}
        </div>
      ) : (
        <CircleUserRound size={40} className="text-orange-600 hover:text-orange-600" />
      )}
    </div>
  );
};

export default Logo;
