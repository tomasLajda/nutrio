import { Link } from '@remix-run/react';
import { Button } from '../components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

const Login = () => {
  return (
    <div className="flex justify-center items-center mb-5">
      <section className="grid gap-4 max-w-screen-lg w-11/12 bg-slate-100 px-2 py-6 rounded-md">
        <h1 className="text-center">Welcome Back</h1>
        <form method="POST" className="grid gap-3 justify-items-center mx-10">
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
          <Button type="submit">Log in</Button>
        </form>
        <Dialog>
          <DialogTrigger>
            <Button variant="link">Forgot your password?</Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Forgot Password</DialogTitle>
              <DialogDescription>
                Enter the email with your account:
              </DialogDescription>
            </DialogHeader>
            <div>
              <Input name="reset" type="email"></Input>
            </div>
            <DialogFooter>
              <Button type="submit">Reset Password</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <div className="flex flex-col items-center">
          <p>Haven't sign up?</p>
          <Button variant="link">
            <Link to="/register">Sign Up</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};
export default Login;
