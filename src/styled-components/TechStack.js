import styled from "styled-components";
// import { keyframes } from "styled-components";

export const TechCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: ${(props) => (props.longwidth ? "20rem" : "16rem")};
  height: 18rem;
  margin-top: 5rem;
  border: solid #cdcd66 4px;
  border-radius: 20px;
  margin: 2rem;
  &:hover {
    box-shadow: 9px 9px #cdcd66;
    position: relative;
    left: 2px;
    /* width: 50rem; */
  }
`;

export const TechImg = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  /* padding: 2rem; */
  /* border: red solid 4px; */
`;

// export const TechOverlay = styled.div`
//   color: #0d1a27;

//   &:hover {
//     color: #cdcd66;
//   }
// `;
