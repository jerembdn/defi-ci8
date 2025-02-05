import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Image from "../Image";
import Link from "../Link";

type NavLink = {
  label: string;
  href: string;
};

type Props = {
  navLinks: NavLink[];
};

const Header: React.FC<Props> = ({ navLinks }: Props) => {
  const handleTopPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleParticipate = () => {
    window.open("https://forms.gle/gi9XtgSm1aXca47w7", "_blank");
  };

  const [isSticky, setIsSticky] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container isSticky={isSticky} id="home">
      <Brand>
        <Logo
          onClick={handleTopPage}
          src="/static/images/logo/logo.png"
          alt={
            "Logo de la 8ème compagnie - 46ème promotion aux couleurs de la lutte contre le cancer du sein"
          }
        />
      </Brand>

      <LaptopContainer>
        <Navigation>
          <NavLinks>
            {navLinks.map((link: NavLink, index: number) => (
              <NavItem key={index}>
                <Link href={link.href}>{link.label}</Link>
              </NavItem>
            ))}
          </NavLinks>
        </Navigation>

        <Actions>
          <Button onClick={handleParticipate} disabled>
            {"Participer à la course"}
          </Button>
        </Actions>
      </LaptopContainer>
    </Container>
  );
};

const Container = styled.header<{ isSticky: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 45px;

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    position: fixed;
    top: 0;
    max-width: 1200px;
    margin: 0 auto;
    z-index: 999;
    padding-top: ${({ isSticky }) => (isSticky ? "10px" : "45px")};
    padding-bottom: ${({ isSticky }) => (isSticky ? "10px" : "0px")};
    transition: all 0.3s ease-in-out;
    background-color: ${({ theme }) => theme.colors.background.primary};
    backdrop-filter: blur(5px);
    outline: 1px solid ${({ theme }) => theme.colors.background.primary};
  }
`;

const Brand = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    justify-content: flex-start;
    width: fit-content;
  }
`;

const Logo = styled(Image)`
  width: 60px;
  height: 60px;
`;

const LaptopContainer = styled.div`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

const Navigation = styled.nav`
  margin-left: 60px;
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const NavItem = styled.li``;

const Actions = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

export type { NavLink };
export default Header;
