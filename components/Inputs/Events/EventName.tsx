"use client";

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

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

type ComponentProps = {
  onNext: (val: any) => Promise<void>;
};

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const EventName = ({ onNext }: ComponentProps) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    onNext(values);
  }

  return (
    // <div>
    //   <div className="flex items-center px-4 py-2">
    //     <div className="grid flex-1 gap-2">
    //       <Label htmlFor="name">Name</Label>
    //       <Input id="name" />
    //     </div>
    //   </div>

    //   {/* Footer */}
    //   <DialogFooter className="mt-8">
    //     <div className="flex justify-end items-center gap-4">
    //       <DialogClose asChild>
    //         <Button type="button" variant="secondary">
    //           Cancel
    //         </Button>
    //       </DialogClose>
    //       <Button>Next</Button>
    //     </div>
    //   </DialogFooter>
    // </div>

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="party xyz" {...field} />
              </FormControl>
              <FormDescription>Event Name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Footer */}
        <DialogFooter className="mt-8">
          <div className="flex justify-end items-center gap-4">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Next</Button>
          </div>
        </DialogFooter>
      </form>
    </Form>
  );
};

export default EventName;
