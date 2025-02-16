import { Menu } from "lucide-react";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";

export const HeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = (sectionId: string) => {
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  };

  return (
    <div>
      <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
        <DrawerTrigger onClick={() => setIsOpen(!isOpen)}>
          <Menu />
        </DrawerTrigger>

        <DrawerContent>
          <DrawerHeader hidden>
            <DrawerTitle></DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>

          <div className="flex flex-col gap-4 px-6 py-8 justify-center items-center">
            <a
              onClick={() => handleMenuClick("about-section")}
              className="uppercase hover:cursor-pointer"
            >
              About
            </a>
            <a
              onClick={() => handleMenuClick("project-section")}
              className="uppercase hover:cursor-pointer"
            >
              Projects
            </a>
            <a
              onClick={() => handleMenuClick("contact-section")}
              className="uppercase hover:cursor-pointer"
            >
              Contact
            </a>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
