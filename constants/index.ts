import {
  Drum,
  KeyboardMusic,
  MicVocal,
  Diameter,
  LoaderPinwheel,
  Dumbbell,
  HandCoins,
  Presentation,
  Speech,
  ChartPie,
  Users,
  School,
  Milk,
  Network,
  Receipt,
  Palette,
  Drama,
  Clapperboard,
  HeartHandshake,
  Bird,
  Cake,
  Torus,
  PersonStanding,
  BicepsFlexed,
  Activity,
  Code2Icon,
} from "lucide-react";

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
    icon: LoaderPinwheel,
    label: "basketball game",
  },
  {
    icon: Dumbbell,
    label: "marathon",
  },
  {
    icon: HandCoins,
    label: "tennis tournament",
  },
  {
    icon: Presentation,
    label: "workshop",
  },
  {
    icon: Speech,
    label: "seminar",
  },
  {
    icon: ChartPie,
    label: "conference",
  },
  {
    icon: Users,
    label: "meeting",
  },
  {
    icon: School,
    label: "lecture",
  },
  {
    icon: Milk,
    label: "product launch",
  },

  {
    icon: Network,
    label: "networking event",
  },
  {
    icon: Receipt,
    label: "trade-show",
  },
  {
    icon: Palette,
    label: "art exhibition",
  },
  {
    icon: Drama,
    label: "theater perfomance",
  },
  {
    icon: Clapperboard,
    label: "film screening",
  },
  {
    icon: HeartHandshake,
    label: "charity fundraiser",
  },
  {
    icon: Bird,
    label: "volunteer event",
  },
  {
    icon: Cake,
    label: "birthday party",
  },
  {
    icon: Torus,
    label: "wedding",
  },
  {
    icon: PersonStanding,
    label: "reunion",
  },
  {
    icon: BicepsFlexed,
    label: "yoga class",
  },
  {
    icon: Activity,
    label: "health fair",
  },
  {
    icon: Dumbbell,
    label: "fitness bootcamp",
  },
  {
    icon: Code2Icon,
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
