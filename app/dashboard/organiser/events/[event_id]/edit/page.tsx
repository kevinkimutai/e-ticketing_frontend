import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header/Header";
import Image from "next/image";

import IllustratorImg from "../../../../../../public/Sandy_Bus-05_Single-08.jpg";
import Footer from "@/components/Footer/Footer";

export default function page() {
  return (
    <>
      <Header />

      <p className="text-red-600">Route not defined yet</p>
      <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-3 sm:px-6 md:px-12 lg:px-24 py-2 sm:py-4">
        <Card className="w-full md:w-1/2 mt-10">
          <CardHeader>
            <CardTitle>Edit Event</CardTitle>
            <CardDescription>Edit Your Event</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-6">
              <div className="grid gap-4 w-full">
                <div className="grid gap-2 w-full">
                  <Label htmlFor="title">Event Name</Label>
                  <Input id="title" placeholder="Enter event title" />
                </div>
                <div className="grid gap-2 w-full">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="Enter event location" />
                </div>
                <div className="grid gap-2 w-full">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    rows={4}
                    placeholder="Describe your event"
                  />
                </div>
              </div>
              <div className="grid gap-2 w-full">
                <Label htmlFor="category">Event Category</Label>
                <Select id="category">
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="conference">Conference</SelectItem>
                    <SelectItem value="meetup">Meetup</SelectItem>
                    <SelectItem value="workshop">Workshop</SelectItem>
                    <SelectItem value="party">Party</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2 w-full">
                <Label htmlFor="location">Event Location</Label>
                <Select id="location">
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="san-francisco">San Francisco</SelectItem>
                    <SelectItem value="new-york">New York</SelectItem>
                    <SelectItem value="london">London</SelectItem>
                    <SelectItem value="tokyo">Tokyo</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <div className="flex w-full  justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button type="submit">Edit Event</Button>
            </div>
          </CardFooter>
        </Card>
        <div className="w-full md:w-1/2">
          <Image
            src={IllustratorImg}
            alt="edit"
            width={400}
            height={400}
            className="w-full"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
