import tv from "./assets/tv.png"
import searchIcon from "./assets/search.png"
import menuIcon from "./assets/menu_icon.png"
import { useState } from "react"

export const Header = () => {
  const [search, setSearch]= useState("")

  return (
    <header>
        <div className="flex justify-between items-center p-4 md:w-[90%] md:px-0 mx-auto">
            <div className="flex items-center gap-4">
                <img src={tv} alt="TV Show" />
                <h1 className="font-[700] text-[24px] leading-[24px]">Movie Box</h1>
            </div>

            <div className="hidden md:flex items-center border-2 border-solid border-[#D1D5DB] rounded-md py-[6px] px-4 gap-4">
              <label htmlFor="search" className="absolute -top-[100%]"></label>
                <input 
                type="text" 
                value={search} 
                name="search" 
                id="search" 
                onChange={(e) => setSearch(e.target.value)}
                className="text-[16px] text-[#D1D5DB] md:w-[450px] leading-[24px] font-[400] border-none outline-none bg-transparent "
                placeholder="What do you want to watch?"
                />
                <img src={searchIcon} alt="Search" />
            </div>

            <div className="flex items-center gap-4">
              <button className="font-[700] leading-[24px] text-[16px]">Sign in</button>
              <img src={menuIcon} alt="" />
            </div>
        </div>
    </header>
  )
}
