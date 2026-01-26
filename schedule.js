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
  startedAt,
  endedAt,
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
    startedAt: startedAt.toISOString(),
    endedAt: endedAt ? endedAt.toISOString() : null,
    location,
    memo,
    createdAt: createdAt.toISOString(),
    lastModifiedAt: lastModifiedAt.toISOString(),
  };
}

function createMonthlySchedule(year, month) {
  const result = [];

  // 스케줄이 있는 5일
  const days = [3, 7, 12, 18, 24];
  const scheduleTypes = ["기본", "상담"];

  let scheduleCodeSeq = 1;

  days.forEach((day, index) => {
    const count = index === 0 ? 3 : 1; // 첫 날만 3개

    for (let i = 0; i < count; i++) {
      const startedAt = new Date(Date.UTC(year, month - 1, day, 9 + i * 2));
      const endedAt = new Date(Date.UTC(year, month - 1, day, 10 + i * 2));
      const now = new Date();

      const scheduleType = scheduleTypes[(scheduleCodeSeq + i) % 2];
      const isConsultation = scheduleType === "상담";

      result.push({
        scheduleCode: scheduleCodeSeq++,
        districtCode: 100,

        partnerCode: 200 + i,
        partnerName: `파트너 ${i + 1}`,
        partnerPhone: "010-1234-5678",
        partnerAddress: "서울 어딘가",
        scheduleName: `스케줄 ${i + 1}`,
        scheduleType: scheduleTypes[(scheduleCodeSeq + i) % 2],
        startedAt, // Date (UTC)
        endedAt, // Date | null
        location: "현장",
        memo: "테스트 스케줄 테스트 스케줄테스트 스케줄테스트 스케줄테스트 스케줄테스트 스케줄",
        createdAt: now, // Date
        lastModifiedAt: now, // Date
      });
    }
  });

  return result;
}

function getScheduleByDate(monthSchedule, selectedDate) {
  const y = selectedDate.getUTCFullYear();
  const m = selectedDate.getUTCMonth();
  const d = selectedDate.getUTCDate();
  return monthSchedule.filter((item) => {
    const date = item.startedAt;
    return (
      date.getUTCFullYear() === y &&
      date.getUTCMonth() === m &&
      date.getUTCDate() === d
    );
  });
}

const now = new Date();
const today = new Date(
  Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
);

const todaySchedules = [
  createScheduleItem({
    scheduleCode: 1,
    districtCode: 100,
    partnerCode: 201,
    partnerName: "파트너 1",
    partnerPhone: "010-1111-1111",
    partnerAddress: "서울 강남구",
    scheduleType: "상담",
    // scheduleName: null,
    startedAt: new Date(
      Date.UTC(
        today.getUTCFullYear(),
        today.getUTCMonth(),
        today.getUTCDate(),
        9,
      ),
    ),
    endedAt: new Date(
      Date.UTC(
        today.getUTCFullYear(),
        today.getUTCMonth(),
        today.getUTCDate(),
        10,
      ),
    ),
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
    // scheduleName: null,
    startedAt: new Date(
      Date.UTC(
        today.getUTCFullYear(),
        today.getUTCMonth(),
        today.getUTCDate(),
        11,
      ),
    ),
    endedAt: new Date(
      Date.UTC(
        today.getUTCFullYear(),
        today.getUTCMonth(),
        today.getUTCDate(),
        12,
      ),
    ),
    location: "현장",
    memo: "상담 스케줄",
    createdAt: now,
    lastModifiedAt: now,
  }),

  createScheduleItem({
    scheduleCode: 3,
    districtCode: 100,
    // partnerCode: null,
    // partnerName: null,
    // partnerPhone: null,
    // partnerAddress: null,
    scheduleType: "기본",
    scheduleName: "정기 점검 일정",
    startedAt: new Date(
      Date.UTC(
        today.getUTCFullYear(),
        today.getUTCMonth(),
        today.getUTCDate(),
        14,
      ),
    ),
    endedAt: null,
    location: "사무실",
    memo: "기본 일정",
    createdAt: now,
    lastModifiedAt: now,
  }),

  createScheduleItem({
    scheduleCode: 4,
    districtCode: 100,
    // partnerCode: null,
    // partnerName: null,
    // partnerPhone: null,
    // partnerAddress: null,
    scheduleType: "기본",
    scheduleName: "회의",
    startedAt: new Date(
      Date.UTC(
        today.getUTCFullYear(),
        today.getUTCMonth(),
        today.getUTCDate(),
        16,
      ),
    ),
    endedAt: null,
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
