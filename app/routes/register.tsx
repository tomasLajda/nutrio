import { Link } from '@remix-run/react';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';

const Register = () => {
  return (
    <div className="flex justify-center items-center mb-5">
      <section className="grid gap-4 max-w-screen-lg w-11/12 bg-slate-100 px-2 py-6 rounded-md">
        <h1 className="text-center">Create Your Account</h1>
        <form method="POST" className="grid gap-3 justify-items-center mx-10">
          <div className="flex flex-col space-y-2 w-full">
            <Label htmlFor="username">Username</Label>
            <Input name="username" type="text" placeholder="Username"></Input>
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              type="email"
              placeholder="Email Address"
            ></Input>
            <Label htmlFor="password">Password</Label>
            <Input
              name="password"
              type="password"
              placeholder="Password"
            ></Input>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            ></Input>
          </div>
          <div className="flex my-2 w-full ml-2">
            <Label className="mr-5">Sex</Label>
            <RadioGroup defaultValue="" className="flex">
              <div className="flex items-center">
                <RadioGroupItem value="male" id="1" className="mr-1" />
                <Label htmlFor="male">Male</Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem value="female" className="mr-1" />
                <Label htmlFor="female">Female</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex flex-col items-start w-full px-1">
            <Label className="mb-1">Birthday</Label>
            <Input type="date"></Input>
          </div>

          <div className="flex-col w-full space-y-2">
            <div className="flex justify-start items-center px-1">
              <Label className="mr-2">Height</Label>
              <Input
                className="w-20"
                type="number"
                name="height"
                defaultValue={150}
                min={0}
                max={250}
              />
              <Label className="ml-1">cm</Label>
            </div>
            <div className="flex items-center px-1">
              <Label className="mr-2">Weight</Label>
              <Input
                className="w-20"
                type="number"
                name="weight"
                defaultValue={50}
                min={0}
                max={300}
              />
              <Label className="ml-1">kg</Label>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-1 ml-1">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </label>
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
