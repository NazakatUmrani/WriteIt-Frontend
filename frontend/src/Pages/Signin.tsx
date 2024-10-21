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
import { Link } from "react-router-dom"

const Signin = () => {
  return (
    <Card className="w-[90vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] 2xl:w-[20vw] flex items-center justify-center">
    <div className="w-full">
            <CardHeader>
                    <CardTitle className="text-4xl font-bold mb-[0.2rem] text-primary">Sign In</CardTitle>
                    <CardDescription>Enter your information to login to your account.</CardDescription>
                    <Separator />
            </CardHeader>
            <form>
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
                            <Button className="w-full">Submit</Button>
                            <Separator className="mt-4 mb-1"/>
                            <p className="text-xs text-muted-foreground">Don't have an account? <Link to="/signup" className="text-primary hover:text-foreground cursor-pointer">Sign Up</Link></p>
                    </CardFooter>
            </form>
    </div>
</Card>
  )
}

export default Signin