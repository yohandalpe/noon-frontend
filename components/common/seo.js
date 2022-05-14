import Head from "next/head";

const Seo = ({ title }) => {
  return (
    <Head>
      <title>Noon: {title}</title>
      <meta
        name="description"
        content="A Next.js app built with custom NodeJS API."
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Seo;
