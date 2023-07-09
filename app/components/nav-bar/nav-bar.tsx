import { Link } from '@remix-run/react';

import Logo from '../logo/logo';
import { Button } from '../ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';

function NavBar() {
  return (
    <header className="flex justify-center py-5">
      <nav className="flex justify-between items-center max-w-screen-lg flex-grow">
        <Logo />
        <div className="mr-2 md:hidden">
          <NavigationMenu className="font-semibold">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg">
                  Menu
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 cursor-pointer w-[6rem] p-2">
                    <li>
                      <NavigationMenuLink>
                        <Link to="/login">Log in</Link>
                      </NavigationMenuLink>
                    </li>
                    <li className="w-full">
                      <NavigationMenuLink>
                        <Link to="/about">About us</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden md:flex">
          <Button className="mr-2" variant="link">
            <Link to="/about">About</Link>
          </Button>
          <Button className="mr-2" variant="outline">
            <Link to="/login">Login</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
export default NavBar;
