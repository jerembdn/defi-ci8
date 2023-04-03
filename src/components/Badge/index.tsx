import React from "react";
import styled from "styled-components";

type Props = {
  value: string;
};

const Badge: React.FC<Props> = ({ value }: Props) => {
  return <Container>{value}</Container>;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  color: ${({ theme }) => theme.colors.primary};
  padding: 10px 12px;
  font-size: ${({ theme }) => theme.size.tiny};
  font-weight: ${({ theme }) => theme.weight.semiBold};
  border-radius: 100px;
  cursor: normal;
  user-select: none;
  text-transform: uppercase;
  width: fit-content;
`;

export default Badge;
