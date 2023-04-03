import Badge from "@/components/Badge";
import Button from "@/components/Button";
import Image from "@/components/Image";
import React from "react";
import styled from "styled-components";

const HomePageInscriptionPricing: React.FC = () => {
  const handleParticipate = () => {
    window.open("https://forms.gle/gi9XtgSm1aXca47w7", "_blank");
  };

  return (
    <Container>
      <Content>
        <Badge value={"S’inscrire à l’événement"} />
        <Title>Inscriptions à 19€/personne</Title>
        <Description>
          Les inscriptions se font directement sur le site internet. Un T-shirt
          à l’effigie du défi social ainsi que le repas du midi (saucisse ou
          merguez + frites + boisson) vous seront fournis. Vous devez respecter
          3 conditions pour vous inscrire qui dès lors seront respectées, un
          numéro de groupe de vous sera attribué sur l’adresse électronique
          renseignée dans le dossier d’inscription.
          <br />
          <br />
          Lors de votre arrivée sur le lieu du défi, vous récupérerez auprès de
          l’accueil en nous renseignant votre numéro de groupe, les T-Shirts
          ainsi que les coupons pour vos repas.
          <br />
          <br />
          Voici les 3 conditions pour vous inscrire :
        </Description>
      </Content>

      <Instructions>
        <Cards>
          <Card>
            <CardIcon
              src={"/static/images/logo/google-forms.png"}
              alt={"Google Forms"}
            />
            <CardTitle>Remplissez le formulaire d’inscription</CardTitle>
          </Card>

          <Card>
            <CardIcon
              src={"/static/images/logo/cagnotte.png"}
              alt={"Cagnotte"}
            />
            <CardTitle>
              Réglez le montant de participation via la cagnotte
            </CardTitle>
          </Card>
        </Cards>

        <ThumbnailContainer>
          <Thumbnail
            src="/static/images/thumbnails/people-running.png"
            alt="Personnes en train de courir"
          />
        </ThumbnailContainer>
      </Instructions>

      <JoinButton onClick={handleParticipate}>
        {"S’inscrire pour la course d’orientation"}
      </JoinButton>
    </Container>
  );
};

const Container = styled.article`
  margin: 75px 30px 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    margin: 75px 0 0 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Title = styled.h2`
  margin-top: 20px;
  font-size: ${({ theme }) => theme.size.medium};
  font-weight: ${({ theme }) => theme.weight.semiBold};
`;

const Description = styled.p`
  margin-top: 20px;
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.weight.regular};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const Instructions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-top: 25px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 25px;

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    width: 30%;
    margin-top: 0;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 35px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  user-select: none;
  cursor: normal;
`;

const CardIcon = styled(Image)`
  width: 30px;
  height: 30px;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 5px;
`;

const CardTitle = styled.h3`
  margin-top: 15px;
  font-size: ${({ theme }) => theme.size.normal};
  font-weight: ${({ theme }) => theme.weight.semiBold};
`;

const ThumbnailContainer = styled.div`
  display: none;
  width: 70%;

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    display: block;
    height: 100%;
    margin-left: 25px;
  }
`;

const Thumbnail = styled(Image)`
  width: 100%;
  height: 363px;
  object-fit: cover;
  border-radius: 10px;
`;

const JoinButton = styled(Button)`
  margin-top: 20px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    margin-top: 40px;
    width: inherit;
  }
`;

export default HomePageInscriptionPricing;
