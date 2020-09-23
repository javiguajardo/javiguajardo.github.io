import React from "react"
import { Main, About, Layout, SEO } from '../components';

export default function Home() {
  return (
    <Layout>
      <SEO title="Home" />
      <Main>
        <About />
      </Main>
    </Layout>
  );
}
