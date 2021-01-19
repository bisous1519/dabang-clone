import React from "react";
import styled from "styled-components";

const SolutionBox = styled.div`
  flex: 1;
  border-radius: 5px;
  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  div {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-left: 1px solid rgb(238, 238, 238);
    border-right: 1px solid rgb(238, 238, 238);
    border-bottom: 1px solid rgb(238, 238, 238);
    padding: 15px 10px;
    span {
      display: block;
      padding: 2px 0;
    }
  }
`;

export default function SolutionItem({ name, desc, img }) {
  return (
    <SolutionBox>
      <img src={img} alt="solution" />
      <div>
        <span>{name}</span>
        <span>{desc}</span>
      </div>
    </SolutionBox>
  );
}
