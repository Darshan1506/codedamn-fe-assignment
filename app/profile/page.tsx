"use client";

import Link from "next/link";
import BaseLayout from "@/components/BaseLayout";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/components/ui/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Combine the form schemas
const formSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  displayName: z.string().min(2).max(50),
  about: z.string().min(2),
  profession: z.string().min(2).max(50),
  gender: z.string({
    required_error: "Please select an gender to display.",
  }),
  followers: z.boolean().default(false).optional(),
  xp: z.boolean().default(false).optional(),
  achievement: z.boolean().default(false).optional(),
});

export default function Profile() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      displayName: "",
      about:
        "Hello! I'm a passionate software developer with a love for crafting elegant solutions to complex problems. With a background in Btech, I've cultivated a deep understanding of various programming languages and technologies. My journey in the world of coding began [mention how and when you started coding]. Since then, I've been on a continuous quest to learn and grow, embracing new challenges and staying up-to-date with the latest trends in the ever-evolving tech landscape",
      profession: "",
      followers: false,
      xp: false,
      achievement: false,
    },
  });
  const router = useRouter();

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    localStorage.setItem("profileValues", JSON.stringify(values));
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
        <div className="ml-6 mb-4 flex">
          <Avatar className="ml-2 h-20 w-20">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="mt-4">
            <button
              type="button"
              className="ml-2 mr-2 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Upload Picture
            </button>
            <button
              type="button"
              className="focus:outline-none text-black bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:ring-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-700 dark:hover:bg-gray-800 dark:focus:ring-gray-900"
            >
              Cancel
            </button>
          </div>
        </div>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="displayName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-zink-900 font-semibold font-inter text-sm leading-tight">
                      Display Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="john doe" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="about"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-zink-900 font-semibold font-inter text-sm leading-tight">
                      About
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="i am .." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="profession"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-zink-900 font-semibold font-inter text-sm leading-tight">
                      Profession
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="developer" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Calendar form field */}
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-zink-900 font-semibold font-inter text-sm leading-tight">
                      Date of birth
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-100 pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-zink-900 font-semibold font-inter text-sm leading-tight">
                      Email
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="What is your gender?" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="transgender">Transgender</SelectItem>
                        <SelectItem value="others">Others</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div>
                <h1 className="mb-1 text-zink-900 font-bold font-inter text-xl leading-snug">
                  Section Visibility
                </h1>
                <h3 className="text-zink-500 font-normal font-inter text-base leading-relaxed mb-4">
                  Select which sections and content should show on your profile
                  page.
                </h3>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="followers"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-zink-900 font-bold font-inter text-base leading-relaxed">
                            Followers and following
                          </FormLabel>
                          <FormDescription>
                            Shows your followers and the users you follow on
                            codedamn
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="xp"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-zink-900 font-bold font-inter text-base leading-relaxed">
                            XP
                          </FormLabel>
                          <FormDescription>
                            Shows the XP you have earned
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="achievement"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-zink-900 font-bold font-inter text-base leading-relaxed">
                            Achievement badges
                          </FormLabel>
                          <FormDescription>
                            Shows your relative percentile and proficiency
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </BaseLayout>
  );
}
