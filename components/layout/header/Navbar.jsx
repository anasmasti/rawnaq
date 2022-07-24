import Logo from "../../shared/Logo";
import NavItems from "./NavItems";
import SearchBar from "../../shared/SearchBar";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";

export default function NavBar() {
  return (
    <>
      <MobileMenu />
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Logo />
          <div className="flex md:order-2">
            <SearchBar />
            <MobileMenuButton />
          </div>
          <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
            <NavItems />
          </div>
        </div>
      </nav>
    </>
  );
}