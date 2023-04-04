import HomePageActivities from "@/components/HomePage/Activities";
import HomePageEventDescription from "@/components/HomePage/EventDescription";
import HomePageGoodiesSection from "@/components/HomePage/Goodies";
import HomePageHero from "@/components/HomePage/Hero";
import HomePageInscriptionPricing from "@/components/HomePage/InscriptionPricing";
import HomePageJackpotSection from "@/components/HomePage/Jackpot";
import HomePageOrganisationDetails from "@/components/HomePage/OrganisationDetails";
import HomePagePlanning from "@/components/HomePage/Planning";
import Page from "@/components/Page";
import { NextPage } from "next";
import React from "react";

const HomePage: NextPage = () => {
  return (
    <Page
      head={{
        title: "Courez pour l’espoir d’une vie sans cancer du sein",
        description:
          "Événement ouvert à tout le monde qui se déroulera le samedi 29 avril 2023 sur le plateau de Chenôve (21300) avec différentes courses d’orientations élaborées par LE CLUB DE CO de la ville de Chenôve, pour lutter contre le cancer du sein.",
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
    </Page>
  );
};

export default HomePage;
