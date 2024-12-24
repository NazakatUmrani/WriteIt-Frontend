import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement)
      .value;
    const cpassword = (document.getElementById("cpassword") as HTMLInputElement)
      .value;
    // Check if password and confirm password match and password should be atleast 8 characters long
    // check if name is empty then focus on name input
    if (password !== cpassword || password === "")
      return alert("Passwords do not match");
    // alert('Submitted');
    const response = await fetch(
      "https://writeit-backend.up.railway.app/api/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      }
    );
    const data = await response.json();
//     console.log(data);
    localStorage.setItem("auth-token", data.authToken);
    // if success redirect to dashboard
    navigate("/");
  };
  return (
    <Card className="w-[90vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] 2xl:w-[20vw] flex items-center justify-center mycard">
      <div className="w-full">
        <CardHeader>
          <CardTitle className="text-4xl font-bold mb-[0.2rem] text-primary">
            Sign Up
          </CardTitle>
          <CardDescription>
            Enter your information to create an account.
          </CardDescription>
          <Separator />
        </CardHeader>
        <form onSubmit={submit}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col items-start space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  min={3}
                  placeholder="Enter your full name"
                  required
                  minLength={3}
                />
              </div>
              <div className="flex flex-col items-start space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@mail.com"
                  required
                  minLength={3}
                />
              </div>
              <div className="flex flex-col items-start space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter a strong password."
                  required
                  minLength={8}
                />
              </div>
              <div className="flex flex-col items-start space-y-1.5">
                <Label htmlFor="cpassword">Confirm Password</Label>
                <Input
                  id="cpassword"
                  type="password"
                  placeholder="Enter your password again."
                  required
                  minLength={8}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button type="submit" className="w-full">
              Submit
            </Button>
            <Separator className="mt-4 mb-1" />
            <p className="text-xs text-muted-foreground">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-primary hover:text-foreground cursor-pointer"
              >
                Sign In
              </Link>
            </p>
          </CardFooter>
        </form>
      </div>
    </Card>
  );
};

export default Signup;
