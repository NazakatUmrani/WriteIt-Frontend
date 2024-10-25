// import { Link } from "react-router-dom";

export function MainNav() {
  return (
    <nav
      className="flex items-center space-x-4 lg:space-x-6 mx-6"
    >
      <span
        // to="#"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </span>
      <span
        // to="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Customers
      </span>
      <span
        // to="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Products
      </span>
      <span
        // to="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Settings
      </span>
    </nav>
  )
}