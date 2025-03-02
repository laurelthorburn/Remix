import { Link, NavLink, Outlet } from "@remix-run/react";

export default function Layout() {
  return (
    <>
      <header className="mb-4 lg:mb-10">
        <nav className="p-4">
          <ul className="w-full flex flex-row gap-5 text-lg lg:text-2xl font-bold">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="ml-auto">
              <NavLink to="/demos">Demos</NavLink>
            </li>
            <li>
              <NavLink to="/resume">Resume</NavLink>
            </li>
            <li>
              <Link to="https://github.com/laurelthorburn" target="_blank" rel="noopener noreferrer">Github</Link>
            </li>
            <li>
              <Link to="https://www.linkedin.com/in/laurel-king-651592219/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="p-4 w-full flex justify-center items-center">
        <Outlet />
      </main>
    </>
  );
}
