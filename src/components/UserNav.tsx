import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
// import { DropdownMenuShortcut } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export function UserNav() {
//   const myStyle = {
//     border: "1px solid rgba(255, 255, 255, 0.18)", boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
//     background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
//     backdropFilter: "blur(10px)",
//     webkitBackdropFilter: "blur(10px)"
// }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full items-baseline">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatars/01.png" alt="@shadcn" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 bg-[#1a1a1a] mt-2 mr-6 rounded-lg border py-2" align="end">
        <DropdownMenuLabel className="font-normal w-full">
          <div className="flex flex-col space-y-1">
            <p className="text-m font-medium leading-none">Nazakat Umrani</p>
            <p className="text-xs leading-none text-muted-foreground">
              nazakat@umrani.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="my-2 border mx-2"/>
        <DropdownMenuGroup className="mx-2">
          <DropdownMenuItem className="hover:bg-[#2b2a2a] hover:border hover:border-border focus:outline-none">Profile</DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-[#2b2a2a] hover:border hover:border-border focus:outline-none">Toggle Theme</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="my-2 border mx-2"/>
        <DropdownMenuItem className="hover:bg-[#2b2a2a] hover:border hover:border-border focus:outline-none mx-2">Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}