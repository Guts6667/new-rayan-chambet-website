import CardGridHome from "@/components/(Home)/CardGridHome";
import HomeMain from "@/components/(Home)/HomeMain";

export default function Home() {
  return (
    <main className="bg-primary min-h-screen p-24 flex flex-col gap-24  md:p-[40px]">
      <h1 className="col-span-2">Product Manager & Software Engineer</h1>
      <div className="grid grid-cols-1 grid-rows-7 gap-y-24  md:grid-cols-2 md:grid-rows-5 md:gap-[35px] ">
        <HomeMain />
        <CardGridHome />
      </div>
    </main>
  );
}
