"use client";

import Link from "next/link";
import BaseLayout from "@/components/BaseLayout";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";

// Combine the form schemas
const formSchema = z.object({
  github: z
    .string()
    .url({
      message: "Please enter a valid URL.",
    })
    .optional(),
  linkedin: z
    .string()
    .url({
      message: "Please enter a valid URL.",
    })
    .optional(),
  facebook: z
    .string()
    .url({
      message: "Please enter a valid URL.",
    })
    .optional(),
  instagram: z
    .string()
    .url({
      message: "Please enter a valid URL.",
    })
    .optional(),
  dribble: z
    .string()
    .url({
      message: "Please enter a valid URL.",
    })
    .optional(),
  behance: z
    .string()
    .url({
      message: "Please enter a valid URL.",
    })
    .optional(),
});

export default function Profile() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      github: "",
      linkedin: "",
      facebook: "",
      instagram: "",
      dribble: "",
      behance: "",
    },
  });
  const router = useRouter();

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    router.push("/socials");
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <BaseLayout>
      <div className="mt-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Profile form fields */}
            <FormField
              control={form.control}
              name="github"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zink-900 font-semibold font-inter text-sm leading-tight">
                    Github
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="linkedin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zink-900 font-semibold font-inter text-sm leading-tight">
                    LinkedIn
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="facebook"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zink-900 font-semibold font-inter text-sm leading-tight">
                    Facebook
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="instagram"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zink-900 font-semibold font-inter text-sm leading-tight">
                    Instagram
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dribble"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zink-900 font-semibold font-inter text-sm leading-tight">
                    Dribble
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="behance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-zink-900 font-semibold font-inter text-sm leading-tight">
                    Behance
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </BaseLayout>
  );
}
