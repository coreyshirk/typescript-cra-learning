import { FunctionComponent } from "react";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { User } from "../App";

type UserListProps = {
  users: Array<User>;
};

const UserList: FunctionComponent<UserListProps> = ({ users }) => (
  <div>
    <UnorderedList>
      {users.map((user: User) => (
        <ListItem>
          {user.id} - {user.name}
        </ListItem>
      ))}
    </UnorderedList>
  </div>
);

export default UserList;
