import Image from "next/image";
import logo from "../public/next-high-resolution-logo-black-transparent.png";

export const Header = () => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <Image src={logo} alt="Logo NEXT chat" width={200} height={100} />
    </div>
  );
};
