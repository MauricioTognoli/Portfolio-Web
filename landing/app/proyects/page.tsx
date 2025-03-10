
import { dataProyects } from "@/data";

import TransitionPage from "@/components/Transition-page";
import ContainerPage from "@/components/Container-page";
import ProyectsBox from "@/components/Proyects-box";


const PortfolioPage = () => {

    return (
        <ContainerPage>
            <TransitionPage />
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">Mis últimos <span className="font-bold text-secondary">trabajos realizados</span></h1>

                <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4">
                    {dataProyects.map((data) => (
                        <ProyectsBox key={data.id} data={data} />
                    ))}
                </div>
            </div>
        </ContainerPage>
    );
}

export default PortfolioPage;