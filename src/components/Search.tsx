// import { Input } from "@/registry/new-york/ui/input"

import { Input } from "./ui/input";


export function Search() {
  return (
    <div>
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] lg:w-[300px]"
        // style={myStyle}
      />
    </div>
  )
}