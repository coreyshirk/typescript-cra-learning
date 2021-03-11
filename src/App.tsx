import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import UserList from "./components/UserList";
import "./App.css";

export interface User {
  name: string;
  id: number;
}

const userList: Array<User> = [
  { id: 1, name: "Corey" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Jim" },
];

const App = () => (
  <ChakraProvider>
    <div className="App">
      <Header />
      <UserList users={userList} />
    </div>
  </ChakraProvider>
);

export default App;
