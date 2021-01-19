import React from "react";
import styled from "styled-components";

const HeaderBox = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  border-bottom: 1px solid #ebebeb;
  div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 10px;
    ul {
      display: flex;
      li {
        font-size: 13px;
        color: #707070;
        padding: 0 10px;
        cursor: pointer;
        &:hover {
          color: #006cff;
        }
      }
      li + li {
        border-left: 1px solid #ebebeb;
      }
    }
  }
  div:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 45px;
    ul {
      display: flex;
      gap: 35px;
      li {
        font-size: 15px;
        cursor: pointer;
        &:hover {
          color: #006cff;
        }
      }
    }
    span {
      font-size: 13px;
      color: #666666;
      cursor: pointer;
      &:hover {
        color: #006cff;
      }
    }
  }
`;

export default function Header() {
  return (
    <HeaderBox>
      <div>
        <svg width="61" height="27" viewBox="0 0 61 27">
          <g fill="none" fill-rule="evenodd">
            <path
              fill="#006CFF"
              d="M0 .75v17.263h12.295V13.08H4.918V5.682h7.377V.75zM15.984.75v9.865H20.9V5.682h4.919V.75zM47.951.75v9.865h4.918V5.682h4.918V.75zM39.344.75v3.7h-3.688V.75h-4.918v17.263h13.524V.75h-4.918zm-3.688 12.33h3.688V9.383h-3.688v3.699z"
            ></path>
            <g transform="translate(47.275 12.88)">
              <path
                fill="#006CFF"
                d="M6.823 9.017c-1.12 0-2.028-.91-2.028-2.034 0-1.124.908-2.035 2.028-2.035s2.03.911 2.03 2.035a2.032 2.032 0 0 1-2.03 2.034m0-8.816C3.09.2.061 3.237.061 6.983c0 3.745 3.028 6.782 6.762 6.782 3.735 0 6.763-3.037 6.763-6.782C13.586 3.237 10.558.2 6.823.2"
              ></path>
            </g>
          </g>
        </svg>
        <ul>
          <li>프로중개사 사이트</li>
          <li>다방허브 사이트</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>방찾기</li>
          <li>분양</li>
          <li>관심목록</li>
          <li>방내놓기</li>
          <li>알림</li>
        </ul>
        <span>회원가입 - 로그인</span>
      </div>
    </HeaderBox>
  );
}
