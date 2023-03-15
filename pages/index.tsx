import Head from "next/head";
import { Button } from "@mui/material";
import Layout from "@/layout/layout";

const IndexPage = () => {
  return (
    <Layout>
      <Head>
        <title>Main title</title>
      </Head>

      <Button>Click</Button>
    </Layout>
  );
};

export default IndexPage;
