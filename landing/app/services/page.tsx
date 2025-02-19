import Cover from "@/components/Cover";
import SliderServices from "@/components/Slider-services";
import TransitionPage from "@/components/Transition-page";
import Link from "next/link";

const ServicesPage = () => {
  return (
    <>
      <Cover />

      <TransitionPage />
      <div className="relative grid items-center justify-center h-screen max-w-5xl gap-6 mb-14 mx-auto md:grid-cols-2">
        <div className="max-w-[450px] ">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            Mis <span className="font-bold text-secondary"> servicios.</span>
          </h1>
          <p className="mb-6 text-xl text-center md:text-left  text-gray-300">
            Ofrezco servicios de desarrollo web frontend especializados en la
            creación de sitios web y aplicaciones atractivas y funcionales.
            Utilizando las últimas tecnologías, como React, TailwindCSS y
            JavaScript, diseño interfaces de usuario intuitivas y responsivas
            que reflejan la identidad de marca de mis clientes y mejoran su
            presencia en línea.
          </p>

          <Link
            href="mailto:tognolimauricio@gmail.com"
            className="px-3 py-2 transition-all cursor-pointer bg-secondary text-white font-semibold text-md w-fit rounded-xl hover:shadow-lg hover:shadow-secondary mx-auto block md:mx-0"
          >
            Contacta conmigo
          </Link>
        </div>

        {/* SLIDER */}
        <div>
          <SliderServices />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
