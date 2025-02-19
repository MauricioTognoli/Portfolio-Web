import Container from "@/components/Container-page";
import Cover from "@/components/Cover";
import Technologies from "@/components/Technologies";
import TransitionPage from "@/components/Transition-page";

const TechnologiesPage = () => {
  return (
    <>
      <TransitionPage />
      <Cover />
      <Container>
        <h1 className="text-2xl leading-tight text-center md:text-left mb-5 md:text-5xl md:mt-10">
          Explore las{" "}
          <span className="font-bold text-secondary">tecnologías</span> que uso
          para dar vida a las ideas
        </h1>
        <Technologies />
      </Container>
    </>
  );
};

export default TechnologiesPage;
