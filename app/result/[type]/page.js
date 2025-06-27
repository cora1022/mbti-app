'use client';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const mbtiDescriptions = {
  INFP: "열정적인 중재자: 조용하고 공감 능력이 뛰어나며 깊은 생각을 하는 성격입니다.",
  INFJ: "통찰력 있는 조언자: 직관적이고 이타적이며 깊이 있는 사고를 선호합니다.",
  INTJ: "전략적인 사색가: 분석적이며 독립적인 사고를 좋아합니다.",
  INTP: "논리적인 사색가: 호기심이 많고 지적 자극을 추구합니다.",
  ENFP: "재기발랄한 활동가: 에너지 넘치고 창의적인 아이디어가 많은 성격입니다.",
  ENFJ: "정의로운 지도자: 타인을 이끄는 데 탁월하고 사람을 잘 챙깁니다.",
  ENTJ: "대담한 통솔자: 논리적이고 목표 지향적인 리더입니다.",
  ENTP: "뜨거운 발명가: 토론을 좋아하고 새로운 것을 시도하는 모험가입니다.",
  ISFJ: "성실한 수호자: 조용하고 헌신적이며 세심하게 타인을 도와줍니다.",
  ISFP: "호기심 많은 예술가: 조용하지만 자유로운 표현을 좋아하는 감성가입니다.",
  ISTJ: "논리적인 관리자: 신중하고 철저하며 책임감이 강한 성격입니다.",
  ISTP: "만능 재주꾼: 현실적이고 분석적인 사고로 문제 해결을 좋아합니다.",
  ESFJ: "친절한 돌봄이: 사교적이고 타인의 감정을 잘 돌보는 유형입니다.",
  ESFP: "자유로운 연예인: 즐거움과 즉흥을 사랑하는 사교적 성격입니다.",
  ESTJ: "엄격한 관리자: 체계적이고 논리적으로 일 처리에 능숙합니다.",
  ESTP: "활동적인 해결사: 현실적이며 도전적인 상황을 즐깁니다.",
};

export default function ResultPage() {
  const { type } = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const description = mbtiDescriptions[type] || "설명이 없습니다.";

  const scores = {
    E: Number(searchParams.get("E") || 0),
    I: Number(searchParams.get("I") || 0),
    S: Number(searchParams.get("S") || 0),
    N: Number(searchParams.get("N") || 0),
    T: Number(searchParams.get("T") || 0),
    F: Number(searchParams.get("F") || 0),
    J: Number(searchParams.get("J") || 0),
    P: Number(searchParams.get("P") || 0),
  };

  function BarPair({ a, b }) {
  // 훅 사용 가능해짐
  const total = scores[a] + scores[b] || 1;
  const percentA = Math.round((scores[a] / total) * 100);
  const percentB = 100 - percentA;
  const aWins = scores[a] >= scores[b];

  const mainColor = "bg-blue-500";
  const subColor = "bg-blue-200";

  const [filledMain, setFilledMain] = useState(0);
  const [filledSub, setFilledSub] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilledMain(aWins ? percentA : percentB);
      setFilledSub(aWins ? percentB : percentA);
    }, 100);
    return () => clearTimeout(timeout);
  }, [aWins, percentA, percentB]);

  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm font-bold text-gray-800 mb-1">
        <span>{a}</span>
        <span>{b}</span>
      </div>
      <div className={`flex h-7 overflow-hidden rounded bg-gray-200 relative ${aWins ? '' : 'flex-row-reverse'}`}>
        <div
          className={`${mainColor} transition-all duration-700 flex items-center justify-center text-white text-sm font-bold`}
          style={{ width: `${filledMain}%` }}
        >
          {aWins ? `${percentA}%` : `${percentB}%`}
        </div>
        <div
          className={`${subColor} transition-all duration-700 flex items-center justify-center text-blue-800 text-sm font-bold`}
          style={{ width: `${filledSub}%` }}
        >
          {aWins ? `${percentB}%` : `${percentA}%`}
        </div>
      </div>
    </div>
  );
}


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex flex-col items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl max-w-xl w-full p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">당신의 MBTI는</h1>
        <div className="text-5xl font-extrabold text-blue-600 mt-4">{type}</div>
        <p className="mt-6 text-lg text-gray-700">{description}</p>

        <div className="mt-8 text-left">
          <h2 className="text-base font-semibold mb-3 text-gray-700">📊 점수 그래프</h2>
          <BarPair a="E" b="I" />
          <BarPair a="S" b="N" />
          <BarPair a="T" b="F" />
          <BarPair a="J" b="P" />
        </div>

        <div className="flex flex-col items-center gap-3 mt-8">
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition duration-200"
          >
            다시 검사하기
          </button>

          <button
            onClick={() => {
              const shareUrl = window.location.href;
              const shareText = `내 MBTI는 ${type}입니다! 당신도 테스트해보세요.`;
              if (navigator.share) {
                navigator.share({
                  title: 'MBTI 검사 결과',
                  text: shareText,
                  url: shareUrl,
                });
              } else {
                alert('공유를 지원하지 않는 브라우저입니다.\n주소를 복사해 친구에게 공유해주세요!');
              }
            }}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition duration-200"
          >
            결과 공유하기
          </button>
        </div>
      </div>
    </div>
  );
}
