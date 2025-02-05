import type React from "react";
import styled from "styled-components";

type Props = {
  mode?: "primary" | "outline";
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<Props> = ({
  mode = "primary",
  onClick,
  children,
  disabled = false,
  className,
}: Props) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Container
      mode={mode}
      onClick={handleClick}
      className={className}
      disabled={disabled}
    >
      {children}
    </Container>
  );
};

const Container = styled.button<Partial<Props>>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 20px;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ theme }) => theme.weight.semiBold};

  ${({ theme, mode }) => {
    if (mode === "primary") {
      return `
          background-color: ${theme.colors.background.secondary};
          color: ${theme.colors.primary};
          border: none;
        `;
    }

    return `
        background-color: transparent;
        color: ${theme.colors.text.primary};
        border: 1px solid ${theme.colors.border.button};
      `;
  }}

  &:hover {
    ${({ theme, mode }) => {
      if (mode === "primary") {
        return `
          background-color: ${theme.colors.primary};
          color: ${theme.colors.background.primary}
        `;
      }

      return `
        filter: brightness(0.9);
      `;
    }}
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.border.button};
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

export default Button;
