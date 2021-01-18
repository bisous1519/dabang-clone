import React from "react";
import styled from "styled-components";

const SearchWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  left: 0;
  right: 0;
  padding: 100px 0;
  border-bottom: 1px solid #eeeeee;
  h1 {
    text-align: center;
    font-size: 43px;
    font-weight: normal;
    margin: 5px 0;
    span {
      color: #006cff;
    }
  }

  div {
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 65%;
    height: 60px;
    border: 1px solid #c5c5c5;
    margin-top: 30px;
    display: flex;
    padding: 5px;
    box-sizing: border-box;
    span {
      width: 50px;
      height: 50px;
      i {
        padding: 0 5px;
        border-right: 1px solid #c5c5c5;
      }
    }
    input {
      flex: 1;
      margin: 0 20px;
      border: none;
      outline: none;
      font-size: 20px;
    }
    button {
      width: 95px;
      background: #006cff;
      color: #ffffff;
      border: none;
      outline: none;
      font-size: 15px;
    }
  }
`;

export default function SearchBar() {
  return (
    <SearchWrapper>
      <h1>
        <span>어떤 동네, 어떤 방</span>에서
      </h1>
      <h1>살고 싶으신가요?</h1>
      <div>
        <span>
          <i>9</i>
        </span>
        <input type="text" />
        <button>방 찾기</button>
      </div>
    </SearchWrapper>
  );
}
