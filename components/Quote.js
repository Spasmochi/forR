import styled from "styled-components";

const Wrapper = styled.div`
  @media (min-width: 640px) {
    padding-top: 5rem;
    padding-bottom: 5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (min-width: 1024px) {
    padding-top: 6rem;
    padding-bottom: 6rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  display: flex;
  overflow: hidden;
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
`;
const BlockQuote = styled.blockquote`
  max-width: 48rem;
  font-size: 1.5rem;
  line-height: 2.25rem;
  position: relative;
  &::before {
    @media (min-width: 1024px) {
      left: -67px;
      top: 0px;
    }
    content: "";
    left: 0px;
    top: -50px;
    position: absolute;
    height: 48px;
    width: 56px;
    background-size: cover;
    background-image: url(https://api.iconify.design/mdi:format-quote-open.svg);
  }
  & p {
    font-size: 1.25rem;
    color: #6b7280;
  }
  & span {
    color: #123b5f;
  }
`;

export const Quote = ({ props }) => {
  const quote = { text: props[0].text };
  return (
    <Wrapper>
      <BlockQuote>
        <span>{quote.text}</span>
        <p>- Aga Strzemeska, Head of People Operations, Marley Spoon</p>
      </BlockQuote>
    </Wrapper>
  );
};
