import { Outlet } from 'react-router-dom'
import cn from 'classnames'
import { DARK, LIGHT } from '../constants/theme'
import { useThemeContext } from '../store'
import { NavBar } from '../components/NavBar'
import "../design/scss/_layout.scss"

export const Main = () => {
  const [state] = useThemeContext()

  return (
    <div className={cn(`app bg-${state.theme}`, {
      "text-light": state.theme === DARK,
      "text-dark" : state.theme === LIGHT,
    })}>
      <NavBar />
      <Outlet />
    </div>
  )
}
