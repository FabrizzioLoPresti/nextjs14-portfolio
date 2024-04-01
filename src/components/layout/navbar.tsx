'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Tooltip,
} from '@nextui-org/react';
import { IconDownload } from '@tabler/icons-react';
import ThemeComponent from './theme-component';

type Props = {};

const NavbarComponent = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuItems = [
    {
      label: 'Resume',
      href: '/about',
    },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="xl">
      <NavbarContent justify="start">
        <NavbarBrand>
          <Link href="/" color="foreground">
            {'<Fabrox />'}
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Tooltip
            content="Download my CV!"
            color="secondary"
            showArrow={true}
            placement="bottom"
          >
            <a
              href={'/FabrizzioLoPresti_CV_English.pdf'}
              download
              color="foreground"
              className="flex flex-row items-center gap-x-1"
            >
              <IconDownload />
              Resume
            </a>
          </Tooltip>
        </NavbarItem>
        <NavbarItem>
          <ThemeComponent />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="sm:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
      </NavbarContent>

      <NavbarMenu className="justify-between">
        <NavbarMenuItem>
          <a
            href={'/FabrizzioLoPresti_CV.pdf'}
            download
            color="foreground"
            className="flex flex-row items-center gap-x-1"
          >
            <IconDownload />
            Resume
          </a>
        </NavbarMenuItem>
        <NavbarMenuItem className="self-end mb-10">
          <ThemeComponent />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarComponent;
