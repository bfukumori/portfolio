import { navigationFields } from './Navbar/Navbar';

interface NavigationDotsProps {
  active: string;
}

export default function NavigationDots({ active }: NavigationDotsProps) {
  return (
    <div className='app__navigation'>
      {navigationFields.map((item, index) => (
        <a
          title={`navigation-dots-${index}`}
          href={`#${item}`}
          key={item + index}
          className='app__navigation-dot'
          style={active === item ? { backgroundColor: '#313BAC' } : {}}
        />
      ))}
    </div>
  );
}
