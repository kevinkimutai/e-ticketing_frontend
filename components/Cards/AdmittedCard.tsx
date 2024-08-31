"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { PieChart, Pie } from "recharts";

type ComponentProps = {
  admitted: number;
  notAdmitted: number;
};

export default function AdmittedCard({
  admitted,
  notAdmitted,
}: ComponentProps) {
  return (
    <div className="w-full md:w-1/3">
      <Card>
        <CardHeader>
          <CardTitle>Attendee Admission Status</CardTitle>
          <CardDescription>
            Breakdown of admitted and non-admitted attendees
          </CardDescription>
        </CardHeader>

        <CardContent>
          {admitted == 0 && notAdmitted == 0 ? (
            <div className="flex justify-center items-center">
              <p className="p-4 border border-black font-semibold rounded-lg">
                No tickets sold yet
              </p>
            </div>
          ) : (
            <ChartContainer
              config={{
                admitted: { label: "Admitted", color: "hsl(var(--chart-1))" },
                nonAdmitted: {
                  label: "Non-Admitted",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="aspect-square min-h-[200px]"
            >
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <Pie
                  data={[
                    {
                      status: "admitted",
                      value: admitted,
                      fill: " hsl(180, 100%, 30%)",
                    },
                    {
                      status: "nonAdmitted",
                      value: notAdmitted,
                      fill: "hsl(0, 100%, 60%)",
                    },
                  ]}
                  dataKey="value"
                  label
                  nameKey="status"
                />
              </PieChart>
            </ChartContainer>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
