import { Link, useLocation } from 'react-router-dom'
import cn from 'classnames'
import { useThemeContext } from '../store'
import { ToggleSwitch } from './ToggleSwitch'

export const NavBar = () => {
  const [state] = useThemeContext()
  const location = useLocation()

  return (
    <nav className={`navbar navbar-expand-lg navbar-${state.theme} bg-${state.theme} justify-content-between`}>
      <Link className="navbar-brand" to="/">Awesome Dev!</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
          <li className={cn('nav-item', {active: location.pathname === '/'})}>
            <Link className="nav-link" to="/">Home{' '}
              {location.pathname === '/' && <span className="sr-only">(current)</span>}
            </Link>
          </li>
          <li className={cn('nav-item', {active: location.pathname === '/portfolio'})}>
            <Link className="nav-link" to="/portfolio">Portfolio{' '}
              {location.pathname === '/portfolio' && <span className="sr-only">(current)</span>}
            </Link>
          </li>
          <li className={cn('nav-item', {active: location.pathname === '/contact'})}>
            <Link className="nav-link" to="/contact">Contact{' '}
              {location.pathname === '/contact' && <span className="sr-only">(current)</span>}
            </Link>
          </li>
        </ul>
      </div>

      <ToggleSwitch />
    </nav>
  )
}
