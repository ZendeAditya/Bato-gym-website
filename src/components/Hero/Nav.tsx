import React from "react";
import { Button } from "../ui/button";
interface LinksTypes {
  id: number;
  link: string;
  href: string;
}
const Nav = () => {
  const LINKS: LinksTypes[] = [
    {
      id: 1,
      link: "About Us",
      href: "about",
    },
    {
      id: 2,
      link: "Services",
      href: "services",
    },
    {
      id: 3,
      link: "Project",
      href: "project",
    },
    {
      id: 4,
      link: "FAQ",
      href: "faq",
    },
  ];
  return (
    <nav className="hidden py-2 md:flex gap-2 items-center justify-between text-white border-2 rounded-full w-[93vw] my-3 mx-auto bg-orange-700/10">
      {/* logo  */}
      <div className="flex gap-2 items-center px-3">
        <div>
          <h2 className="text-4xl font-bold">FFL</h2>
        </div>
        {/* links */}
        <ul className="flex gap-2 items-center">
          {LINKS.map((link) => (
            <li key={link.id} className="px-4">
              <a href={`#${link.href}`}>{link.link}</a>
            </li>
          ))}
        </ul>
      </div>
      {/* CTA */}
      <div className="px-4">
        <Button className="py-2 bg-orange-500 rounded-full hover:bg-orange-600">
          Free Trial
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
