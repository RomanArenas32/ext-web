"use client";

import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";

import React from "react";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "./drawer";
import { useMediaQuery } from "usehooks-ts";
import { Button, ButtonProps } from "./button";
import { cn } from "@/lib/utils";
import { ReloadIcon } from "@radix-ui/react-icons";
import { VisuallyHidden } from "@reach/visually-hidden";

interface FormDrawerProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const FromDrawer: React.FC<FormDrawerProps> = ({ trigger, children, isOpen, onOpenChange }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  if (isDesktop) {
    return (
      <Sheet open={isOpen} onOpenChange={onOpenChange}>
        <SheetTrigger asChild>{trigger}</SheetTrigger>
        <SheetContent className="flex flex-col p-0 gap-0 md:max-w-[538px] overflow-y-auto">
          <SheetHeader >
            <VisuallyHidden>
              <DrawerDescription>description</DrawerDescription>
            </VisuallyHidden>
          </SheetHeader>
          <div className="border-y flex-grow px-6 py-4">{children}</div>
        </SheetContent>
      </Sheet>
    );
  } else {
    return (
      <Drawer open={isOpen} onOpenChange={onOpenChange}>
        <DrawerTrigger asChild >{trigger}</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <VisuallyHidden>
              <DrawerTitle>Title</DrawerTitle>
              <DrawerDescription>description</DrawerDescription>
            </VisuallyHidden>
          </DrawerHeader>
          <div className="h-[92vh] px-6 pt-0 overflow-y-auto">{children}</div>
        </DrawerContent>
      </Drawer>
    );
  }
};

export default FromDrawer;

export const SubmitFormButton = React.forwardRef<
  HTMLButtonElement,
  { children: React.ReactNode } & ButtonProps
>(({ children, disabled, className, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      className={cn("w-full mt-auto", className)}
      size={"lg"}
      disabled={disabled}
      type="submit"
      {...props}
    >
      {disabled && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  );
});

SubmitFormButton.displayName = "SubmitFormButton"; 