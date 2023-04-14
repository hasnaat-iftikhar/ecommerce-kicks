import Head from "next/head";

// Layout and Components
import { MainLayout } from "../layouts";
import { Header } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kicks - Ecommerce application</title>
        <meta
          name="description"
          content="Kicks, an open-source e-commerce app built with Next.js and Tailwind CSS. It's fully customizable with product pages, shopping cart, and checkout functionality. Our code follows best practices, ensuring it's bug-free and easy to maintain!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <Header />
      </MainLayout>
    </div>
  );
}
