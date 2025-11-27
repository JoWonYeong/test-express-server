const { eventList1, eventList2, eventList3,   consultSummary1,consultSummary2,consultSummary3,consultSummary4 } = require("./data.js");
const express = require("express");
const cors = require("cors"); 

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors()); 

let dataList = [{
  roleType: '조합원',
  memberId: '1',
  position: '대표',
  name: '송기영',
  phoneNumber: '821048542974',
  friendliness: '부정',
  officeLocation: '하늘팰리스트아파트 102동 1004호',
  residence: '서울특별시 서초구 강남동 하늘팰리스트아파트 102동 1004호'
},{
    roleType: '대리인',
    memberId: '2',
    position: '대표',
    name: '조원영',
    phoneNumber: '821039236162',
    friendliness: '부정',
    officeLocation: '하늘팰리스트아파트 102동 1004호',
    residence: '서울특별시 서초구 강남동 하늘팰리스트아파트 102동 1004호'
  },{
    roleType: 'dd',
    memberId: '3',
    position: '대표dd',
    name: 'fff',
    phoneNumber: '821012345678',
    friendliness: '긍정',
    officeLocation: '하늘팰리스트아파트 102동 1004호',
    residence: '서울특별시 서초구 강남동 하늘팰리스트아파트 102동 1004호'
  },
];

let consultList = [{
  roleType: '조합원',
  memberId: '1',
  position: '대표',
  name: '송기영',
  phoneNumber: '821048542974',
  friendliness: '부정',
  officeLocation: '하늘팰리스트아파트 102동 1004호',
  residence: '서울특별시 서초구 강남동 하늘팰리스트아파트 102동 1004호',
  consultId: "consult1",
  consultationDate: '2025-01-14T13:30:00',
  submission: '제출',
  category: '카테고리1',
  nextConsultationDate: '2025-01-15T13:30:00',
  content:"내용 상담 내용 상담내용"
},{
    roleType: '대리인',
    memberId: '2',
    position: '대표',
    name: '조원영',
    phoneNumber: '821039236162',
    friendliness: '중립',
    officeLocation: '하늘팰리스트아파트 102동 1004호',
    residence: '서울특별시 서초구 강남동 하늘팰리스트아파트 102동 1004호',
    consultId:"consult2",
    consultationDate: '2025-01-16T10:00:00',
    submission: '미제출',
    category: '카테고리2',
    nextConsultationDate: '2025-01-20T14:00:00',
    content: "상담 내용 더미 데이터입니다."
  }
];

let regionList = [
  {"regionCode": "region1", "regionName": "우리가1구역 재건축정비사업 조합 우리가1구역 재건축정비사업 조합"},
  {"regionCode": "region2", "regionName": "우리가2구역 재건축정비사업 조합"},
  {"regionCode": "region3", "regionName": "우리가3구역 재건축정비사업 조합"},
  {"regionCode": "region4", "regionName": "우리가4구역 재건축정비사업 조합"},
];


app.get("/", (req, res) => {
  res.send("Express test server is running!");
});

app.get("/api/test", (req, res) => {
  console.log("get 요청 받음")
    console.log(dataList)
  res.json(dataList);
});

app.get("/api/test/:id", (req, res) => {
  const { id } = req.params;

  if (id === "1") {
    res.json({
      roleType: '조합원',
      memberId: '1',
      position: '대표',
      name: '송기영',
      phoneNumber: '821048542974',
      friendliness: '부정',
      officeLocation: '하늘팰리스트아파트 102동 1004호',
      residence: '서울특별시 서초구 강남동 하늘팰리스트아파트 102동 1004호',
      ownershipType: '단독',
      affiliation: '우리가 1구역 재개발 조합',
      birthDate: '1989-05-20',
      extraPhone1: '821012345678',
      extraPhone2: '821087654321',
      note1: '비고1',
      note2: '비고2'
    });
  } else if(id === "2") {
 res.json({
      roleType: '대리인',
      memberId: '2',
      position: '대표',
      name: '조원영',
      phoneNumber: '821039236162',
      friendliness: '부정',
      officeLocation: '하늘팰리스트아파트 102동 1004호',
      residence: '서울특별시 서초구 강남동 하늘팰리스트아파트 102동 1004호',
      ownershipType: '단독',
      affiliation: '우리가 1구역 재개발 조합',
      birthDate: '1989-05-20',
      extraPhone1: '821012345678',
      extraPhone2: '821087654321',
      note1: '비고1',
      note2: '비고2'
    });
  } else {
    res.status(404).json({ message: "멤버를 찾을 수 없습니다." });
  }
});

app.post("/api/test", (req, res) => {
  const { label, phone } = req.body;

  if (!label || !phone) {
    return res.status(400).json({ message: "label과 phone은 필수입니다." });
  }

  const exists = dataList.some((item) => item.phone === phone);
  if (exists) {
    return res.status(409).json({ message: "이미 존재하는 phone입니다." });
  }

  const newData = { label, phone };
  dataList.push(newData);

  res.status(201).json(newData);
});

// 상담 내역
app.get("/api/consult-list", (req, res) => {
  res.json(consultList);
});

// 구역 리스트
app.get("/api/region-list", (req, res) => {
  res.json(regionList);
});


// 이벤트 리스트
app.get("/api/event-list", (req, res) => {
  const { regionCode } = req.query;

  if (!regionCode) {
    return res.status(400).json({ error: "구역 지정 안되어있음요" });
  }

  let selectedList;
  switch (regionCode) {
    case "region1":
      selectedList = eventList1;
      break;
    case "region2":
      selectedList = eventList2;
      break;
    case "region3":
      selectedList = eventList3;
      break;
    case "region4":
      selectedList = [];  
      break;
    default:
      selectedList = [];
  }

  res.json(selectedList);
});

// 상담 현황
app.get("/api/consult-summary", (req, res)=>{
  const { regionCode } = req.query;
  let selectedSummary;

  switch (regionCode) {
    case "region1":
      selectedSummary = consultSummary1;
      break;
    case "region2":
      selectedSummary = consultSummary2;
      break;
    case "region3":
      selectedSummary = consultSummary3;
      break;
    case "region4":
      selectedSummary = consultSummary4;  
      break;
    default:
      selectedSummary = {};
  }

  res.json(selectedSummary);
})


// 서버 실행
app.listen(PORT, () => {
  console.log(`서버실행 ====== http://localhost:${PORT}`);
});
