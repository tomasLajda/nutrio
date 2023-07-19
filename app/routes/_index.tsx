import { type ActionArgs, type V2_MetaFunction } from '@remix-run/node';
import Home from '../components/home/home';
import { signInRedirect } from '../utils/sign-in-redirect';

export const loader = async (data: ActionArgs) => {
  return await signInRedirect(data);
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Nutrio' },
    { name: 'description', content: 'Log your meal data.' },
  ];
};

export default function Index() {
  return <Home />;
}
