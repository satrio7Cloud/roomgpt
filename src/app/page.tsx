import CompareSlide from "@/components/CompareSlide";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    // <main className="flex justify-center items-center h-screen">
    <main className="my-auto flex gap-10 p-11 lg:flex-row flex-col justify-center lg:justify-around items-center">
      <div className="flex relative max-w-xl flex-col items-center gap-5 gradiant-bg">
        <h1 className="text-white text-5xl font-bold text-center">
          Redesign rooms in second{" "}
          <span className="text-blue-700">using AI</span>
          <p className="text-gray-500 text-lg text-center">
            take a picture of a room and instatly redesign it in 8+ different
            thems. Join thousands of happy customers and remodel your room
            today.
          </p>
          <Link href={"/room"}>
            <button className="text-lg bg-blue-700 hover:opacity-90 font-semibold py-3 px-5 rounded-lg">
              Redesign your rooms
            </button>
          </Link>
        </h1>
      </div>
      <div>
        {/* Compare slide components */}
        <CompareSlide />
      </div>
    </main>
  );
}
