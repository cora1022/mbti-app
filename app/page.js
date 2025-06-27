'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image'; // ✅ 이미지 컴포넌트 추가

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center px-4">
      <div className="text-center bg-white shadow-xl rounded-2xl p-8 sm:p-10 w-full max-w-sm">
        {/* ✅ 상단 로고 아이콘 */}
        <Image
          src="/globe.svg"
          alt="앱 로고"
          width={60}
          height={60}
          className="mx-auto mb-4"
        />

        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-2">MBTI 성격유형 검사</h1>
        <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
          나의 성격유형은 무엇일까?<br className="hidden sm:block" />
          총 16가지 유형 중 나를 찾아보세요!
        </p>
        <button
          onClick={() => router.push('/test')}
          className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-200 text-base sm:text-lg"
        >
          검사 시작하기
        </button>
      </div>
    </div>
  );
}
