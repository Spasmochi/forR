import styled from "styled-components";

const Wrapper = styled.div`
  @media (min-width: 1024px) {
    background-image: url("https://res.cloudinary.com/dy4xcthnz/image/upload/v1602148496/photo-1490818387583-1baba5e638af_hhx5aw.jpg");
  }
  background-image: none;
  background-repeat: no-repeat;
  background-size: cover;
  max-height: 60rem;
  width: 100%;
`;

export const Background = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
