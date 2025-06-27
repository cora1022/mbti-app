import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ 메타데이터에 앱 이름과 아이콘 설정
export const metadata = {
  title: "MBTI 성격유형 검사",
  description: "간단한 질문으로 당신의 MBTI 성격유형을 찾아보세요!",
  icons: {
    icon: "/globe.svg", // public 폴더에 있는 SVG 아이콘 경로
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
