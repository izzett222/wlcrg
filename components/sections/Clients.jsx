import Image from "next/image";
import jacana from "/public/assets/images/jacana.jpg";
import biocoor from "/public/assets/images/biocoor.png"


export default function Clients() {
  const data = [
    {
      name: "Jacana Birding Tours",
      description: "Jacana Birding Tours",
      img: jacana
    },
    {
      name: "BIOCOOR Biodiversity organization",
      img: biocoor,
    },
    // {
    //   name: "Huye Biodiversity Firm",
    // },
  ];
  return (
    <section className="bg-primary py-16 text-white">
      <div className="flex flex-col items-center mb-12 text-center">
        <h2 className=" text-4xl font-medium mb-2">Our clients</h2>
        <p className="leading-[1.5] max-w-[390px]">
          The organizations that we have partnered with are
        </p>
      </div>
      <div className="flex flex-col items-center md:items-stretch md:flex-row gap-14 justify-center">
        {data.map((el, i) => (
          <div key={i} className="max-w-[180px] text-center flex flex-col">
            <div className="w-[180px] h-[120px] relative bg-[#D9D9D9] rounded-sm">
                <Image src={el.img} priority fill alt="" className="object-fit" />
            </div>
            <p className="mt-4 leading-[1.2] text-lg">{el.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
