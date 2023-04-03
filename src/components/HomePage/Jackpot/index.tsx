import Article from "@/components/Article";
import Button from "@/components/Button";
import React from "react";
import styled from "styled-components";

const HomePageJackpotSection: React.FC = () => {
  const handleJackpot = () => {
    window.open(
      "https://lydia-app.com/pots?id=37242-defi-social-8-eme-compagnie",
      "_blank"
    );
  };

  return (
    <Container>
      <Article
        thumbnail={{
          src: "/static/images/articles/jackpot.png",
          alt: "Cagnotte en ligne",
        }}
        badgeValue={"Cagnotte du défi social"}
        title={"Faire un don ou payer votre inscription ?"}
        description={
          <>
            Vous souhaitez faire une simple donation pour le défi social ? Vous
            êtes inscrits et vous voulez régler votre inscription ?
            <br />
            <br />
            La cagnotte Lydia n’impose pas de limite de montant. Les paiements
            sont sécurisés et directement crédités au profit de la lutte contre
            le cancer du sein.
          </>
        }
        reversed={true}
      />

      <ActionButton onClick={handleJackpot}>
        {"Me rediriger vers la cagnotte Lydia"}
      </ActionButton>
    </Container>
  );
};

const Container = styled.section`
  margin: 75px 30px 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    margin: 75px 0 0 0;
  }
`;

const ActionButton = styled(Button)`
  margin-top: 40px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    width: fit-content;
  }
`;

export default HomePageJackpotSection;
