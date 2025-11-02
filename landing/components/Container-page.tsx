interface ContainerPageProps {
  children: React.ReactNode;
  className?: string;
}

const ContainerPage = ({ children, className = "" }: ContainerPageProps) => {
  return (
    <div
      className={`relative min-h-min top-16 w-full max-w-7xl px-4 pb-40 mx-auto md:pb-0 md:px- ${className}`}
    >
      {children}
    </div>
  );
};

export default ContainerPage;
