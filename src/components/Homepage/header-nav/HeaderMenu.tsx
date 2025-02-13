import { Menu } from "lucide-react";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export const HeaderMenu = () => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger>
          <Menu />
        </DrawerTrigger>

        <DrawerContent>
          <DrawerHeader hidden>
            <DrawerTitle></DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>

          <div className="flex flex-col gap-4 px-6 py-8 justify-center items-center">
            <a className="uppercase hover:cursor-pointer">About</a>
            <a className="uppercase hover:cursor-pointer">Projects</a>
            <a className="uppercase hover:cursor-pointer">Contact</a>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
