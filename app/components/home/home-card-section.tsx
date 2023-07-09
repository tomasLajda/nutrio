import {
  Apple,
  BarChart,
  Dumbbell,
  HeartPulse,
  Settings,
  SoupIcon,
  Utensils,
} from 'lucide-react';
import HomeCard from './home-card';

const cardSections = [
  {
    icons: [<Dumbbell key={1} />, <Apple key={2} />, <HeartPulse key={3} />],
    title: 'Log meals and health metrics',
    description: 'Plus, you can create custom foods and recipes.',
  },
  {
    icons: [<SoupIcon key={1} />, <Settings key={2} />, <Utensils key={3} />],
    title: 'Custom diet settings',
    description: 'Set weight, macro and nutrient targets to meet your goals.',
  },
  {
    icons: [<BarChart key={1} />],
    title: 'Get valuable health reports and charts',
    description: 'Learn how nutrients and metrics correlate over time.',
  },
];

const HomeCardSection = () => {
  return (
    <div className="grid gap-4 justify-items-center ">
      {cardSections.map((cardSection, i) => (
        <HomeCard key={i} {...cardSection} />
      ))}
    </div>
  );
};
export default HomeCardSection;
