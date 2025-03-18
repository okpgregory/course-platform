import { Menu } from "lucide-react";
import Logo from "../global/logo";

type Props = {};

function Navbar({}: Props) {
  return (
    <header className="w-full flex justify-between items-center sticky top-0 inset-x-0 z-50 py-5 border">
      <Logo />
      <Menu />
    </header>
  );
}

export default Navbar;
