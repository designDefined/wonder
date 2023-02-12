import { IEventSummary } from "../../../types/event";

export const allEventSummaries: IEventSummary[] = [
  {
    id: 1,
    title: "사중디 발표",
    writer: "POV",
    src: "",
    time: "오늘 18시",
  },
  {
    id: 2,
    title: "다은이 바보",
    writer: "성다은",
    src: "",
    time: "이번 주 금 14시",
  },
  {
    id: 3,
    title: "혜원이 바보",
    writer: "신혜원",
    src: "",
    time: "다음 주 월 16시",
  },
  {
    id: 4,
    title: "승지 바보",
    writer: "강승지",
    src: "",
    time: "오늘 18시 반",
  },
  {
    id: 5,
    title: "정문 일홉",
    writer: "정보문화학과",
    src: "",
    time: "12월 20일 15시",
  },
  {
    id: 6,
    title: "정문 과제전",
    writer: "정보문화학과",
    src: "",
    time: "12월 3일~12월 21일",
  },
  {
    id: 7,
    title: "E.R.",
    writer: "미대극회",
    src: "",
    time: "오늘",
  },
];

export const immediateEventSummaries = allEventSummaries.filter(
  (event) => event.time.slice(0, 2) === "오늘",
);
