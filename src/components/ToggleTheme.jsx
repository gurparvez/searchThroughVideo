import React, { useEffect, useState } from 'react'

const ToggleTheme = () => {

  const [themeMode, setThemeMode] = useState('light')

  const lightMode = () => {
    setThemeMode('dark')
  }

  const darkMode = () => {
    setThemeMode('light')
  }

  const onChangeTheme = (e) => {
    const darkModeStatus = e.currentTarget.checked
    if (darkModeStatus) {
      lightMode()
    } else {
      darkMode()
    }
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <div>
      toggleTheme
      <input type="checkbox" value="" onChange={onChangeTheme} checked={themeMode === 'dark'} />
    </div>
  )
}

export default ToggleTheme