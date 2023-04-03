import Badge from "@/components/Badge";
import React from "react";
import styled from "styled-components";

const HomePageOrganisationDetails: React.FC = () => {
  return (
    <Container>
      <ResponsiveContainer>
        <Logo>
          <svg
            width="73"
            height="90"
            viewBox="0 0 73 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M72.6107 82.2764C63.6576 72.9818 54.3153 62.3127 46.4651 52.0364C54.6397 39.5345 63.5928 21.9273 50.0982 11.2582C49.8387 5.76 44.1944 0 36.5388 0C28.8833 0 23.2389 5.76 22.9145 11.2582C11.042 20.6836 15.9078 36.3273 26.3531 52.0364C18.1785 62.5745 9.03075 73.3091 0.402042 82.2764C0.0776544 82.5382 -0.116978 82.9964 0.0776544 83.3891C0.272287 83.7818 0.596675 84.24 0.921062 84.3709L13.7019 89.8691C13.8966 90 14.221 90 14.3507 90C14.8697 90 15.3239 89.8691 15.7131 89.4109C22.2009 82.4073 29.6618 74.0945 36.3442 65.7818C43.351 74.3564 50.8119 82.5382 57.1699 89.4109C57.4943 89.6727 58.0133 90 58.5323 90C58.8567 90 59.0513 90 59.1811 89.8691L72.1566 84.3709C72.6756 84.24 73 83.7818 73 83.3891C72.9351 82.9964 72.9351 82.6036 72.6107 82.2764ZM26.0287 12.24C28.0399 8.18182 44.9729 8.18182 46.9841 12.24C48.1519 16.4291 44.6485 25.0691 36.3442 37.7018C29.013 26.3127 24.7311 16.8873 26.0287 12.24ZM34.9818 41.4327L34.852 41.2364C34.852 41.3018 34.9169 41.3673 34.9818 41.4327Z"
              fill="#F5067B"
            />
          </svg>
        </Logo>

        <Title>
          <Badge value={"Événement organisé par"} />
          <Name>8e Compagnie Instruction école de Gendarmerie de Dijon</Name>
        </Title>
      </ResponsiveContainer>

      <Description>
        Tout au long de la journée, plusieurs stands d’informations vous seront
        proposés en lien avec la lutte contre le cancer mais aussi sur la
        découverte des différents métiers de la Gendarmerie.
        <br />
        <br />
        Lors de l’inscription, des numéros de groupe vous seront attribués.
        Gardez-le précieusement en tête car il vous permettra peut-être de
        gagner des lots, lors du tirage au sort.
      </Description>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  background-color: ${({ theme }) => theme.colors.background.secondary};

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    padding: 0;
    border-radius: 20px;
    flex-direction: row;
    justify-content: space-between;
    gap: 100px;
  }
`;

const ResponsiveContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 30px;

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    flex-direction: row-reverse;
    gap: 100px;
    margin: 0 0 0 70px;
  }
`;

const Title = styled.div`
  margin-top: 50px;

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    margin-top: 0;
  }
`;

const Logo = styled.div``;

const Name = styled.h2`
  margin-top: 13px;
  font-size: ${({ theme }) => theme.size.large};
  font-weight: ${({ theme }) => theme.weight.semiBold};
  color: ${({ theme }) => theme.colors.primary};
  max-width: 500px;
`;

const Description = styled.p`
  margin: 0 30px;
  margin-top: 30px;
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.weight.regular};
  max-width: 500px;

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    margin-top: 0;
    margin: 60px 70px 60px 0;
  }
`;

export default HomePageOrganisationDetails;
