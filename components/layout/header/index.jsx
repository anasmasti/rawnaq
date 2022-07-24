import Logo from "../../shared/Logo";
import NavItems from "./NavItems";
import SearchBar from "../../shared/SearchBar";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";
import SocialMediaLinks from "../../shared/SocialMediaLinks";

export default function Header() {
  return (
    <header>
      <MobileMenu />
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
        <div className="flex justify-between items-center mx-9 mb-5">
          <SocialMediaLinks theme='dark' />
          <Logo />
          <SearchBar />
          <MobileMenuButton />
        </div>
        <div className="hidden w-ful lg:flex lg:justify-center lg:items-center md:flex md:justify-center md:items-center  ">
          <NavItems />
        </div>
      </nav>
    </header>
  );
}
