import Section from "@/components/template/ui/Section";
import { Title } from "@/components/ui/Title";

export default function NotFound() {
    return (
        <Section innerClassName="text-center my-30">
            <Title className="mb-2 text-2xl font-semibold tracking-tighter">
                404 - Page Not Found
            </Title>
            <p className="mb-4">The page you are looking for does not exis :(</p>
        </Section>
    )
}