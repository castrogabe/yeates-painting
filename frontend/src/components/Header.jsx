import { NavLink } from 'react-router-dom';

export default function Header() {
  const linkClass = ({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link';

  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container'>
          <NavLink className='navbar-brand' to='/'>
            Yeates Painting
          </NavLink>

          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#mainNavbar'
            aria-controls='mainNavbar'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='mainNavbar'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <NavLink to='/' className={linkClass} end>
                  Home
                </NavLink>
              </li>

              <li className='nav-item'>
                <NavLink to='/gallery' className={linkClass}>
                  Gallery
                </NavLink>
              </li>

              <li className='nav-item'>
                <NavLink to='/problems' className={linkClass}>
                  Problems
                </NavLink>
              </li>

              <li className='nav-item'>
                <NavLink to='/testimonials' className={linkClass}>
                  Testimonials
                </NavLink>
              </li>

              <li className='nav-item'>
                <NavLink to='/contact' className={linkClass}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
