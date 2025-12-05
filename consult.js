let consultList1 = [
  {
    consultCode: "consult1",
    consultDateTime: "2025-01-14T13:30:00",
    memberCode: "M002",

    // 🔽 ownerList 기준으로 완전히 교체됨
    ownerName: "김철수",
    ownerContact: "010-2345-6789",
    nameType: null,
    serial: "2",
    isRepresentative: false,
    address: "남천동 148-9 101동 607호",

    favorability: "부정",
    content:
      "내용 상담 내용 상담내용 \n더미 데이터입니다. 더미 데이터입니다. 더 긴 컨텐츠\n 더미 데이터 더미더미더이잉 \n오잉오잉오잉오잉오잉오잉오잉오잉오잉오잉오잉오잉오\n잉오잉오잉오\n잉오잉오잉오잉오잉오잉오잉오잉오잉\n오잉오\n잉오잉오잉\n오잉오잉오잉오잉오잉오잉\n오잉오잉오잉오잉오\n잉오잉오잉오잉오잉오잉오\n잉오잉오잉",
  },
  {
    consultCode: "consult2",
    consultDateTime: "2025-01-16T10:00:00",
    memberCode: "M001",

    // 🔽 ownerList 기준으로 완전히 교체됨
    ownerName: "조원영",
    ownerContact: "010-3923-6162",
    nameType: "A",
    serial: "1",
    isRepresentative: true,
    address: "원효로1가 4-3 101동 201호",

    favorability: "중립",
    content: "상담 내용 더미 데이터입니다.",
  },
];

let consultDetail1 = {
  consultCode: "consult1",
  consultDateTime: "2025-01-14T13:30:00",
  memberCode: "M002",

  // 🔽 ownerList 기준으로 완전히 교체됨
  ownerName: "김철수",
  ownerContact: "010-2345-6789",
  nameType: null,
  serial: "2",
  isRepresentative: false,
  address: "남천동 148-9 101동 607호",

  favorability: "부정",
  content:
    "내용 상담 내용 상담내용 \n더미 데이터입니다. 더미 데이터입니다. 더 긴 컨텐츠\n 더미 데이터 더미더미더이잉 \n오잉오잉오잉오잉오잉오잉오잉오잉오잉오잉오잉오잉오\n잉오잉오잉오\n잉오잉오잉오잉오잉오잉오잉오잉오잉\n오잉오\n잉오잉오잉\n오잉오잉오잉오잉오잉오잉\n오잉오잉오잉오잉오\n잉오잉오잉오잉오잉오잉오\n잉오잉오잉",

  // 추가 필드
  consultType: "방문",
  consultManager: "김관리",
  audioFile: "audio/consult1_recording.mp3",
};

let consultDetail2 = {
  consultCode: "consult2",
  consultDateTime: "2025-01-16T10:00:00",
  memberCode: "M001",

  // 🔽 ownerList 기준으로 완전히 교체됨
  ownerName: "조원영",
  ownerContact: "010-3923-6162",
  nameType: "A",
  serial: "1",
  isRepresentative: true,
  address: "원효로1가 4-3 101동 201호",

  favorability: "중립",
  content: "상담 내용 더미 데이터입니다.",

  // 추가 필드
  consultType: "전화",
  consultManager: "박상담",
  audioFile: "audio/consult2_recording.mp3",
};

module.exports = {
  consultList1,
  consultDetail1,
  consultDetail2,
};
