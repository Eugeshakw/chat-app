// import { Discription } from "../components/discription/Discription";
import { Container } from "../components/container/Container.styled";
import { Chat } from "../components/chat/Chat";
import { List } from "./../components/list/List";
import { Detail } from "./../components/detail/Detail";

export const HomePage = () => {
  return (
    <>
      <Container>
        <div className="inner-container">
          <List />
          <Chat />
          <Detail />
        </div>
      </Container>
    </>
  );
};
