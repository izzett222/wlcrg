import Image from "next/image"

export default function Team() {
    const data = [
        {
            name: "Muyisenge Jean Felix",
            position: "Human Resources Associate",
            src: "/assets/images/felix.jpeg"
        },
        {
            name: "Akeza Nkunzurwanda Germaine",
            position: "Chief of Operations",
            src: "/assets/images/akeza.jpeg"
        },

    ]
    return (
        <section>
            <div className="my-16 max-w-7xl px-4 sm:px-16 mx-auto">
                <h2 className="text-4xl font-medium mb-2">Our team</h2>
                <p className="mb-8">We have a brilliant group of people working together to provide quality service to our partners</p>
                <div className="flex gap-10 flex-col items-center md:flex-row md:items-stretch">
                    {data.map((el, i) => (
                        <div key={i} className="relative rounded-lg">
                            <Image src={el.src} width={320} className="object-cover rounded" height={150} alt="" />
                            <div className="absolute bottom-0 left-0 right-0 px-2 py-5 text-white bg-primary">
                                <h3 className="text-lg font-medium">{el.name}</h3>
                                <p className="italic text-sm leading-[1]">{el.position}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}