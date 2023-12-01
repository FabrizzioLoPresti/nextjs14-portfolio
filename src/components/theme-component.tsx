'use client';

import { useState, useEffect } from 'react';
import { Switch } from '@nextui-org/react';
import { MoonIcon } from './moon-icon';
import { SunIcon } from './sun-icon';
import { useTheme } from 'next-themes';

type Props = {};

const ThemeComponent = (props: Props) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <Switch size="lg" color="secondary" defaultSelected />;

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <Switch
      isSelected={theme === 'dark'}
      size="lg"
      color="secondary"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      onChange={toggleTheme}
    />
  );
};

export default ThemeComponent;
