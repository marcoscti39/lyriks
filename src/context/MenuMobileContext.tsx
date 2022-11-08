import React from "react";

interface MenuMobileContextTypes {
  isMenuMobileOpen: boolean;
  setIsMenuMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuMobileContext = React.createContext({} as MenuMobileContextTypes);

export const useMenuMobileContext = () => React.useContext(MenuMobileContext);

const MenuMobileProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = React.useState(false);
  return (
    <>
      <MenuMobileContext.Provider
        value={{ isMenuMobileOpen, setIsMenuMobileOpen }}
      >
        {children}
      </MenuMobileContext.Provider>
    </>
  );
};

export default MenuMobileProvider;
