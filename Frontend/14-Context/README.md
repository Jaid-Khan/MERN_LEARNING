```React Context API & Router Demo
A simple React application demonstrating the use of Context API for global state management and React Router for navigation.

Features
Global State Management: Uses React Context API to share state across components

Client-side Routing: Implements React Router for seamless navigation

Multi-page Application: Home, About, and Contact pages

State Persistence: Global counter value maintained across page navigation

Project Structure
text
src/
├── App.jsx          # Main application component with context and routing
├── Home.jsx         # Home page with counter controls
├── About.jsx        # About page displaying global state
├── Contact.jsx      # Contact page with navigation
├── UserContext.jsx  # Context creation and export
└── main.jsx         # Application entry point
Components
App.jsx
Main application wrapper

Sets up UserContext with global state (a and setA)

Configures React Router with three routes

Provides context to all child components

Home.jsx
Displays current context value

Includes button to increment global counter

Navigation links to About and Contact pages

About.jsx
Displays current context value (read-only)

Navigation links to Home and Contact pages

Contact.jsx
Simple contact page

Navigation links to Home and About pages

UserContext.jsx
Creates and exports the React Context

Install dependencies:

bash
npm install
Start the development server:

bash
npm run dev
Usage
Navigation: Use the links to navigate between Home, About, and Contact pages

State Management:

The counter value is shared globally using Context API

Increment the counter from the Home page

Observe the updated value across all pages

No Page Refresh: Navigation happens without page reloads using React Router

Key Concepts Demonstrated
React Context API
jsx
// Creating context
const UserContext = createContext();

// Providing context
<UserContext.Provider value={{ a, setA }}>
  {/* Child components */}
</UserContext.Provider>

// Consuming context
const { a, setA } = useContext(UserContext);
React Router
jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter>
State Management
Global state a accessible from any component

State updates trigger re-renders across all consuming components

State persists during client-side navigation

Dependencies
React

React DOM

React Router DOM

Scripts
npm run dev - Start development server

npm run build - Build for production

npm run preview - Preview production build```