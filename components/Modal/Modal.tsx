import React from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Toaster } from "react-hot-toast";

type ComponentProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const Modal = ({ title, description, children }: ComponentProps) => {
  return (
    <DialogContent className="w-4/5 sm:w-3/5 md:w-2/5 max-h-[80%]">
      <Toaster />
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      {children}
    </DialogContent>
  );
};

export default Modal;
