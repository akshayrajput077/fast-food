
"use client"
import { useEffect, useState } from 'react';
import { ChefHat } from 'lucide-react';
import { localData } from '@/services/auth/signIn.service';
const Logo = () => {
  // const [user, setUser] = useState('');
  // const [initials, setInitials] = useState('');
  // useEffect(() => {
  //   fetchdata();
  //   // if (user) {
  //   //   setInitials(user.FirstName[0].toUpperCase() + user.LastName[0].toUpperCase());
  //   // }
  // }, [])

  // async function fetchdata() {
  //   const users = await localData();
  //   console.log(users);
  //   setUser(users);
  // }

  return (
    <div className="flex items-center">
      <ChefHat size={40} className="text-orange-600 hover:text-orange-600" />
    </div>
  );
};

export default Logo;

// import React, { useState, useEffect } from 'react';
// import { CircleUserRound } from 'lucide-react'; // Assuming you're using lucide for icons

// const Logo = () => {
//   const [user, setUser] = useState(null);
//   const [isClient, setIsClient] = useState(false); // To check if we are on the client side

//   useEffect(() => {
//     // Ensure this effect runs only once after mount, and on the client side
//     setIsClient(true);

//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       const parsedUser = JSON.parse(storedUser);
//       if (parsedUser && parsedUser !== user) {
//         setUser(parsedUser); // Only set user if it's different
//       }
//     }
//   }, [user]); // Empty dependency array ensures this runs only once after initial render

//   // If not on the client, we don't show any content yet (avoiding mismatch between server & client)
//   if (!isClient) {
//     return (
//       <CircleUserRound size={40} className="text-orange-600 hover:text-orange-600" />
//     );
//   }

//   // Fallback for when user is not logged in
//   const initials = user ? (user.FirstName[0] + user.LastName[0]).toUpperCase() : '';

//   return (
//     <div className="flex items-center">
//       {user ? (
//         <div className="flex items-center justify-center bg-orange-600 text-white rounded-full w-10 h-10">
//           {initials}
//         </div>
//       ) : (
//         <CircleUserRound size={40} className="text-orange-600 hover:text-orange-600" />
//       )}
//     </div>
//   );
// };

// export default Logo;

