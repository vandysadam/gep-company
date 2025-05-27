import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";



const components: { title: string; href: string; }[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Project",
    href: "/project",
  },
  {
    title: "Cost Planning",
    href: "/costplaning",
  },
  {
    title: "Contact",
    href: "/contact",
  },

]
export default function MenuHeaderSection() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false); // Tutup menu jika di mode desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="relative">
      {/* Tombol Burger Menu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu */}
      <ul
        className={cn(
          "flex grid-col md:flex-row gap-1 md:gap-12 p-4 md:p-0 fixed md:sticky  top-18 right-0 bg-stone- bg-opacity-80 md:bg-transparent rounded-lg md:rounded-none transition-all ",
          isOpen ? "block" : "hidden md:flex"
        )}
      >
        {components.map((component) => (
          <ListItem key={component.title} title={component.title} href={component.href} />
        ))}
      </ul>
    </nav>
  );
}


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-lg font-small leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
    </li>
  )
})
ListItem.displayName = "ListItem"
