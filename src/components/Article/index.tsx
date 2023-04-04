import React from "react";
import styled from "styled-components";
import Badge from "../Badge";
import Image from "../Image";

type Props = {
  thumbnail: {
    src: string;
    alt: string;
  };
  badgeValue: string;
  title: string;
  subtitle?: string;
  description: string | React.ReactNode;
  reversed?: boolean;
};

const Article: React.FC<Props> = ({
  thumbnail,
  badgeValue,
  title,
  subtitle,
  description,
  reversed = false,
}: Props) => {
  return (
    <Container reversed={reversed}>
      <Content>
        <Badge value={badgeValue} />

        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        <Description>{description}</Description>
      </Content>

      <ThumbnailContainer>
        <Thumbnail src={thumbnail.src} alt={thumbnail.alt} />
      </ThumbnailContainer>
    </Container>
  );
};

const Container = styled.article<{ reversed: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    flex-direction: ${({ reversed }) => (!reversed ? "row-reverse" : "row")};
    align-items: stretch;
    height: auto;
    gap: 100px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    flex-grow: 1;
    width: fit-content;
  }
`;

const Title = styled.h2`
  margin-top: 20px;
  font-size: ${({ theme }) => theme.size.medium};
  font-weight: ${({ theme }) => theme.weight.semiBold};
`;

const Subtitle = styled.h3`
  margin-top: 20px;
  font-size: ${({ theme }) => theme.size.normal};
  font-weight: ${({ theme }) => theme.weight.medium};
`;

const Description = styled.p`
  margin-top: 20px;
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.weight.regular};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const ThumbnailContainer = styled.div`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    margin-top: 0;
    max-height: none;
    height: 100%;
  }
`;

const Thumbnail = styled(Image)`
  max-height: 200px;
  width: 100%;
  object-fit: cover;
  outline: 1px solid #e5e5e5;
  border-radius: 10px;

  @media (min-width: ${({ theme }) => theme.breakpoint.laptop}) {
    max-height: none;
    height: 300px;
  }
`;

export default Article;
