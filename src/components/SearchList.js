import React from "react";
import SolutionItem from "./SolutionItem";
import styled from "styled-components";

const SearchListBox = styled.div`
  width: 86%;
  margin: 0 auto;
  left: 0;
  right: 0;
  h2 {
    text-align: center;
    font-size: 25px;
    font-weight: 400;
    margin-top: 40px;
    margin-bottom: 10px;
    color: rgb(34, 34, 34);
  }
  p {
    text-align: center;
    color: rgb(102, 102, 102);
    margin-bottom: 30px;
  }
  ul {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
    margin-bottom: 50px;
    li {
      font-size: 13px;
      font-weight: 500;
      color: rgb(34, 34, 34);
    }
  }
`;

const SolutionListBox = styled.div`
  width: 100%;
  height: 160px;
  /* background: gray; */
  display: flex;
  /* justify-content: space-between; */
  gap: 10px;
  overflow-x: auto;
`;

const solutionList = [
  {
    id: 1,
    name: "월세 + 관리비",
    desc: "월 50 이하 원룸",
    img: "https://www.dabangapp.com/static/media/easy_1.8ea3046f.png",
  },
  {
    id: 2,
    name: "보증금",
    desc: "500 이하 원룸",
    img: "https://www.dabangapp.com/static/media/easy_2.c530a302.png",
  },
  {
    id: 3,
    name: "반려동물",
    desc: "가능한 원룸",
    img: "https://www.dabangapp.com/static/media/easy_3.5da2163e.png",
  },
  {
    id: 4,
    name: "낭만적인",
    desc: "옥탑방 원룸",
    img: "https://www.dabangapp.com/static/media/easy_4.d1dd22a5.png",
  },
  {
    id: 5,
    name: "2억 이하",
    desc: "전세 투쓰리룸",
    img: "https://www.dabangapp.com/static/media/easy_5.a6042ff7.png",
  },
  {
    id: 6,
    name: "전세자금대출",
    desc: "가능한 투쓰리룸",
    img: "https://www.dabangapp.com/static/media/easy_6.966df187.png",
  },
  {
    id: 7,
    name: "보증금",
    desc: "1천 이하 오피스텔",
    img: "https://www.dabangapp.com/static/media/easy_7.603ba420.png",
  },
  {
    id: 8,
    name: "단기임대",
    desc: "가능한 오피스텔",
    img: "https://www.dabangapp.com/static/media/easy_8.afb21d4c.png",
  },
  {
    id: 9,
    name: "3억 이하",
    desc: "전세 아파트",
    img: "https://www.dabangapp.com/static/media/easy_9.e5873e16.png",
  },
];

export default function SearchList() {
  return (
    <SearchListBox>
      <h2>쉬운 방찾기</h2>
      <p>방 찾기 초보를 위한 초간단 솔루션!</p>
      <SolutionListBox>
        {solutionList.map((list) => (
          <SolutionItem
            key={list.id}
            name={list.name}
            desc={list.desc}
            img={list.img}
          />
        ))}
      </SolutionListBox>

      <ul>
        <li>01</li>
        <li>02</li>
      </ul>
    </SearchListBox>
  );
}
