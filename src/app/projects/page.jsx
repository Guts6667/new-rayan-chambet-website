import ProjectGrid from "@/components/(Projects)/ProjectGrid";
import React from "react";
export default function Projects() {
  const datas = [
    {
      id: "2",
      title: "AG-Designs",
      url: "https://agdesigns.art/",
      description: "Creative design and UX/UI solutions.",
      pictures: [
        "ag-designs-1.png",
        "ag-designs-2.png",
        "ag-designs-3.png",
      ],
    },
    {
      id: "0",
      title: "Sciences Cognitives",
      url: "https://www.sciences-cognitives.fr",
      description: "Platform for cognitive learning.",
      pictures: [
        "sciencesco-1.png",
        "sciencesco-2.png",
        "sciencesco-3.png",
        "sciencesco-4.png",
      ],
    },
    {
      id: "1",
      title: "Edge Dynamics",
      url: "",
      description: "Revolutionizing the industrial sector with IoT devices.",
      pictures: [
        "edge-dynamics-1.png",
        "edge-dynamics-2.png",
        "edge-dynamics-3.png",
        "edge-dynamics-4.png",
      ],
    },
    {
      id: "3",
      title: "MBUZZ",
      url: "https://mbuzzesports.com/",
      description: "Innovative gaming solutions and experiences.",
      pictures: ["mbuzz-1.png", "mbuzz-2.png", "mbuzz-3.png", "mbuzz-4.png"],
    },
    {
      id: "4",
      title: "Saudi Excellence Co",
      url: "https://www.saudiexcellenceco.com/",
      description: "Leading technologies in security and defense.",
      pictures: [
        "saudiexcellence-1.png",
        "saudiexcellence-2.png",
        "saudiexcellence-3.png",
        "saudiexcellence-4.png",
      ],
    },
  ];

  return (
    <main className="p-24 flex flex-col gap-[48px] pt-[140px]  md:p-[40px] md:pl-[240px]">
      <h1>All Projects</h1>
      <div className="grid grid-col sm:grid-cols-2  2xl:grid-cols-3 gap-24">
        {datas.map((data, index) => (
          <ProjectGrid
            key={index}
            pictures={data.pictures}
            title={data.title}
            description={data.description}
            link={data.url}
          />
        ))}
      </div>
    </main>
  );
}
