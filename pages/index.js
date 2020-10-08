import Head from "next/head";
import { Container } from "../layout/Container";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Case Study | Marley Spoon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Container>
  );
}
