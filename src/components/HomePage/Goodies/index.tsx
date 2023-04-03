import Article from "@/components/Article";
import React from "react";
import styled from "styled-components";

const HomePageGoodiesSection = () => {
  return (
    <Container>
      <Article
        thumbnail={{
          src: "/static/images/articles/ci8.png",
          alt: "Compagnie 8ème promotion",
        }}
        badgeValue={"Souvenirs de la journée"}
        title={"Stand de Goodies"}
        description={
          <>
            Parce ce qu’il est toujours mieux de repartir avec des souvenirs
            d’une journée importante.
            <br />
            <br />
            Un stand de goodies sera tenu par nos camarades de la 8ème compagnie
            où vous pourrez acheter des souvenirs de l’événement (rondache à
            l’effigie de l’événement...)
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

export default HomePageGoodiesSection;
