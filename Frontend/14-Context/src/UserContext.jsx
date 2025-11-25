// Importing createContext function from React
// This function is used to create a global context
import { createContext } from "react";

// Creating a new context object
// This context will hold global data that can be shared
// across multiple components without passing props manually
const UserContext = createContext();

// Exporting the context so other components can use it
// This is a default export, so it is imported without {}
export default UserContext;
