import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <main className="fixed top-0 left-0 right-0 w-full h-full flex flex-col items-center">
  <div className="w-full h-[50px] bg-[#023047]"></div>
  </main>;
}
