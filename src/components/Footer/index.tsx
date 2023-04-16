import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Icon from "../Icon";
import Image from "../Image";
import Link from "../Link";

const Footer: React.FC = () => {
  const handleTopPage = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleParticipate = () => {
    window.open("https://forms.gle/gi9XtgSm1aXca47w7", "_blank");
  };

  return (
    <Background>
      <Container>
        <Header>
          <Logo
            onClick={handleTopPage}
            src="/static/images/logo/logo.png"
            alt={
              "Logo de la 8ème compagnie - 46ème promotion aux couleurs de la lutte contre le cancer du sein"
            }
          />

          <CTA>
            <Text>Prêt(e) à relever le défi ?</Text>
            <ActionButton onClick={handleParticipate}>
              {"Participer à la course"}
            </ActionButton>
          </CTA>
        </Header>

        <Separator />

        <Social>
          <FooterLink
            href={"https://www.facebook.com/profile.php?id=100090906344713"}
          >
            {"Retrouvez nous sur Facebook"}
          </FooterLink>

          <SocialList>
            <SocialItem>
              <FooterLink
                href={"https://www.facebook.com/profile.php?id=100090906344713"}
              >
                <FooterIcon name={"facebook"} />
              </FooterLink>
            </SocialItem>
            <SocialItem>
              <FooterLink href={"mailto:ci8.defisocial@gmail.com"}>
                <FooterIcon name={"mail"} />
              </FooterLink>
            </SocialItem>
          </SocialList>
        </Social>
      </Container>
    </Background>
  );
};

const Background = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

const Container = styled.footer`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  margin: 55px auto;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Logo = styled(Image)`
  width: 100px;
  height: 100px;
`;

const Text = styled.p`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.weight.medium};
`;

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    flex-direction: row;
    gap: 15px;
    margin-top: 0;
  }
`;

const ActionButton = styled(Button)`
  margin-top: 15px;

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    margin-top: 0;
  }
`;

const Separator = styled.div`
  width: 100%;
  height: 3px;
  margin: 40px 0;
  background-color: ${({ theme }) => theme.colors.background.secondary};

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    margin: 50px 0;
  }
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.weight.medium};
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const SocialList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
`;

const SocialItem = styled.li``;

const FooterIcon = styled(Icon)`
  font-size: ${({ theme }) => theme.size.large};
  font-weight: ${({ theme }) => theme.weight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export default Footer;
