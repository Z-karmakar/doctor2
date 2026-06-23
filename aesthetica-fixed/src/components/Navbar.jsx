import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header style={{width:'100%', marginBottom:'16px'}} className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <nav className="section-container flex items-center justify-between h-[68px]">
        <NavLink to="/clinics" className="font-display text-[22px] font-semibold tracking-[-0.01em] shrink-0 text-blue-700">
          Aesthetica Med
        </NavLink>
        
        <ul className="hidden md:flex flex-1 justify-center gap-8 list-none">
          {[
            { to: '/clinics',     label: 'Clinics' },
            { to: '/specialists', label: 'Specialists' },
            { to: '/facilities',  label: 'Facilities' },
            { to: '/location',    label: 'Location' },
          ].map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className={({ isActive }) =>
                `text-[14px] pb-[3px] border-b-2 transition-all duration-200 ${
                  isActive
                    ? 'text-gray-900 border-blue-600 font-medium'
                    : 'text-gray-500 border-transparent hover:text-gray-900'
                }`
              }>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-[17px] font-medium transition-all hover:-translate-y-px">
          Book Appointment
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[2px] bg-gray-700 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-[2px] bg-gray-700 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[2px] bg-gray-700 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="section-container py-4 flex flex-col gap-3">
            {[
              { to: '/clinics',     label: 'Clinics' },
              { to: '/specialists', label: 'Specialists' },
              { to: '/facilities',  label: 'Facilities' },
              { to: '/location',    label: 'Location' },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-[15px] py-2 border-b border-gray-50 transition-colors ${
                    isActive ? 'text-blue-600 font-medium' : 'text-gray-600'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-[15px] font-medium w-full">
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
