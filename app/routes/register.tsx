import { Link } from '@remix-run/react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';

const Register = () => {
  return (
    <div className="flex justify-center items-center mb-5">
      <section className="grid gap-4 max-w-md bg-slate-100 px-2 py-6 rounded-md">
        <h1 className="text-center">Create Your Account</h1>
        <form method="POST" className="grid gap-3 justify-items-center mx-10">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input name="username" type="text" placeholder="Username"></Input>
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              type="email"
              placeholder="Email Address"
            ></Input>
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              name="password"
              type="password"
              placeholder="Password"
            ></Input>
          </div>
          <div>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            ></Input>
          </div>
          <div>
            <Label>Sex</Label>
            <RadioGroup>
              <div>
                <RadioGroupItem value="male"></RadioGroupItem>
                <Label htmlFor="male">Male</Label>
              </div>
              <div>
                <RadioGroupItem value="female"></RadioGroupItem>
                <Label htmlFor="female">Female</Label>
              </div>
            </RadioGroup>
          </div>
          <Button type="submit">Sign Up</Button>
        </form>
        <div className="flex flex-col items-center">
          <p>Already have an account?</p>
          <Button variant="link">
            <Link to="/login">Log in</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};
export default Register;
