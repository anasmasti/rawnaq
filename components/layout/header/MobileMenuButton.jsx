import { useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import {
  hideMobileMenu,
  openMobileMenu,
} from "../../../utils/mobileMenuActions";

export default function MobileMenuButton() {
  useEffect(() => {
    hideMobileMenu();
  }, []);

  return (
    <button
      type="button"
      className="inline-flex items-center p-2 ml-3 text-sm text-neutral-500 rounded-lg md:hidden hover:bg-neutral-100"
      onClick={() => openMobileMenu()}
    >
      <span className="sr-only">Open main menu</span>
      <HiMenuAlt3 className="h-7 w-7 text-neutral-700" />
    </button>
  );
}