'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import questions from '@/data/questions';

const options = [
  { text: '전혀 아니다', score: 0 },
  { text: '아니다', score: 1 },
  { text: '보통이다', score: 2 },
  { text: '그렇다', score: 3 },
  { text: '매우 그렇다', score: 4 },
];

export default function TestPage() {
  const [index, setIndex] = useState(0);
  const [result, setResult] = useState({
    E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0,
  });

  const router = useRouter();
  const question = questions[index];

  if (!question) return null;

  const handleAnswer = (score) => {
    const [positive, negative] = question.axis;
    const updatedResult = { ...result };

    updatedResult[positive] += score;
    updatedResult[negative] += (4 - score); // 반대 성향 점수도 누적

    setResult(updatedResult);

    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      const mbti = calculateMBTI(updatedResult);
      const queryString = new URLSearchParams(updatedResult).toString(); // ✅ 점수 -> URL로 변환
      router.push(`/result/${mbti}?${queryString}`);
    }
  };

  const calculateMBTI = (result) => {
    return (
      (result.E >= result.I ? 'E' : 'I') +
      (result.S >= result.N ? 'S' : 'N') +
      (result.T >= result.F ? 'T' : 'F') +
      (result.J >= result.P ? 'J' : 'P')
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 flex flex-col items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl max-w-xl w-full p-8 text-center">
        <h2 className="text-xl font-semibold mb-8 text-gray-800">{question.question}</h2>
        <div className="space-y-3">
          {options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(option.score)}
              className="block w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg transition duration-200"
            >
              {option.text}
            </button>
          ))}
        </div>
        <div className="mt-6 text-sm text-gray-500">
          질문 {index + 1} / {questions.length}
        </div>
      </div>
    </div>
  );
}
