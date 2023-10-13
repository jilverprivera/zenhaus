import Link from "next/link";

export const NavLink = ({ label, path }: { label: string; path: string }) => {
  return (
    <Link
      href={path}
      className=" text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
    >
      <span className="">{label}</span>
    </Link>
  );
};
