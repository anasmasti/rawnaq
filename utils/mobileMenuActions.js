
export let mobileMenu = process.browser && document.querySelector("#mobile-menu");

export function openMobileMenu() {
  mobileMenu.classList.remove("hidden");
}

export function hideMobileMenu() {
  mobileMenu.classList.add("hidden");
}