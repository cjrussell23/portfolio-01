import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export default function DesktopMenu({ menuItems }) {
  return (
    <NavigationMenu
      className="tw-hidden md:tw-flex tw-items-center tw-justify-center"
      id="desktop-menu"
    >
      <NavigationMenuList className="tw-items-center tw-justify-center tw-gap-8 lg:tw-hidden">
        {menuItems.map((item, index) => (
          <NavigationMenuItem key={index}>{item}</NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <NavigationMenuList className="tw-items-center tw-justify-center tw-gap-8 tw-hidden lg:tw-flex">
        <NavigationMenuItem>{menuItems.slice(-1)}</NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
