const HomeCard: React.FC<{
  icons: React.ReactNode[];
  title: string;
  description: string;
}> = ({ icons, title, description }) => {
  return (
    <div className="max-w-xs">
      <div className="flex justify-center">
        {icons.map((icon, index) => (
          <div key={index} className="mr-2">
            {icon}
          </div>
        ))}
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default HomeCard;
