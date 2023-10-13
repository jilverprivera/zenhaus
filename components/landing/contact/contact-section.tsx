import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

export const ContactSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-32 bg-custom-primary">
      <div className="container">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-br from-white to-purple-900">
                Revolutionize Your Email Experience
              </h1>
              <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                Join us and take control of your inbox. Fast, secure, and
                designed for modern life.
              </p>
            </div>
            <form className="max-w-sm w-full mx-auto flex items-center space-x-4">
              <Input
                type="email"
                className="max-w-lg flex-1 bg-neutral-800 border-neutral-700 text-white"
                placeholder="Enter your email"
              />
              <Button
                // variant={"secondary"}
                className="bg-gradient-to-br from-green-400 via-violet-500 to-sky-500 text-gray-300 font-semibold"
                type="submit"
              >
                Join waitlist
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
