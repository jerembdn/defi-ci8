import type React from "react";
import styled from "styled-components";

type Props = {
  value: string | React.ReactNode;
  color?: "primary" | "warning";
};

const Badge: React.FC<Props> = ({ value, color = "primary" }: Props) => {
  return <Container color={color}>{value}</Container>;
};

const Container = styled.div<{ color: "primary" | "warning" }>`
  display: inline-block;
  padding: 10px 12px;
  font-size: ${({ theme }) => theme.size.tiny};
  font-weight: ${({ theme }) => theme.weight.semiBold};
  border-radius: 100px;
  cursor: normal;
  user-select: none;
  text-transform: uppercase;
  width: fit-content;

  ${({ color, theme }) => {
    switch (color) {
      case "primary":
        return `
          background-color: ${theme.colors.background.secondary};
          color: ${theme.colors.primary};
        `;
      case "warning":
        return `
          background-color: ${theme.colors.warning};
          color: ${theme.colors.background.primary};
        `;
    }
  }}
`;

export default Badge;
