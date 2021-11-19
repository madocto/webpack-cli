import ICONMAP from './iconMap';

interface IconProps {
  name: 'logo';
  className?: string;
  size?: number;
  color?: string;
}

const Icon = ({ className, name, size, color }: IconProps) => {
  const IconComponent = ICONMAP[name];
  return <IconComponent className={className} width={size} fill={color} />;
};

export default Icon;
