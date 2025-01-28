import React from 'react'
import { Heading2 } from './heading';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

   
function NavBar() {
    return (
      <div className="bg-gray-800 p-5 flex justify-between items-center">
        {/* Left Side - App Title */}
        <div className="text-gray-200">
          <Heading2 variant="light">🍳 CookIt</Heading2>
        </div>
  
        {/* Right Side - Avatar & Name */}
        <div className="flex items-center space-x-3 pr-4">
          <h4 className="font-semibold text-xl text-white">Ray Brown</h4>
          <Avatar>
            <AvatarImage
              className="items-start"
              src="https://raybrown.dev/wp-content/uploads/2024/07/ray_brown_headshot.jpg"
            />
            <AvatarFallback>RB</AvatarFallback>
          </Avatar>
        </div>
      </div>
    );
  
}

export default NavBar;
