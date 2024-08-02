import { UserinfoContainer } from "./Userinfo.style";
import { FaUserEdit } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import avatar from "../../../images/avatar.png";
export const Userinfo = () => {
  return (
    <>
      <UserinfoContainer>
        <div className="user">
          <img src={avatar} alt="" className="userAvatar" />
          <h2 className="userName">Nick Doutheph</h2>
        </div>
        <div className="icons">
        
          <CiVideoOn />

          <CiCircleMore />
          <FaUserEdit />
        </div>
      </UserinfoContainer>
    </>
  );
};
