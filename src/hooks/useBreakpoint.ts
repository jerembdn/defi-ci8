import { useMediaQuery } from "@react-hook/media-query";
import { useTheme } from "styled-components";

const useBreakpoint = (): {
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isDesktop: boolean;
} => {
  const theme = useTheme();

  return {
    isMobile: useMediaQuery(`(max-width: ${theme.breakpoint.mobile})`),
    isTablet: useMediaQuery(`(max-width: ${theme.breakpoint.tablet})`),
    isLaptop: useMediaQuery(`(max-width: ${theme.breakpoint.laptop})`),
    isDesktop: useMediaQuery(`(max-width: ${theme.breakpoint.desktop})`),
  };
};

export default useBreakpoint;
