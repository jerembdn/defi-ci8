import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import Head, { HeadProps } from "../Head";
import Header, { NavLink } from "../Header";

type Props = {
  head: HeadProps;
  children?: React.ReactNode;
};

const Page: React.FC<Props> = ({ head, children }: Props) => {
  const navLinks: NavLink[] = [
    {
      label: "Accueil",
      href: "/#home",
    },
    {
      label: "Planning",
      href: "/#planning",
    },
  ];

  return (
    <>
      <Head {...head} />

      <Container>
        <Header navLinks={navLinks} />
        {children}
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

export default Page;
