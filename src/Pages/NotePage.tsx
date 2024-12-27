import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Textarea } from "@/components/ui/textarea"
import * as React from "react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
 
const NotePage = () => {
  const navigate = useNavigate();
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const title = (document.getElementById("title") as HTMLInputElement).value;
    const description = (document.getElementById("description") as HTMLInputElement).value;
    const token = localStorage.getItem("auth-token");

    try {
      const response = await fetch("https://writeit-backend.up.railway.app/api/notes/addNote",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": token ? token : "",
          },
          body: JSON.stringify({ title, description }),
        }
      );
      const data = await response.json();
      console.log(data);
      if(response.status !== 200){
        alert(data.error);
        return;
      } else {
        navigate("/"); // if success redirect to dashboard
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="w-[95vw] h-[95vh] m-auto flex flex-col items-center overflow-hidden gap-y-1">
      <Input className="border-0 focus-visible:ring-0" id="title" placeholder="Title of your note" />
      <Separator className="" />
      <Textarea className="h-[80vh] resize-none border-0 focus-visible:ring-0" placeholder="Type note description here." id="description"/>
      <div className="w-full h-min flex justify-end gap-x-2 mt-3">
        <Button onClick={handleClick}>Submit</Button>
        <Button variant="destructive" onClick={()=>{navigate("/")}}>Cancel</Button>
      </div>
    </div>
  );
};

export default NotePage;
