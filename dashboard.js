 const eventList1 = [
  {
    "code": "E001",
    "region": "1구역",
    "type": "전자동의서",
    "detailType": "일반동의서",
    "title": "2025년도 조합원 회비 동의",
    "startDate": "2025-11-20T09:00:00",
    "endDate": "2025-11-25T18:00:00",
    "electronicStart": null,
    "electronicEnd": null,
    "paperStart": null,
    "paperEnd": null,
    "meetingDate": null
  },
  {
    "code": "E002",    
    "region": "1구역",
    "type": "전자동의서",
    "detailType": "대표자선임",
    "title": "신임 대표자 선임 동의",
    "startDate": "2025-12-01T09:00:00",
    "endDate": "2025-12-05T18:00:00",
    "electronicStart": null,
    "electronicEnd": null,
    "paperStart": null,
    "paperEnd": null,
    "meetingDate": null
  },
  {
    "code": "E003",
    "region": "1구역",
    "type": "총회",
    "detailType": "전자투표",
    "title": "2025년도 정기총회 전자투표",
    "startDate": null,
    "endDate": null,
    "electronicStart": "2025-12-10T09:00:00",
    "electronicEnd": "2025-12-15T18:00:00",
    "paperStart": null,
    "paperEnd": null,
    "meetingDate": null
  },
  {
    "code": "E004",
    "region": "1구역",
    "type": "총회",
    "detailType": "현장투표",
    "title": "임시총회 현장투표",
    "startDate": null,
    "endDate": null,
    "electronicStart": null,
    "electronicEnd": null,
    "paperStart": "2025-12-20T09:00:00",
    "paperEnd": "2025-12-22T18:00:00",
    "meetingDate": "2025-12-23T14:00:00"
  },
  {
    "code": "E005",
    "type": "총회",
    "detailType": "전자, 현장투표",
    "title": "2026년도 정기총회 전자/현장 투표",
    "startDate": null,
    "endDate": null,
    "electronicStart": "2026-01-10T09:00:00",
    "electronicEnd": "2026-01-15T18:00:00",
    "paperStart": "2026-01-16T09:00:00",
    "paperEnd": "2026-01-18T18:00:00",
    "meetingDate": "2026-01-19T14:00:00"
  }
]

 const eventList2 = [
  {
    "code": "E006",
    "region": "2구역",
    "type": "전자동의서",
    "detailType": "일반동의서",
    "title": "2025년도 조합원 회비 동의 (2구역)",
    "startDate": "2025-11-21T09:00:00",
    "endDate": "2025-11-26T18:00:00",
    "electronicStart": null,
    "electronicEnd": null,
    "paperStart": null,
    "paperEnd": null,
    "meetingDate": null
  },
  {
    "code": "E007",
    "region": "2구역",
    "type": "총회",
    "detailType": "전자투표",
    "title": "2025년도 정기총회 전자투표 (2구역)",
    "startDate": null,
    "endDate": null,
    "electronicStart": "2025-12-11T09:00:00",
    "electronicEnd": "2025-12-16T18:00:00",
    "paperStart": null,
    "paperEnd": null,
    "meetingDate": null
  }
]

 const eventList3 = [
  {
    "code": "E008",
    "region": "3구역",
    "type": "총회",
    "detailType": "현장투표",
    "title": "임시총회 현장투표 (3구역)",
    "startDate": null,
    "endDate": null,
    "electronicStart": null,
    "electronicEnd": null,
    "paperStart": "2025-12-22T09:00:00",
    "paperEnd": "2025-12-24T18:00:00",
    "meetingDate": "2025-12-25T14:00:00"
  }
];

 const eventList4 = [
  {
    "code": "E009",
    "region": "4구역",
    "type": "총회",
    "detailType": "전자, 현장투표",
    "title": "2026년도 정기총회 전자/현장 투표 (4구역)",
    "startDate": null,
    "endDate": null,
    "electronicStart": "2026-01-11T09:00:00",
    "electronicEnd": "2026-01-16T18:00:00",
    "paperStart": "2026-01-17T09:00:00",
    "paperEnd": "2026-01-19T18:00:00",
    "meetingDate": "2026-01-20T14:00:00"
  }
];

const consultSummary1 = {
  "todayCount": 1,
  "accumulatedCount": 11,
  "targetCount": 111,
  "totalTargetCount": 1111
}

const consultSummary2 = {
  "todayCount": 2,
  "accumulatedCount": 22,
  "targetCount": 222,
  "totalTargetCount": 2222
}

const consultSummary3 = {
  "todayCount": 3,
  "accumulatedCount": 33,
  "targetCount": 33,
  "totalTargetCount": 3333
}

const consultSummary4 = {
  "todayCount": 4,
  "accumulatedCount": 44,
  "targetCount": 444,
  "totalTargetCount": 4444
}


module.exports = {
  eventList1,
  eventList2,
  eventList3,
  consultSummary1,consultSummary2,consultSummary3,consultSummary4

};
