import styled from 'styled-components';

export const UserinfoContainer = styled.div`
display: flex;
justify-content: center; 
align-items: center;

.userName{
    font-size: 30px;

}
.user{
    display: flex;
    /* justify-content: center; */
    align-items: center;
}
.userAvatar{
    width: 20%;
    height: 20%;
    border: 1px solid #000000;
    border-radius: 50%;

}
.icons{
    display: flex;
    gap: 5px;
}
`