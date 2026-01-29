const {
  eventList1,
  eventList2,
  eventList3,
  consultSummary1,
  consultSummary2,
  consultSummary3,
  consultSummary4,
} = require("./dashboard.js");
const {
  memberList1,
  memberList2,
  memberList3,
  memberList4,
} = require("./member.js");
const {
  consultList1,
  consultDetail1,
  consultDetail2,
} = require("./consult.js");
const {
  createMonthlySchedule,
  getScheduleByDate,
  todaySchedules,
} = require("./schedule.js");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

let regionList = [
  {
    regionCode: "region1",
    regionName:
      "우리가1구역 재건축정비사업 조합 우리가1구역 재건축정비사업 조합",
  },
  { regionCode: "region2", regionName: "우리가2구역 재건축정비사업 조합" },
  { regionCode: "region3", regionName: "우리가3구역 재건축정비사업 조합" },
  { regionCode: "region4", regionName: "우리가4구역 재건축정비사업 조합" },
  { regionCode: "region5", regionName: "우리가5구역 재건축정비사업 조합" },
  { regionCode: "region6", regionName: "우리가6구역 재건축정비사업 조합" },
  { regionCode: "region7", regionName: "우리가7구역" },
];

app.get("/", (req, res) => {
  res.send("Express test server is running!");
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

// 구역 리스트
app.get("/api/region-list", (req, res) => {
  res.json(regionList);
});

// 멤버 리스트
app.get("/api/member-list", (req, res) => {
  const { regionCode } = req.query;

  if (!regionCode) {
    return res.status(400).json({ error: "구역 지정 안되어있음요" });
  }

  let selectedList;
  switch (regionCode) {
    case "region1":
      selectedList = memberList1;
      break;
    case "region2":
      selectedList = memberList2;
      break;
    case "region3":
      selectedList = memberList3;
      break;
    case "region4":
      selectedList = memberList4;
      break;
    default:
      selectedList = [];
  }

  res.json(selectedList);
});

// 멤버 상세
app.get("/api/member-list/:memberCode", (req, res) => {
  const { memberCode } = req.params;

  if (memberCode === "M001") {
    res.json({
      memberCode: "M001",
      serial: "1",
      isRepresentative: true,
      ownerName: "조원영",
      nameType: "A",
      address: "원효로1가 4-3 101동 201호",
      ownerContact: "010-3923-6162",
      position: "대표", // 직책
      actualResidence: "원효로1가 4-3", // 실거주지
      extraContacts: ["010-1111-1111", "010-2222-2222"], // 기타 연락처
      addresses: ["원효로1가 4-3 101동 201호", "마포구 3가 101동 202호"], // 소재지 n건
      birthDate: "1990-01-01", // 생년월일
      ownershipType: "단독", // 소유구분
      gender: "여자",
      favorability: "긍정",
    });
  } else if (memberCode === "M002") {
    res.json({
      memberCode: "M002",
      serial: "2",
      isRepresentative: false,
      ownerName: "김철수",
      nameType: null,
      address: "남천동 148-9 101동 607호",
      ownerContact: "010-2345-6789",
      position: "부대표",
      actualResidence: "남천동 148-9",
      extraContacts: ["010-3333-3333"],
      addresses: ["남천동 148-9 101동 607호"],
      birthDate: "1985-07-12", // 생년월일
      ownershipType: "공동",
      gender: "남자",
      favorability: "부젇",
    });
  } else {
    res.status(404).json({ message: "해당 멤버를 찾을 수 없습니다." });
  }
});

// 상담 내역
app.get("/api/consult-list", (req, res) => {
  res.json(consultList1);
});

// 상담 상세
app.get("/api/consult-list/:consultCode", (req, res) => {
  const { consultCode } = req.params;
  if (consultCode === "consult1") {
    res.json(consultDetail1);
  } else if (consultCode === "consult2") {
    res.json(consultDetail2);
  } else {
    res.status(404).json({ message: "해당 상담을 찾을 수 없습니다." });
  }
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
app.get("/api/consult-summary", (req, res) => {
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
});

// GET /schedules
// 오늘 스케줄
app.get(
  "/api/members/:memberCode/districts/:regionCode/today-schedules",
  (req, res) => {
    const { memberCode, regionCode } = req.params;

    console.log(todaySchedules);

    res.json(todaySchedules);
  },
);

// 특정 월/날짜 스케줄
app.get(
  "/api/members/:memberCode/districts/:regionCode/schedules",
  (req, res) => {
    const { memberCode, regionCode } = req.params;
    const { year, month, day } = req.query;
    const onlyMonth = !day; // day 없으면 월 단위 조회


    const items = [];

    if (onlyMonth) {
      const monthSchedule = createMonthlySchedule(year, month);
      items.push(...monthSchedule);
    } else {
      const dateSchedule = getScheduleByDate(year, month, day);
      items.push(...dateSchedule);
    }

  
    res.json(items);
  },
);

app.delete("/api/schedules/:scheduleCode", async (req, res) => {
  const { scheduleCode } = req.params;

    // return res.status(404).json({
    //   message: "대상 일정을 찾을 수 없습니다",
    // });   
    return res.status(204).send();

});


// 서버 실행
app.listen(PORT, () => {
  console.log(`서버실행 ====== http://localhost:${PORT}`);
});
