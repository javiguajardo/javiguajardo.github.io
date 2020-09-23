import React from "react"
import { Main, About, Layout } from '../components';

export default function Home() {
  return (
    <Layout>
      <Main>
        <About />
      </Main>
    </Layout>
  );
}
