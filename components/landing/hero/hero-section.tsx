import { Button } from "../../ui/button";
import { BackgroundPattern } from "../../custom/background-pattern";

export const HeroSection = () => {
  return (
    <section className="w-full grid place-items-center gap-32">
      <BackgroundPattern />
      <div className="mx-auto max-w-6xl pt-52 flex flex-col items-center justify-center text-center z-40">
        <h1 className="text-4xl font-bold tracking-tight leading-snug text-gray-300 sm:text-8xl">
          Build{" "}
          <span className="bg-gradient-to-r from-sky-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            IOT projects
          </span>{" "}
          faster and more scalably
        </h1>
        <p className="w-3/5 mt-8 text-2xl leading-8 text-gray-400">
          Monitoring-based tool with alerts and notifications system, as well as
          reports for your IoT projects.
        </p>

        <div className="mt-12 flex items-center justify-center gap-x-4">
          <a href="#">
            <Button className="bg-gradient-to-br text-neutral-50 from-sky-500 via-pink-500 to-purple-600 hover:brightness-110 duration-150">
              Download Zen-Haus
            </Button>
          </a>
          <a href="#">
            <Button className="font-semibold" variant={"secondary"}>
              Get started
            </Button>
          </a>
        </div>
      </div>
      <div className="max-w-screen-xl w-full aspect-video z-40 rounded-3xl glowing-border bg-neutral-950  border-sky-500  p-4" />
    </section>
  );
};
