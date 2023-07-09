import type { V2_MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import HomeCardSection from '../components/home/home-card-section';
import HomeFooter from '../components/home/home-footer';
import { Button } from '../components/ui/button';

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Nutrio | Home' },
    { name: 'description', content: 'Welcome to Nutrio!' },
  ];
};

export default function Index() {
  return (
    <>
      <main className="grid justify-items-center gap-16 mb-10">
        <div className="grid justify-items-center gap-3 max-w-screen-lg w-full text-center md:grid-cols-2">
          <div className="flex flex-col items-center space-y-4">
            <div>
              <h1>Eat smarter.</h1>
              <h1>Live better.</h1>
            </div>
            <p className="mx-16 ">
              Track your diet, exercise, and health data.
            </p>
            <Button>
              <Link to="/register">Register for free</Link>
            </Button>
            <div className="flex flex-col">
              <p>Already have an account?</p>
              <Button className="text-base font-bold" variant="link">
                <Link to="/login">Log in</Link>
              </Button>
            </div>
          </div>
          <iframe
            className="aspect-video px-5 max-w-sm max-h-sm w-full h-full md:max-w-none md:max-h-none md:mr-4"
            src="https://www.youtube.com/embed/wBadu03CglM"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          >
            a
          </iframe>
        </div>

        <HomeCardSection />
      </main>
      <HomeFooter />
    </>
  );
}
