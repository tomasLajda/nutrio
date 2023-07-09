import { Link } from '@remix-run/react';
import type { FC } from 'react';
import type { List } from '../../types/types';
import { Button } from '../ui/button';

const HomeFooterList: FC<{
  props: List;
}> = ({ props }) => {
  const { title, links } = props;

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {links.map(({ path, label }, i) => (
          <li key={i}>
            <Link to={path}>
              <Button variant="link" className="text-white">
                {label}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default HomeFooterList;
