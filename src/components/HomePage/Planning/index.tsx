import Badge from "@/components/Badge";
import Button from "@/components/Button";
import type React from "react";
import styled from "styled-components";

const HomePagePlanning: React.FC = () => {
  const handleParticipate = () => {
    window.open("https://forms.gle/gi9XtgSm1aXca47w7", "_blank");
  };

  return (
    <Container id={"planning"}>
      <Header>
        <Badge value={"Programme & Parcours d’orientation"} />
        <Title>Retrouvez le programme & les parcours d’orientation</Title>
      </Header>

      <Content>
        <Cards>
          <Card>
            <CardTitle>09:00</CardTitle>
            <CardSubtlte>Ouverture du site</CardSubtlte>
            <CardContent>Récupération des t-shirts & coupons repas</CardContent>
          </Card>

          <Card>
            <CardTitle>09:30</CardTitle>
            <CardSubtlte>Départ de la 1ère course/marche</CardSubtlte>
          </Card>

          <Card>
            <CardTitle>12:30</CardTitle>
            <CardSubtlte>Pause repas & stands</CardSubtlte>
          </Card>
        </Cards>

        <ActionButton onClick={handleParticipate} disabled>
          {"S’inscrire pour la course d’orientation"}
        </ActionButton>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 75px 30px 0 30px;

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    margin: 75px 0 0 0;
  }
`;

const Header = styled.div`
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    margin-top: 40px;
  }
`;

const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const Card = styled.div`
  flex: 1 1 0px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  padding: 35px;
  border-radius: 10px;
`;

const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.size.extraTitle};
  font-weight: ${({ theme }) => theme.weight.semiBold};
  color: ${({ theme }) => theme.colors.primary};
`;

const CardSubtlte = styled.h4`
  font-size: ${({ theme }) => theme.size.normal};
  font-weight: ${({ theme }) => theme.weight.semiBold};
`;

const CardContent = styled.p`
  font-size: ${({ theme }) => theme.size.small};
`;

const ActionButton = styled(Button)`
  margin-top: 20px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    margin-top: 40px;
    width: fit-content;
  }
`;

export default HomePagePlanning;
