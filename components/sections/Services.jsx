import ServiceCard from "../ui/ServiceCard";

export default function Services() {
  return (
    <section className="my-24 font-[Roboto] max-w-7xl px-16 mx-auto">
      <h2 className="font-medium text-4xl text-dark-gray">Our services</h2>
      <div className="mt-14 flex flex-wrap justify-center gap-9">
        <ServiceCard>Gathering and analyzing data</ServiceCard>
        <ServiceCard>Data analysis and report</ServiceCard>
        <ServiceCard>Consultancy services offerings</ServiceCard>
        <ServiceCard>Research Training programs</ServiceCard>
        <ServiceCard>Research series launch annually</ServiceCard>
      </div>
    </section>
  );
}
