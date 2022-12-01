import React, { useState } from "react";
import "./profile.css";
import BasicProfile from "../../components/basicProfile/BasicProfile";
import AddressProfile from "../../components/addressProfile/AddressProfile";
import SecurityProfile from "../../components/securityProfile/SecurityProfile";

const Profile = ({ currentUser }) => {
  const [tab, setTab] = useState(1);
  const tabStyle = "text-indigo-500 border-b-2 font-medium border-indigo-500";

  return (
    <div className="bg-white">
      <nav className="flex flex-col sm:flex-row">
        <button
          className={`text-gray-600 py-4 px-6 block hover:text-indigo-500 focus:outline-none ${
            tab == 1 && tabStyle
          }`}
          onClick={() => setTab(1)}
        >
          Basic Profile
        </button>
        <button
          className={`text-gray-600 py-4 px-6 block hover:text-indigo-500 focus:outline-none ${
            tab == 2 && tabStyle
          }`}
          onClick={() => setTab(2)}
        >
          Address
        </button>
        <button
          className={`text-gray-600 py-4 px-6 block hover:text-indigo-500 focus:outline-none ${
            tab == 3 && tabStyle
          }`}
          onClick={() => setTab(3)}
        >
          Security
        </button>
      </nav>

      {tab === 1 && <BasicProfile />}
      {tab === 2 && <AddressProfile />}
      {tab === 3 && <SecurityProfile />}
    </div>
  );
};

export default Profile;