import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useThemeContext } from '../store'
import { TOGGLE_THEME } from '../store/actions'
import { LIGHT, DARK } from '../constants/theme'

export const ToggleSwitch = () => {
  const [state, dispatch] = useThemeContext()

  const toggleTheme = () => {
    dispatch({
      type: TOGGLE_THEME
    })
  }

  return (
    <div className="custom-control custom-switch">
      <input
        type="checkbox"
        className="custom-control-input"
        id="themeSwitch"
        onChange={toggleTheme}
      />
      <label className="custom-control-label" htmlFor="themeSwitch">
        {(state.theme === LIGHT)
          ? <FontAwesomeIcon icon={['fas', 'sun']} className="fa-2x text-warning"/>
          : <FontAwesomeIcon icon={['fas', 'moon']} className="fa-2x text-light" />
        }
        <span className="sr-only">Switch theme to {(state.theme === LIGHT) ? DARK : LIGHT}</span>
      </label>
    </div>
  )
}