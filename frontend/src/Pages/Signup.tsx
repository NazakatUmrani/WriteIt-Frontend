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

const Signup = () => {
        return (
                <Card className="w-[90vw] flex items-center justify-center md:w-[50vw]">
                        {/* <div className=""> */}
                                <div className="w-full">
                                        <CardHeader>
                                                <CardTitle>Sign Up</CardTitle>
                                                <CardDescription>Enter your information to create an account.</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                                <form>
                                                        <div className="grid w-full items-center gap-4">
                                                                <div className="flex flex-col items-start space-y-1.5">
                                                                        <Label htmlFor="name">Name</Label>
                                                                        <Input id="name" placeholder="Enter your full name" />
                                                                </div>
                                                                <div className="flex flex-col items-start space-y-1.5">
                                                                        <Label htmlFor="email">Email</Label>
                                                                        <Input id="email" placeholder="example@mail.com" />
                                                                </div>
                                                                <div className="flex flex-col items-start space-y-1.5">
                                                                        <Label htmlFor="password">Password</Label>
                                                                        <Input id="password" placeholder="Enter a strong password." />
                                                                </div>
                                                        </div>
                                                </form>
                                        </CardContent>
                                        <CardFooter className="flex">
                                                <Button className="w-full">Deploy</Button>
                                        </CardFooter>
                                </div>
                        {/* </div> */}
                </Card>
        )
}

export default Signup