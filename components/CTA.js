import styled from "styled-components";
import Link from "next/link";

const Wrapper = styled.div`
  @media (min-width: 1024px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    & h2 {
      font-size: 2.25rem;
    }
    & h3 {
      font-size: 1.25rem;
    }
  }
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-left: auto;
  text-align: center;
  margin-right: auto;
  justify-content: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  & div {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
`;

const Button = styled.a`
  @media (min-width: 640px) {
    display: inline-flex;
    width: auto;
  }
  cursor: pointer;
  margin-top: 1rem;
  transition-duration: 150ms;
  transition-property: color, background-color, border-color, text-shadow;
  color: white;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.12);
  padding: 0.75rem 1.5rem;
  line-height: 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
  border-color: transparent;
  border: 1px;
  width: 90%;
  background-color: #54baeb;
  background-image: linear-gradient(
    rgba(84, 186, 235, 0.5),
    rgba(0, 112, 175, 0.5)
  );
  &:hover {
    background-color: #0070af;

    text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
  }
`;

const SecButton = styled(Button)`
  margin-left: 2rem;
  color: #54baeb;
  background-color: #e5edff;
  background-image: none;
  &:hover {
    background-color: #c9cfde;
    color: #fff;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
  }
`;

export const CTA = ({ props }) => {
  const ctadata = props[0];
  const data = {
    title: ctadata.title[0].text,
    sub: ctadata.subtitle[0].text,
    cta1: ctadata.cta1_label,
    cta1_url: ctadata.cta1_url,
    cta2: ctadata.cta2_label,
    cta2_url: ctadata.cta2.url,
  };
  return (
    <Wrapper>
      <h2>{data.title}</h2>
      <h3>{data.sub}</h3>
      <div>
        <Link href={data.cta2_url} passHref={true} prefetch={false}>
          <Button>{data.cta1}</Button>
        </Link>
        <Link href={data.cta2_url} passHref={true} prefetch={false}>
          <SecButton>{data.cta2}</SecButton>
        </Link>
      </div>
    </Wrapper>
  );
};
