import useDarkMode from "use-dark-mode"
import ImageLogoBlack from "../../pages/assets/logo-white.png";
import ImageLogoWhite from '../../pages/assets/logo.png'
import Image from "next/image";

export function Logo () {
  const darkMode = useDarkMode()
  const isDarkMode = darkMode.value
  if (isDarkMode) {
    return <Image draggable={false} src={ImageLogoWhite} alt="" width={126} height={125} />
  }
  return (
    <Image draggable={false} src={ImageLogoBlack} alt="" width={126} height={125} />
  )
}