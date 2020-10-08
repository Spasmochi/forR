import styled from "styled-components";

// Layouts
const WrapperOuter = styled.div`
  position: relative;
  background-color: white;
  overflow: hidden;
`;

const WrapperInner = styled.div`
  @media (min-width: 1024px) {
    padding-bottom: 5rem;
  }
  @media (min-width: 1280px) {
    padding-bottom: 6rem;
  }
  position: relative;
  padding-top: 1.5rem;
  padding-bottom: 3rem;
`;

const Content = styled.div`
  @media (min-width: 640px) {
    margin-top: 3rem;
  }
  @media (min-width: 1024px) {
    margin-top: 5rem;
  }
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
`;

const Grid = styled.div`
  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-gap: 2rem;
    gap: 2rem;
  }
`;

// TEXT SECTION
const TextSection = styled.div`
  @media (min-width: 640px) {
    line-height: 1;
    font-size: 4rem;
  }
  @media (min-width: 1024) {
    max-width: 42rem;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 1280px) {
    text-align: left;
    padding-right: 5rem;
    grid-column: span 6 / span 6;
  }

  text-align: center;
  & > img {
    @media (min-width: 1280px) {
      margin-left: 0;
      margin-right: 0;
      max-width: 18rem;
    }
    margin-left: auto;
    margin-right: auto;
    max-width: 12rem;
  }
  & > h1 {
    @media (min-width: 640px) {
      line-height: 1;
      font-size: 4rem;
    }
    color: #161e2e;
    letter-spacing: -0.025em;
    margin-top: 0.25rem;
    font-weight: 800;
    font-size: 2.25rem;
    line-height: 2.5rem;
    & > span {
      color: #04ab37;
    }
    & > br {
      @media (min-width: 1024px) {
        display: inline;
      }
      display: hidden;
    }
  }
`;

const Body = styled.p`
  @media (min-width: 640px) {
    margin-top: 1.25rem;
    font-size: 1.25rem;
  }
  color: #6b7280;
  margin-top: 0.75rem;
  font-size: 1rem;
  margin: 0;

  @media (min-width: 1280px) {
    margin-top: 1.125rem;
    font-size: 1.125rem;
  }
`;

//CTA
const CTA = styled.div`
  @media (min-width: 640px) {
    max-width: 32rem;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 1280px) {
    text-align: left;
    margin-left: 0;
    margin-right: 0;
  }
  margin-top: 1.25rem;
  text-align: center;

  & > p {
    font-size: 1rem;
    color: #161e2e;
    font-weight: 500;
  }

  & > button {
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
    font-weight: 500;
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
      color: #fff;
      text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
    }
  }
`;

//MEDIA SECTION
const MediaSection = styled.div`
  @media (min-width: 640px) {
    max-width: 32rem;
    margin-left: auto;
    margin-right: auto;
  }
  @media (min-width: 1280px) {
    grid-column: span 6 / span 6;
    max-width: none;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    align-items: center;
    display: flex;
  }
  position: relative;
  margin-top: 3rem;
  & :first-child {
    @media (min-width: 1024px) {
      width: 100%;
      height: 18rem;
    }
    @media (min-width: 1280px) {
      width: 100%;
      height: 100%;
      max-width: 34.5rem;
    }
    max-width: 100%;
    min-height: 14.5rem;
    display: flex;
    padding: 1.5rem, 0.75rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    color: white;
    transition-duration: 150ms;
    margin-top: 1rem;
    transition-property: background-color, color, transform;
    border-radius: 0.375rem;
    border-width: 1px;
    border-color: transparent;
    margin-right: auto;
    margin-left: auto;
    border-radius: 0.5rem;
    position: relative;
    align-items: center;
  }
`;

export const Hero = ({ props }) => {
  const hero = {
    imgAlt: props.logo.alt,
    imgSrc: props.logo.url,
    heroTitle: props.title[0].text,
    heroType: props.case_study[0].text,
    heroText: props.copy,
    heroCta: props.cta,
    btnLabel: props.button_label,
    btnLink: props.button.url,
    mediaSrc: props.video.html,
  };
  return (
    <WrapperOuter>
      <WrapperInner>
        <Content>
          <Grid>
            <TextSection>
              <img src={hero.imgSrc} alt={hero.imgAlt} />
              <h1>
                {hero.heroTitle}
                <br />
                <span>{hero.heroType}</span>
              </h1>
              <Body>{hero.heroText}</Body>
              <CTA>
                <p>{hero.heroCta}</p>
                <button onClick={() => hero.btnLink} type="submit">
                  {hero.btnLabel}
                </button>
              </CTA>
            </TextSection>
            <MediaSection>
              <div dangerouslySetInnerHTML={{ __html: hero.mediaSrc }}></div>
            </MediaSection>
          </Grid>
        </Content>
      </WrapperInner>
    </WrapperOuter>
  );
};
