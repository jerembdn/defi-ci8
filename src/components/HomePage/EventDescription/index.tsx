import Article from "@/components/Article";
import React from "react";
import styled from "styled-components";

const HomePageEventDescription: React.FC = () => {
  return (
    <Container id={"event-description"}>
      <Header>
        <PreTitle>L&apos;événement aura lieu le</PreTitle>
        <Title>29 avril 2023</Title>
      </Header>

      <Content>
        <Article
          thumbnail={{
            src: "/static/images/articles/marche-droits-des-femmes-gendarmerie-dijon-solidarite-femme.png",
            alt: "Marche Droits des Femmes Gendarmerie Dijon Solidarité Femme",
          }}
          badgeValue={"Lutte contre le cancer du sein"}
          title={
            "Un événement organisé au profit de la lutte contre le cancer du sein"
          }
          subtitle={
            "Les fonds récoltés lors de cette journée seront reversés à l’association marraine CARPEDIEM21."
          }
          description={
            "Cet événement est ouvert à tout le monde. Il se déroulera le samedi 29 avril 2023 sur le plateau de Chenôve (21300) avec différentes courses/marches d’orientations élaborées par LE CLUB DE CO de la ville de Chenôve, que l’on remercie infiniment pour leur aide au bon déroulement du défi."
          }
        />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  margin-top: 55px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PreTitle = styled.h3`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.weight.regular};
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.size.title};
  font-weight: ${({ theme }) => theme.weight.semiBold};
`;

const Content = styled.div`
  margin: 0 30px;
  margin-top: 30px;

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    margin: 30px 0 0 0;
  }
`;

export default HomePageEventDescription;
