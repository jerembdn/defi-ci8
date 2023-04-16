import Article from "@/components/Article";
import React from "react";
import styled from "styled-components";

const HomePageActivities: React.FC = () => {
  return (
    <Container>
      <Article
        thumbnail={{
          src: "/static/images/articles/defi-social.png",
          alt: "Gendarmes",
        }}
        badgeValue={"Restauration & activités"}
        title={"Ravitaillements et stands d’informations sur des thèmes variés"}
        description={
          <>
            Durant cette journée, vous aurez la possibilité de vous ravitailler
            avec différents stands à votre disposition :
            <br />
            <UnordonnedList>
              <li>Stands de boissons</li>
              <li>Stands de nourritures</li>
            </UnordonnedList>
            <br />
            A l’issue des courses/marches, vous retrouverez des stands
            d’informations tenus par des professionnels sur des thèmes variés :
            <br />
            <UnordonnedList>
              <li>Lutte contre le cancer du sein</li>
              <li>Gendarmerie Nationale et ses métiers</li>
            </UnordonnedList>
          </>
        }
      />
    </Container>
  );
};

const Container = styled.section`
  margin: 75px 30px 0 30px;

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    margin: 75px 0 0 0;
  }
`;

const UnordonnedList = styled.ul`
  list-style: disc;
  padding-left: 30px;
`;

export default HomePageActivities;
