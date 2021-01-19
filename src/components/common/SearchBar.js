import React from "react";
import styled, { css } from "styled-components";
import { IoSearchOutline } from "react-icons/io5";

const SearchWrapper = styled.div`
  width: 86%;
  margin: 0 auto;
  left: 0;
  right: 0;
  padding: 115px 0;
  border-bottom: 1px solid #eeeeee;
  h1 {
    text-align: center;
    font-size: 46px;
    /* margin: 15px 0; */
    line-height: 58px;
    color: rgb(68, 68, 68);
    span {
      color: rgb(21, 100, 249);
    }
  }

  div {
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 70%;
    height: 60px;
    border: 1px solid rgb(208, 210, 214);
    margin-top: 28px;
    display: flex;
    align-items: center;
    padding: 5px;
    box-sizing: border-box;
    span {
      width: 50px;
      height: 30px;
      border-right: 1px solid rgb(208, 210, 214);
      position: relative;
      svg {
        width: 18px;
        height: 18px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    input {
      flex: 1;
      margin: 0 20px;
      border: none;
      outline: none;
      font-size: 20px;
      &:focus {
        ${".searchBarBox"} {
          border: 1px solid rgb(96, 163, 255);
        }
      }
    }
    button {
      width: 95px;
      height: 100%;
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
      <div className="searchBarBox">
        <span>
          {/* <IoSearchOutline /> */}
          <svg width="18" height="18" viewBox="0 0 18 18">
            <g fill="none" fill-rule="evenodd" stroke="#222">
              <circle cx="7.5" cy="7.5" r="6.5"></circle>
              <path d="M12 12l5 5"></path>
            </g>
          </svg>
        </span>
        <input type="text" />
        <button>방 찾기</button>
      </div>
    </SearchWrapper>
  );
}
