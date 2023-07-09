import { Link } from '@remix-run/react';
import { Donut } from 'lucide-react';

function Logo() {
  return (
    <Link to="/">
      <div className="flex items-center flex-grow ml-1">
        <Donut size={36}></Donut>
        <h1 className="text-3xl font-semibold tracking-tight first:mt-0">
          Nutrio
        </h1>
      </div>
    </Link>
  );
}
export default Logo;
