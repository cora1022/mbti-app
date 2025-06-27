const questions = [
  // E vs I (외향 / 내향)
  {
    id: 1,
    question: "사람들과 함께 있으면 에너지가 생긴다.",
    axis: ["E", "I"],
  },
  {
    id: 2,
    question: "여럿이 어울릴 때 말수가 적은 편이다.",
    axis: ["I", "E"],
  },
  {
    id: 3,
    question: "모르는 사람과도 쉽게 대화할 수 있다.",
    axis: ["E", "I"],
  },
  {
    id: 4,
    question: "혼자 있는 시간이 가장 편하다.",
    axis: ["I", "E"],
  },

  // S vs N (감각 / 직관)
  {
    id: 5,
    question: "경험이나 현실적인 정보가 중요하다고 생각한다.",
    axis: ["S", "N"],
  },
  {
    id: 6,
    question: "나는 사실보다는 가능성에 주목하는 편이다.",
    axis: ["N", "S"],
  },
  {
    id: 7,
    question: "구체적인 사실보다는 큰 그림을 먼저 본다.",
    axis: ["N", "S"],
  },
  {
    id: 8,
    question: "세부적인 사항을 잘 기억하는 편이다.",
    axis: ["S", "N"],
  },

  // T vs F (사고 / 감정)
  {
    id: 9,
    question: "결정할 때 감정보다 논리가 더 중요하다.",
    axis: ["T", "F"],
  },
  {
    id: 10,
    question: "상대방의 기분을 상하게 하지 않기 위해 신중하게 말한다.",
    axis: ["F", "T"],
  },
  {
    id: 11,
    question: "효율성과 객관성이 의사결정에서 중요하다.",
    axis: ["T", "F"],
  },
  {
    id: 12,
    question: "내 선택이 누군가에게 어떤 영향을 줄지 고민한다.",
    axis: ["F", "T"],
  },

  // J vs P (판단 / 인식)
  {
    id: 13,
    question: "계획을 세우고 그대로 실천하는 것을 좋아한다.",
    axis: ["J", "P"],
  },
  {
    id: 14,
    question: "즉흥적인 선택이 나에게 더 잘 맞는다.",
    axis: ["P", "J"],
  },
  {
    id: 15,
    question: "일정과 마감이 명확한 것이 편하다.",
    axis: ["J", "P"],
  },
  {
    id: 16,
    question: "변화에 유연하게 대응하는 편이다.",
    axis: ["P", "J"],
  },
];

export default questions;
