import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="grid grid-rows-[100px_100px_100px_100px_100px_130px] gap-2 grid-cols-5">
      <div className="p-5 font-bold text-xl bg-yellow-400 row-span-full">Nav</div>
      <div className="p-5 font-bold text-xl bg-yellow-400 col-span-4">Header</div>
      <div className="p-5 font-bold text-xl bg-yellow-400 col-span-3 row-span-4">Article</div>
      <div className="p-5 font-bold text-xl bg-yellow-400 row-span-5">Ads</div>
      <div className="p-5 font-bold text-xl bg-yellow-400 col-span-3">Footer</div>
    </div>
    </>
  );
}