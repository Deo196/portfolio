import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const pagesData = [
    { id: 1, page: "Home", link: "/" },
    { id: 2, page: "About", link: "/about" },
    { id: 3, page: "Experience", link: "/experience" },
    { id: 4, page: "Education", link: "/education" },
  ];

  return (
    <div className="users">
      <ul>
        {pagesData.map((user) => (
          <li key={user.id}>
            <Link to={user.link}>{user.page}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
