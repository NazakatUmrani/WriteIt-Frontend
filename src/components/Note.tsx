import { Button } from './ui/button';
import { Separator } from './ui/separator';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { EllipsisVertical } from 'lucide-react';
import { reduceStr } from '@/lib/utils';

const Note = (props: { note: { title: string; description: string; }; }) => {
  // const myStyle = {
  //   border: "1px solid rgba(255, 255, 255, 0.18)", boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
  //   background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
  //   backdropFilter: "blur(10px)",
  //   webkitBackdropFilter: "blur(10px)"
  // }
  return (
    // <div className='w-full h-full'>
    <Card className='text-left h-full w-full'>
      <CardHeader className='p-4'>
        <div className="flex justify-between">
        <CardTitle className='text-primary text-xl ml-2'>{props.note.title}</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger className='p-0 h-8 w-8 rounded-full items-baseline'><span className="grid place-content-center"><EllipsisVertical /></span></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem className='font-bold text-destructive hover:bg-destructive hover:text-foreground focus:bg-destructive focus:text-foreground'>Delete</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        {/* <Button variant="ghost" className="relative " style={myStyle}>
        </Button> */}
        </div>
      </CardHeader>
      <Separator className='mb-2' />
      <CardContent>
        <p>{reduceStr(props.note.description)}</p>
      </CardContent>
    </Card>
    // </div>
  )
}

export default Note