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
  ChevronLeftSquareIcon,
  ChevronRightIcon,
  BellElectric,
  GlassWater,
  CookingPot,
  Apple,
  Beer,
  CandyCane,
  Flame,
  Sandwich,
  Heart,
  Footprints,
  Tally5,
  Dribbble,
  Goal,
  Bitcoin,
  Target,
} from "lucide-react";

export const categoryIcons: any = [
  {
    id: 1,
    icon: Drum,
    label: "concert",
  },
  {
    id: 2,
    icon: KeyboardMusic,
    label: "festival",
  },
  {
    id: 3,
    icon: MicVocal,
    label: "open mic",
  },
  {
    id: 4,
    icon: Goal,
    label: "football match",
  },
  {
    id: 5,
    icon: Dribbble,
    label: "basketball game",
  },
  {
    id: 6,
    icon: Footprints,
    label: "marathon",
  },
  {
    id: 7,
    icon: Target,
    label: "tennis tournament",
  },
  {
    id: 8,
    icon: Presentation,
    label: "workshop",
  },
  {
    id: 9,
    icon: Speech,
    label: "seminar",
  },
  {
    id: 10,
    icon: ChartPie,
    label: "conference",
  },
  {
    id: 11,
    icon: Users,
    label: "meeting",
  },
  {
    id: 12,
    icon: School,
    label: "lecture",
  },
  {
    id: 13,
    icon: Milk,
    label: "product launch",
  },
  {
    id: 14,
    icon: Network,
    label: "networking event",
  },
  {
    id: 15,
    icon: Bitcoin,
    label: "trade-show",
  },
  {
    id: 16,
    icon: Palette,
    label: "art exhibition",
  },
  {
    id: 17,
    icon: Drama,
    label: "theater performance",
  },
  {
    id: 18,
    icon: Clapperboard,
    label: "film screening",
  },
  {
    id: 19,
    icon: HeartHandshake,
    label: "charity fundraiser",
  },
  {
    id: 20,
    icon: Bird,
    label: "volunteer event",
  },
  {
    id: 21,
    icon: Cake,
    label: "birthday party",
  },
  {
    id: 22,
    icon: Heart,
    label: "wedding",
  },
  {
    id: 23,
    icon: PersonStanding,
    label: "reunion",
  },
  {
    id: 24,
    icon: BicepsFlexed,
    label: "yoga class",
  },
  {
    id: 25,
    icon: Activity,
    label: "health fair",
  },
  {
    id: 26,
    icon: Dumbbell,
    label: "fitness bootcamp",
  },
  {
    id: 27,
    icon: Code2Icon,
    label: "hackathon",
  },
  {
    id: 28,
    icon: MicVocal,
    label: "tech talk",
  },
  {
    id: 29,
    icon: ChevronRightIcon,
    label: "coding workshop",
  },
  {
    id: 30,
    icon: BellElectric,
    label: "startup pitch",
  },
  {
    id: 31,
    icon: GlassWater,
    label: "wine tasting",
  },
  {
    id: 32,
    icon: CookingPot,
    label: "cooking class",
  },
  {
    id: 33,
    icon: Apple,
    label: "food festival",
  },
  {
    id: 34,
    icon: Beer,
    label: "brewery tour",
  },
  {
    id: 35,
    icon: CandyCane,
    label: "christmas party",
  },
  {
    id: 36,
    icon: Flame,
    label: "new years eve celebration",
  },
  {
    id: 37,
    icon: Sandwich,
    label: "picnic",
  },
];

let APP_URL: string = "http://localhost:3000";

if (process.env.NEXT_PUBLIC_APP_ENVIRONMENT == "development") {
  APP_URL = "http://localhost:8000";
}

if (process.env.NEXT_PUBLIC_APP_ENVIRONMENT == "production") {
  APP_URL = process.env.NEXT_PUBLIC_APP_PRODUCTION_URL!;
}

export default APP_URL;
