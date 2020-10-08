import Head from "next/head";
import { Container } from "../layout/Container";
import { Client } from "../utils/prismic";
import { Hero, Quote } from "../components/";

export default function Home(props) {
  console.log(props);

  return (
    <Container>
      <Head>
        <title>Case Study | Marley Spoon </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero props={props.doc.results[0].data.hero[0]} />
        <Quote props={props.doc.results[0].data.quote} />
      </main>
    </Container>
  );
}

export const getStaticProps = async () => {
  const doc = await Client.query("");
  return { props: { doc } };
};
