// import { Input } from "@/registry/new-york/ui/input"

import { Input } from "./ui/input";


export function Search() {
//   const myStyle = {
//     border: "1px solid rgba(255, 255, 255, 0.18)", boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
//     background: "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))",
//     backdropFilter: "blur(10px)",
//     webkitBackdropFilter: "blur(10px)"
// }
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