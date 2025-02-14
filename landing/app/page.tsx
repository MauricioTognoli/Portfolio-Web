import Cover from "@/components/Cover";
import Introduction from "@/components/Introduction";
import TransitionPage from "@/components/Transition-page";

export default function Home() {
  return (
    <main>
      <TransitionPage/>
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gardient-cover">
        <Cover/>
        <Introduction/>

      </div>
    </main>
  );
}
