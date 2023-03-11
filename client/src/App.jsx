import React, {useState} from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { openAI_black,openAI_white } from './assets';
import { Home, CreatePost } from './page';
import { FaRegSun, FaRegMoon } from "react-icons/fa";

const App = () => {
  const [toggleDarkMode, setToggleDarkMode] = useState(false);

  const checkDarkMode = document.querySelector("#toggle_dark_mode");
  const html = document.querySelector("html");

  return(
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 dark:bg-[#0f172a]">
        <Link 
          to="/"
          className='flex gap-2 font-bold text-[#222328] text-[18px] justify-center items-center mx-0 xs:mx-[30px]'  
        >
          <img 
            src={toggleDarkMode?openAI_white:openAI_black}
            alt="logo" 
            className="w-10"
          />
          <span className='text-[#6469ff]'>x</span>
          <h1 className='mt-[0.24rem] text-[#222328] dark:text-[#e2e8f0]'>Wupxy.</h1>
        </Link>
        <div className='flex justify-center items-center'>
          <input
            type="checkbox"
            id="toggle_dark_mode"
            className="hidden"
            onClick={() => {
              checkDarkMode.checked
                ? html.classList.add("dark")
                : html.classList.remove("dark");
            }}
          />
          <label
            htmlFor="toggle_dark_mode"
            className="cursor-pointer mx-3 text-xl"
            onClick={() => setToggleDarkMode((prev) => !prev)}
          >
            {[
              toggleDarkMode ? (
                <FaRegSun className="dark:text-white" />
              ) : (
                <FaRegMoon className="dark:text-black" />
              )
            ]}
          </label>
          <Link to="/create-post" className="font-inter font-bold bg-[#6469ff] text-white px-2 py-2 rounded-md text-[10px] xs:text-[18px] xs:px-4">Create a Post</Link>
        </div>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)] dark:bg-[#0f172a]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
};

export default App;