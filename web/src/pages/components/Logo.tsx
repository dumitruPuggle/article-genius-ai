import ImageLogoBlack from "../../pages/assets/logo-white.png";
import ImageLogoWhite from "../../pages/assets/logo.png";
import Image from "next/image";
import { DarkMode } from "./DarkMode";

export function Logo() {
  return (
    <DarkMode
      light={
        <Image
          draggable={false}
          src={ImageLogoBlack}
          alt=""
          width={126}
          height={125}
        />
      }
      dark={
        <Image
          draggable={false}
          src={ImageLogoWhite}
          alt=""
          width={126}
          height={125}
        />
      }
    />
  );
}
