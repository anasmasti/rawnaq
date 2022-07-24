import NavItems from "./NavItems";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { hideMobileMenu } from "../../../utils/mobileMenuActions";

export default function MobileMenu() {
  return (
    <section
      id="mobile-menu"
      className="w-screen h-screen bg-neutral-800 flex justify-center items-center flex-col"
    >
      <a onClick={() => hideMobileMenu()} className="mb-10">
        <AiOutlineCloseCircle className="w-8 h-8 text-neutral-200 cursor-pointer" />
      </a>
      <NavItems />
    </section>
  );
}