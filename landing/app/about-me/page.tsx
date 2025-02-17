
import Container from "@/components/Container-page";
import CounterServices from "@/components/Counter-services";
import Cover from "@/components/Cover";
import TimeLine from "@/components/Time-line";
import TransitionPage from "@/components/Transition-page";

const AboutMePage = () => {
  return (
      <>
          <TransitionPage />
          <Cover/>
          <Container>
              <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                  Toda mi{' '}
                  <span className="font-bold text-secondary">
                      trayectoria profesional
                  </span>
              </h1>

              <CounterServices />

              <TimeLine />

          </Container>
      </>
  );
}

export default AboutMePage;