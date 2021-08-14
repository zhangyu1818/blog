export type ThemeValue = 'light' | 'dark'

const getTheme = (): ThemeValue => {
  const selectedColor = document.documentElement.dataset['selected-color']
  if (selectedColor) {
    return selectedColor as ThemeValue
  }
  let theme: ThemeValue = 'light'
  let pref = window.matchMedia('(prefers-color-scheme: light)')
  if (pref.matches) theme = 'light'
  pref = window.matchMedia('(prefers-color-scheme: dark)')
  if (pref.matches) theme = 'dark'
  return theme
}

export default getTheme
