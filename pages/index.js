import Head from "next/head";
import { Container } from "../layout/Container";
import { Background } from "../layout/Background";
import { Client } from "../utils/prismic";
import { Hero, Quote, Statements, CTA } from "../components/";

export default function Home(props) {
  return (
    <Background>
      <Container>
        <Head>
          <title>Case Study | Marley Spoon </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <Hero props={props.doc.results[0].data.hero[0]} />
          <Quote props={props.doc.results[0].data.quote} />
          <Statements props={props.doc.results[0].data.body} />
          <CTA props={props.doc.results[0].data.cta} />
        </main>
      </Container>
    </Background>
  );
}

export const getStaticProps = async () => {
  const doc = await Client.query("");
  return { props: { doc } };
};
