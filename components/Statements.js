import { RichText, linkResolver } from "prismic-reactjs";
import styled from "styled-components";

const OuterWrapper = styled.div`
  @media (min-width: 640px) {
  }
  @media (min-width: 1024px) {
  }
  margin-left: auto;
  margin-right: auto;
  & h2 {
    font-size: 1.7em;
    margin-top: 1.9em;
    margin-bottom: 1em;
    line-height: 1.33em;
  }
  & p {
    line-height: 2rem;
    font-size: 1.25rem;
    color: #6b7280;
  }
`;

const InnerWrapper = styled.div`
  @media (min-width: 640px) {
  }
  @media (min-width: 1024px) {
    max-width: 66%;
    padding-left: 0;
    padding-right: 0;
  }
  max-width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const Statements = ({ props }) => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        {props.map((slice, index) =>
          RichText.render(slice.primary.text, linkResolver)
        )}
      </InnerWrapper>
    </OuterWrapper>
  );
};
