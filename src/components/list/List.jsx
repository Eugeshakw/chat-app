import { ListContainer } from "./List.style";
import { Userinfo } from "./UserInfo/UserInfo";
import { Chatlist } from "./Chatlist/Chatlist";

export const List = () => {
  return (
    <>
      <ListContainer>
        <Userinfo />
        <Chatlist />
      </ListContainer>
    </>
  );
};
