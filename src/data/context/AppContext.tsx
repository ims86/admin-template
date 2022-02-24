import { createContext, useState } from 'react';

type TypeTema = 'dark' | '';

interface ThemeProps {
  theme?: TypeTema;
  alterTheme?: () => void;
}
const AppContext = createContext<ThemeProps>({});

export function AppProvider(props) {
  const [theme, setTheme] = useState<TypeTema>('');

  function alterTheme() {
    setTheme(theme === '' ? 'dark' : '');
  }
  return (
    <AppContext.Provider value={{ theme, alterTheme }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContext;

export const AppConsumer = AppContext.Consumer;
