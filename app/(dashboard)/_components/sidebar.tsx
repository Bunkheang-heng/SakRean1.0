"use client"

import {Logo} from "./logo"
import { SidebarRoutes } from "./sidebar-routes";

export const Sidebar = () => {
    return ( 
        <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm ">
           <div className="p-6 flex justify-center">
            <Logo />
            <h1 className="pt-6 text-[30px] font-bold">
               <span className="text-blue-600">Sak</span><span className="text-yellow-400">Rean</span>
            </h1>
           </div>
           <div className="flex flex-col w-full">
            <SidebarRoutes />
           </div>
        </div>
     );
}
 
