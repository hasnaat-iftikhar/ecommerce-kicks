// Layout and Components
import { MainLayout } from "../layouts";
import {
  CategoriesSection,
  Container,
  Footer,
  Header,
  HeroSection,
  NewDropsSection,
  ReviewsSection,
} from "../components";

export default function Home() {
  return (
    <MainLayout
      pageTitle="Kicks - Ecommerce application"
      className="mt-8 flex flex-col gap-y-32"
    >
      <Container>
        <Header />
        <HeroSection />
        <NewDropsSection className="mt-[90px]" />
      </Container>
      <CategoriesSection />
      <ReviewsSection />
      <Container>
        <Footer className="mb-[68px]" />
      </Container>
    </MainLayout>
  );
}
