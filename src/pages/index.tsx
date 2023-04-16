import HomePageActivities from "@/components/HomePage/Activities";
import HomePageEventDescription from "@/components/HomePage/EventDescription";
import HomePageGoodiesSection from "@/components/HomePage/Goodies";
import HomePageHero from "@/components/HomePage/Hero";
import HomePageInscriptionPricing from "@/components/HomePage/InscriptionPricing";
import HomePageJackpotSection from "@/components/HomePage/Jackpot";
import HomePageOrganisationDetails from "@/components/HomePage/OrganisationDetails";
import HomePagePlanning from "@/components/HomePage/Planning";
import Page from "@/components/Page";
import useBreakpoint from "@/hooks/useBreakpoint";
import { NextPage } from "next";

import Button from "@/components/Button";
import styled from "styled-components";

import React from "react";

const HomePage: NextPage = () => {
  const { isMobile } = useBreakpoint();

  const handleParticipate = () => {
    window.open("https://forms.gle/gi9XtgSm1aXca47w7", "_blank");
  };

  const handleTopPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Page
      head={{
        title: "Courez pour l’espoir d’une vie sans cancer du sein",
        description:
          "Événement ouvert à tout le monde qui se déroulera le samedi 29 avril 2023 sur le plateau de Chenôve (21300) avec différentes courses/marches d’orientations élaborées par LE CLUB DE CO de la ville de Chenôve, pour lutter contre le cancer du sein.",
      }}
    >
      <HomePageHero />
      <HomePageOrganisationDetails />

      <HomePageEventDescription />

      <HomePageInscriptionPricing />

      <HomePageActivities />

      <HomePagePlanning />

      <HomePageGoodiesSection />

      <HomePageJackpotSection />

      <ActionButton onClick={handleTopPage}>
        <i className="ri-arrow-up-line"></i>
      </ActionButton>

      <CounterButton onClick={handleParticipate}>
        {isMobile ? "115 participants 🏃" : "Courez avec 115 participants 🏃"}
      </CounterButton>
    </Page>
  );
};

const ActionButton = styled(Button)`
  position: fixed;
  bottom: 30px;
  right: 30px;

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    width: fit-content;
  }
`;

const CounterButton = styled(Button)`
  position: fixed;
  bottom: 30px;
  left: 30px;
  background-color: ${({ theme }) => theme.colors.background.primary};
  outline: 2px solid ${({ theme }) => theme.colors.primary};

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    width: fit-content;
  }
`;

export default HomePage;
