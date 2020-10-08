import Head from "next/head";
import { Container } from "../layout/Container";
import { Client } from "../utils/prismic";

export default function Home(props) {
  console.log(props);
  return (
    <Container>
      <Head>
        <title>Case Study | Marley Spoon </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Container>
  );
}

export const getStaticProps = async () => {
  const doc = await Client.query("");
  return { props: { doc } };
};
