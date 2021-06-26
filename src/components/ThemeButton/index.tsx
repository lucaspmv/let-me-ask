import { useTheme } from '../../hooks/useTheme';

import './styles.scss';

export function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="switch">
      <input type="checkbox" onChange={toggleTheme} />
      <span className={theme} />
    </label>
  )
}