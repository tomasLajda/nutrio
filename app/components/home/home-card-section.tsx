import {
  Apple,
  BarChart,
  Dumbbell,
  HeartPulse,
  ScrollText,
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
  {
    icons: [<ScrollText key={1} />],
    title: 'Track up your nutriends',
    description: 'Log your meals and track all your macro.',
  },
];

const HomeCardSection = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col items-center mb-16">
        <h1>Develop Healthy Habits</h1>
        <p className="max-w-xs ">
          Count your calories, ensure you're meeting nutrient targets, and see
          your progress over time.
        </p>
      </div>
      <div className="grid gap-24 justify-items-center md:grid-cols-2">
        {cardSections.map((cardSection, i) => (
          <HomeCard key={i} {...cardSection} />
        ))}
      </div>
    </div>
  );
};
export default HomeCardSection;
