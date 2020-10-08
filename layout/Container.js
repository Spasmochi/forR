import styled from "styled-components";

const Wrapper = styled.div`
  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
`;

export const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
