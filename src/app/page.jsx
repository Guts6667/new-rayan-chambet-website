import CardGridHome from "@/components/(Home)/CardGridHome";
import HomeContact from "@/components/(Home)/HomeContact";
import HomeMain from "@/components/(Home)/HomeMain";

export default function Home() {
  return (
    <main className="bg-primary min-h-screen p-24 flex flex-col gap-[48px] pt-[150px]  md:p-[40px] md:pl-[240px] ">
      <h1 className="col-span-2">Product Manager & Software Engineer</h1>
      <div className="grid grid-cols-1 gap-y-24  md:grid-cols-2  md:gap-[35px] ">
        <HomeMain />
        <CardGridHome />

      </div>
      <HomeContact />
    </main>
  );
}
