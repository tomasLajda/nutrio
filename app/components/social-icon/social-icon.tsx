import type { ReactNode } from 'react';

const SocialIcon: React.FC<{ icon: ReactNode; link: string }> = ({
  icon,
  link,
}) => {
  return (
    <a href={link} rel="noreferrer" target="_blank">
      <div className="w-fit bg-gray-50 border-4 border-gray-50 p-1 rounded-full cursor-pointer">
        {icon}
      </div>
    </a>
  );
};
export default SocialIcon;
