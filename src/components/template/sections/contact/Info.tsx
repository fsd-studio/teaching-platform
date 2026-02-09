import Section from "@/components/template/ui/Section";

function Info({
    location = "country, city 2640, street 24",
    phoneNumber = "+32 492 10 12 76",
    email = "info@fsd-studio.com",
}) {
  return (
    <div className="text-center font-black text-xl text-white">
        <Section outerClassName="bg-green-500 !py-6">
            <p>{location}</p>
        </Section>
        <Section outerClassName="bg-red-500 !py-6">
            <p>{phoneNumber}</p>
        </Section>
        <Section outerClassName="bg-amber-500 !py-6">
            <p>{email}</p>
        </Section>
    </div>
  );
}

export default Info;