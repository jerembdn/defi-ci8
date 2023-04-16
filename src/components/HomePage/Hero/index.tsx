import Button from "@/components/Button";
import useBreakpoint from "@/hooks/useBreakpoint";
import React from "react";
import styled from "styled-components";

const HomePageHero: React.FC = () => {
  const { isMobile } = useBreakpoint();

  const handleDiscover = () => {
    const eventDescription = document.getElementById("event-description");

    if (eventDescription) {
      eventDescription.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleParticipate = () => {
    window.open("https://forms.gle/gi9XtgSm1aXca47w7", "_blank");
  };

  return (
    <Container>
      <Title>
        Courez et marchez pour l’espoir d’une vie
        {!isMobile ? <br /> : " "}
        sans cancer du sein
      </Title>
      <Description>
        Participez à une course d’orientation pour
        {!isMobile ? <br /> : " "}la lutte contre le cancer du sein.
      </Description>

      <HeroActions>
        <Button mode={"outline"} onClick={handleDiscover}>
          Découvrir le défi
        </Button>
        <Button onClick={handleParticipate}>Participer à la course</Button>
      </HeroActions>
    </Container>
  );
};

const Container = styled.section`
  margin: 35px 30px 0 30px;

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    margin: 100px 0 0 0;
    padding-top: 105px;
  }
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.size.extraTitle};
  font-weight: ${({ theme }) => theme.weight.semiBold};
  text-align: center;
`;

const Description = styled.p`
  margin-top: 20px;
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.weight.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    margin-top: 35px;
  }
`;

const HeroActions = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    margin-top: 35px;
    gap: 20px;
    flex-direction: row;
  }
`;

export default HomePageHero;
