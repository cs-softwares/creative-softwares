import type { ServiceCard, ValueCard } from "../site-content";
import {
  ChartIcon,
  CloudIcon,
  CompassIcon,
  GlobeIcon,
  LayersIcon,
  MobileIcon,
  ShieldIcon,
  SparkIcon,
} from "./SiteIcons";

type IconName = ServiceCard["icon"] | ValueCard["icon"];

type IconBadgeProps = {
  name: IconName;
  className?: string;
};

export default function IconBadge({ name, className = "h-5 w-5" }: IconBadgeProps) {
  const shared = { className };

  switch (name) {
    case "globe":
      return <GlobeIcon {...shared} />;
    case "mobile":
      return <MobileIcon {...shared} />;
    case "cloud":
      return <CloudIcon {...shared} />;
    case "layers":
      return <LayersIcon {...shared} />;
    case "spark":
      return <SparkIcon {...shared} />;
    case "compass":
      return <CompassIcon {...shared} />;
    case "shield":
      return <ShieldIcon {...shared} />;
    case "chart":
      return <ChartIcon {...shared} />;
    default:
      return <SparkIcon {...shared} />;
  }
}
