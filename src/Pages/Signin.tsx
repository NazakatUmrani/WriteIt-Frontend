import { Button } from "@/components/ui/button"
import {
        Card,
        CardContent,
        CardDescription,
        CardFooter,
        CardHeader,
        CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Link, useNavigate } from "react-router-dom"

const Signin = () => {
        const navigate = useNavigate();
        const handleClick = async (e:React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                const email = (document.getElementById('email') as HTMLInputElement).value;
                const password = (document.getElementById('password') as HTMLInputElement).value;
                // Check if password and confirm password match and password should be atleast 8 characters long
                // check if name is empty then focus on name input
                if(email==="" || email.length <= 3) (document.getElementById('email') as HTMLInputElement).focus();
                if(password==="") return alert('Passwords can\'t be empty');
                // alert('Submitted');
                const response = await fetch('https://writeit-backend.up.railway.app/api/auth/signin', {
                        method: 'POST',
                        headers: {
                                'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({email,password})
                })
                const data = await response.json();
                console.log(data);
                localStorage.setItem('auth-token', data.authToken);
                // if success redirect to dashboard
                navigate('/');
        }
  return (
    <Card className="w-[90vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] 2xl:w-[20vw] flex items-center justify-center">
    <div className="w-full">
            <CardHeader>
                    <CardTitle className="text-4xl font-bold mb-[0.2rem] text-primary">Sign In</CardTitle>
                    <CardDescription>Enter your information to login to your account.</CardDescription>
                    <Separator />
            </CardHeader>
            <form onSubmit={handleClick}>
                    <CardContent>
                            <div className="grid w-full items-center gap-4">
                                    <div className="flex flex-col items-start space-y-1.5">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" placeholder="example@mail.com" required minLength={3} />
                                    </div>
                                    <div className="flex flex-col items-start space-y-1.5">
                                            <Label htmlFor="password">Password</Label>
                                            <Input id="password" type="password" placeholder="Enter a strong password." required minLength={3} />
                                    </div>
                            </div>
                    </CardContent>
                    <CardFooter className="flex flex-col">
                            <Button type="submit" className="w-full">Submit</Button>
                            <Separator className="mt-4 mb-1"/>
                            <p className="text-xs text-muted-foreground">Don't have an account? <Link to="/signup" className="text-primary hover:text-foreground cursor-pointer">Sign Up</Link></p>
                    </CardFooter>
            </form>
    </div>
</Card>
  )
}

export default Signin