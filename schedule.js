// helper: 임의 ScheduleItem 생성

function createScheduleItem({
  scheduleCode,
  districtCode,
  partnerCode,
  partnerName,
  partnerPhone,
  partnerAddress,
  scheduleType,
  scheduleName,
  startDateAt,
  startTimeAt,
  location,
  memo,
  createdAt,
  lastModifiedAt,
}) {
  return {
    scheduleCode,
    districtCode,
    partnerCode,
    partnerName,
    partnerPhone,
    partnerAddress,
    scheduleType,
    scheduleName,
    startDateAt,
    startTimeAt,
    location,
    memo,
    createdAt: createdAt.toISOString(),
    lastModifiedAt: lastModifiedAt.toISOString(),
  };
}

const now = new Date();

function createMonthlySchedule(year, month) {
  const result = [];

  // 스케줄이 있는 5일
  const days = [3, 7, 12, 18, 29];
  const scheduleTypes = ["기본", "상담"];

  let scheduleCodeSeq = 1;

  days.forEach((day, index) => {
    const count = index === 0 ? 3 : 1; // 첫 날만 3개

    for (let i = 0; i < count; i++) {
      const scheduleType = scheduleTypes[(scheduleCodeSeq + i) % 2];
      const isConsultation = scheduleType === "상담";

      result.push({
        scheduleCode: scheduleCodeSeq++,
        districtCode: 100,

        partnerCode: isConsultation? 200 + i :null,
        partnerName: isConsultation?`파트너 ${i + 1}`:null,
        partnerPhone: isConsultation?"010-1234-5678":null,
        partnerAddress:isConsultation? "서울 어딘가":null,
        scheduleName: isConsultation?null:`스케줄 ${i + 1}`,
        scheduleType,
        startDateAt: `${year}-${month.padStart(2, "0")}-${String(day).padStart(2, "0")}`,
        // startDateAt:`${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`,
        startTimeAt:"14:30:00",
        location: "현장",
        memo: "테스트 스케줄 테스트 스케줄테스트 스케줄테스트 스케줄테스트 스케줄테스트 스케줄",
        createdAt: now, // Date
        lastModifiedAt: now, // Date
      });
    }
  });

  return result;
}

function getScheduleByDate(year, month, day) {
  const monthSchedule = createMonthlySchedule(year, month);

  const targetDate = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;

  return monthSchedule.filter(
    (item) => item.startDateAt === targetDate
  );
}


const todaySchedules = [
  createScheduleItem({
    scheduleCode: 1,
    districtCode: 100,
    partnerCode: 201,
    partnerName: "파트너 1",
    partnerPhone: "010-1111-1111",
    partnerAddress: "서울 강남구",
    scheduleType: "상담",
    startDateAt:"2026-01-29",
    location: "현장",
    memo: "테스트 스케줄 테스트 스케줄테스트 스케줄테스트 스케줄테스트 스케줄테스트 스케줄",
    createdAt: now,
    lastModifiedAt: now,
  }),

  createScheduleItem({
    scheduleCode: 2,
    districtCode: 100,
    partnerCode: 202,
    partnerName: "파트너 2",
    partnerPhone: "010-2222-2222",
    partnerAddress: "서울 서초구",
    scheduleType: "상담",
    startDateAt:"2026-01-29",
    startTimeAt: "14:00:00",
    location: "현장",
    memo: "상담 스케줄",
    createdAt: now,
    lastModifiedAt: now,
  }),

  createScheduleItem({
    scheduleCode: 3,
    districtCode: 100,
    scheduleType: "기본",
    scheduleName: "정기 점검 일정",
    startDateAt:"2026-01-29",
    startTimeAt: "14:30:00",
    location: "사무실",
    memo: "기본 일정",
    createdAt: now,
    lastModifiedAt: now,
  }),

  createScheduleItem({
    scheduleCode: 4,
    districtCode: 100,
    scheduleType: "기본",
    scheduleName: "회의",
    startDateAt:"2026-01-29",
    location: "회의실",
    memo: "팀 미팅",
    createdAt: now,
    lastModifiedAt: now,
  }),
];

module.exports = {
  createMonthlySchedule,
  getScheduleByDate,
  todaySchedules,
};


