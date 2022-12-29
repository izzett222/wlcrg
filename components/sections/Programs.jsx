import Image from "next/image";
import swamp from "/public/assets/images/swamp.webp";

export default function Programs() {
  return (
    <section className="min-h-[500px] text-dark-gray py-20">
      <div className="max-w-7xl px-16 mx-auto w-full gap-20">
        <h2 className="font-medium text-4xl mb-5">Our Project</h2>
      </div>

      <div className="max-w-7xl px-4 sm:px-16 mx-auto w-full flex flex-col md:flex-row justify-between gap-20">
        <div className="flex-1">
          <h3 className="font-medium text-2xl mb-2">
            Wildlife Research Series
          </h3>
          <p className="max-w-[472px]">
            Starting from November 2022, we have launched the Wildlife Research
            Series which is a program that brings together researchers from
            different institutions in Rwanda, to learn more about the importance
            of wildlife, understand the activity of their fellow humans that
            lead to the extinction of those animals, and research the ways
            possible or the policies that should be implemented in order to
            preserve those species. In this series of research, we are hiring
            different groups of Interns that will help us in the research
            projects from one of the top institutions in Rwanda.
          </p>
        </div>
        <div className="bg-gray-100 h-[400px] md:h-auto md:flex-1 relative shadow-2xl rounded-sm overflow-hidden">
          <Image src={swamp} alt="swamp" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}
