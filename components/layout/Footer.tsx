import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="p-4 bg-custom-primary md:p-8 lg:p-10 ">
      <div className="mx-auto max-w-screen-xl text-center flex items-center flex-col">
        <a href="#">
          <Logo />
        </a>
        <p className="my-6 text-gray-600">
          Open-source PCB designs for home IoT.
        </p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white space-x-4">
          <li>
            <a href="#" className="hover:underline">
              Designs
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Privacy policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
        <span className="text-sm text-gray-600 sm:text-center">
          © {new Date().getFullYear()} No Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
