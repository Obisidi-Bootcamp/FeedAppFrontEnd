import React, { useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  const logout = () => {
    //logout funtionality goes here
  };
  return (
    <>
      <header className="sticky top-0 z-50">
        <nav
          id="header"
          className="w-screen z-30 bg-white shadow-lg border-b border-indigo-700"
        >
          <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
            <div className="flex items-centerw-auto w-full " id="menu">
              <nav>
                <ul className="flex items-center justify-between text-base text-indigo-700 ">
                  <li>
                    <p className="inline-block no-underline hover:text-black font-bold text-lg py-2 px-4 lg:-ml-2">
                      Feed App
                    </p>
                  </li>
                  <li>
                    <Link
                      className="inline-block no-underline hover:text-black font-normal text-lg py-2 px-4 lg:-ml-2"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block no-underline hover:text-black font-normal text-lg py-2 px-4 lg:-ml-2"
                      to="/myFeeds"
                    >
                      My Feeds
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="inline-block no-underline hover:text-black font-normal text-lg py-2 px-4 lg:-ml-2"
                      to="/profile"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <div
                      className="inline-block no-underline hover:text-black font-normal text-lg py-2 px-4 lg:-ml-2"
                      onClick={() => logout()}
                    >
                      Logout
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </nav>
      </header>
      <main className="w-screen relative">{props.children}</main>
    </>
  );
};

export default Header;