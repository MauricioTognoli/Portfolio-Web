import CounterServices from "./Counter-services";
import TimeLine from "./Time-line";
import ContainerPage from "./Container-page";

const AboutMe = () => {
  return (
    <ContainerPage>
      <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mt-10">
        Toda mi{" "}
        <span className="font-bold text-secondary">
          trayectoria profesional
        </span>
      </h1>

      <CounterServices />

      <TimeLine />
    </ContainerPage>
  );
};

export default AboutMe;
