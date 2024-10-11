import { NavLink } from "react-router-dom";

export default function LargeViewMenu() {
  return (
    <>
          <div className="header-right text-white hidden md:block">
              <ul className="flex justify-evenly gap-9">
                  <li>
                      <NavLink
                          to="/"
                          className={({ isActive }) =>
                              `hover:text-blue-400 ${isActive ? "text-blue-600" : "text-white"}`
                          }
                      >
                          {({ isActive }) => (isActive ? `( Home )` : `{ Home }`)}
                      </NavLink>
                  </li>
                  <li>
                      <NavLink
                          to="/projects"
                          className={({ isActive }) =>
                              `hover:text-blue-400 ${isActive ? "text-blue-600" : "text-white"}`
                          }
                      >
                          {({ isActive }) => (isActive ? `( Projects )` : `{ Projects }`)}
                      </NavLink>
                  </li>
                  <li>
                      <NavLink
                          to="/about"
                          className={({ isActive }) =>
                              `hover:text-blue-400 ${isActive ? "text-blue-600" : "text-white"}`
                          }
                      >
                          {({ isActive }) => (isActive ? `( About )` : `{ About }`)}
                      </NavLink>
                  </li>
                  <li>
                      <NavLink
                          to="/resume"
                          className={({ isActive }) =>
                              `hover:text-blue-400 ${isActive ? "text-blue-600" : "text-white"}`
                          }
                      >
                          {({ isActive }) => (isActive ? `( Resume )` : `{ Resume }`)}
                      </NavLink>
                  </li>
                  <li>
                      <NavLink
                          to="/contact"
                          className={({ isActive }) =>
                              `hover:text-blue-400 ${isActive ? "text-blue-600" : "text-white"}`
                          }
                      >
                          {({ isActive }) => (isActive ? `( Contact )` : `{ Contact }`)}
                      </NavLink>
                  </li>
              </ul>
          </div>
    </>
  );
}