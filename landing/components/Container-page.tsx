interface ContainerPageProps {
    children: React.ReactNode
}

const ContainerPage = (props: ContainerPageProps) => {
    const { children } = props

    return (
        <div className="relative top-16 w-full max-w-6xl px-4 pb-40 mx-auto  md:pb-0 md:px-">
            {children}
        </div>
    );
}

export default ContainerPage;
