"use client";

import React, { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import APP_URL from "@/constants";
import { Categories } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  category_id: z.string({
    required_error: "Please select an event category.",
  }),
});

type ComponentProps = {
  onNext: (val: any) => Promise<void>;
  onBack: () => void;
  session: any;
};

const EventCategory = ({ onNext, onBack, session }: ComponentProps) => {
  const [categories, setCategories] = useState<Categories>([]);
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const fetchCategories = async () => {
    try {
      const res = await fetch(`${APP_URL}/api/v1/category`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session}`,
        },
      });

      if (res.ok) {
        const { data } = await res.json();
        setCategories(data);
      } else {
        const data = await res.json();

        if (data.message == "Failedd To Verify Token") {
          router.push("/api/auth/logout");
        }
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    //Convert To Number

    const categoryId = Number(data.category_id);

    onNext({ category_id: categoryId });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="category_id"
          render={({ field }: any) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={"field.value.toString()"}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select event category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories?.map((cat) => (
                    <>
                      <SelectItem value={cat?.category_id.toString()}>
                        {cat?.name}
                      </SelectItem>
                    </>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>Event categories</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Footer */}
        <DialogFooter className="mt-8">
          <div className="flex justify-end items-center gap-4">
            {/* <DialogClose asChild> */}
            <Button type="button" variant="secondary" onClick={onBack}>
              Back
            </Button>
            {/* </DialogClose> */}
            <Button type="submit">Next</Button>
          </div>
        </DialogFooter>
      </form>
    </Form>
  );
};

export default EventCategory;
