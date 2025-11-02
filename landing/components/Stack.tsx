import Container from "@/components/Container-page";
import Technologies from "@/components/Technologies";

const Stack = () => {
  return (
    <Container>
      <h1 className="text-2xl leading-tight text-center md:text-left mb-5 md:text-4xl md:mt-10">
        Mi <span className="font-bold text-secondary">stack tecnologico</span>
      </h1>
      <div className="my-10">
        <Technologies />
      </div>
    </Container>
  );
};

export default Stack;
