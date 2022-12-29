import Image from "next/image";
import rhinoceros from "/public/assets/images/rhinoceros.webp"

export default function Mission() {
  return (
    <section className="min-h-[500px] bg-primary text-white py-20">
      <div className="max-w-7xl px-4 sm:px-16 mx-auto w-full flex flex-col md:flex-row justify-between gap-20">
        <div className="flex-1">
          <h2 className="font-medium text-4xl text-white mb-5">Our Mission</h2>
          <p className="max-w-[472px]">
            As part of the Wildlife Conservationists Research Group, our mission
            is to contribute to the preservation of those wildlife species by
            using our skills and expertise in research, to relearn and reimagine
            the livelihoods of those organisms, plus the ways of preserving them
            for the betterment of the African continent’s wildlife conservation
            economy. We, therefore, intend to make research to understand the
            ways the processes that lead to the extinction of wildlife species,
            learn more about those causes and encourage the application of the
            21st Century skills by young conservationists to aid in ensuring the
            conservation of those living organisms
          </p>
        </div>
        <div className="bg-gray-100 md:flex-1 relative shadow-2xl h-[400px] md:h-auto rounded-sm overflow-hidden">
          <Image src={rhinoceros} alt="rhinoceros" className="object-cover" fill />
        </div>
      </div>
    </section>
  );
}
