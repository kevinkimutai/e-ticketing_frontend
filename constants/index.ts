import { Drum, KeyboardMusic, MicVocal, Diameter } from "lucide-react";

export const categoryIcons: any = [
  {
    icon: Drum,
    label: "concert",
  },
  {
    icon: KeyboardMusic,
    label: "festival",
  },
  {
    icon: MicVocal,
    label: "open mic",
  },
  {
    icon: Diameter,
    label: "football match",
  },
  {
    icon: MicVocal,
    label: "basketball game",
  },
  {
    icon: MicVocal,
    label: "marathon",
  },
  {
    icon: MicVocal,
    label: "tennis tournament",
  },
  {
    icon: MicVocal,
    label: "workshop",
  },
  {
    icon: MicVocal,
    label: "seminar",
  },
  {
    icon: MicVocal,
    label: "conference",
  },
  {
    icon: MicVocal,
    label: "meeting",
  },
  {
    icon: MicVocal,
    label: "lecture",
  },
  {
    icon: MicVocal,
    label: "product launch",
  },
  {
    icon: MicVocal,
    label: "meeting",
  },
  {
    icon: MicVocal,
    label: "networking event",
  },
  {
    icon: MicVocal,
    label: "trade-show",
  },
  {
    icon: MicVocal,
    label: "art exhibition",
  },
  {
    icon: MicVocal,
    label: "theater perfomance",
  },
  {
    icon: MicVocal,
    label: "film screening",
  },
  {
    icon: MicVocal,
    label: "charity fundraiser",
  },
  {
    icon: MicVocal,
    label: "volunteer event",
  },
  {
    icon: MicVocal,
    label: "birthday party",
  },
  {
    icon: MicVocal,
    label: "wedding",
  },
  {
    icon: MicVocal,
    label: "reunion",
  },
  {
    icon: MicVocal,
    label: "yoga class",
  },
  {
    icon: MicVocal,
    label: "health fair",
  },
  {
    icon: MicVocal,
    label: "fitness bootcamp",
  },
  {
    icon: MicVocal,
    label: "hackathon",
  },
  {
    icon: MicVocal,
    label: "tech talk",
  },
  {
    icon: MicVocal,
    label: "coding workshop",
  },
  {
    icon: MicVocal,
    label: "startup pitch",
  },
  {
    icon: MicVocal,
    label: "wine tasting",
  },
  {
    icon: MicVocal,
    label: "cooking class",
  },
  {
    icon: MicVocal,
    label: "food festival",
  },
  {
    icon: MicVocal,
    label: "brewery tour",
  },
  {
    icon: MicVocal,
    label: "christmas party",
  },
  {
    icon: MicVocal,
    label: "new years eve celebration",
  },
  {
    icon: MicVocal,
    label: "picnic",
  },
];

let APP_URL: string = "http://localhost:3000";

if (process.env.NEXT_PUBLIC_APP_ENVIRONMENT == "development") {
  APP_URL = "http://localhost:8000";
}

export default APP_URL;
