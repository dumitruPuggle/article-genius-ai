import useDarkMode from "use-dark-mode";

interface IDarkMode {
  dark: JSX.Element;
  light: JSX.Element;
}

export function DarkMode({dark, light}: IDarkMode) {
  const darkMode = useDarkMode(false)
  if (darkMode.value) {
    return dark
  }
  return (
    light
  )
}