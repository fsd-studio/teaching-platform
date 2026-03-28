import Section from "@/components/template/ui/Section";
import { NAV_ITEMS } from "@/constants/navigation";
import { NAME } from "@/constants/names";

type FooterProps = {
    sections?: string[],
    socialMedia?: Partial<Record<SocialPlatform, string>>
}

type SocialPlatform = "twitter" | "facebook" | "instagram" | "linkedin" | "x";

function Footer({
}: FooterProps) {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()

    return (
        <Section innerClassName="space-y-2" outerClassName="bg-[linear-gradient(180deg,rgba(255,255,255,1)_30%,rgba(218,252,237,1)_100%)] !pb-6">
            <div className="flex justify-between md:-mt-11">
                <div className="flex flex-col h-fit">
                    <h2 className="text-3xl md:text-[70px] font-primary">
                        {NAME}
                    </h2>
                    {/* <div className="gap-4 text-lg hidden md:flex">
                        {socialEntries.map(([platform, link], index) => (
                            <a key={index} href={link} className="w-10 h-10">
                                {icons[platform]}
                            </a>
                        ))}
                    </div> */}
                </div>


                <div className="flex flex-col gap-2 text-end font-primary font-light text-xl md:text-2xl">
                    {NAV_ITEMS.map((section, index) => (
                        <a key={index} href={`#${section}`}>{section}</a>
                    ))}
                </div>
            </div>
            
            
            <div className="text-center text-xs md:text-md md:flex justify-between mt-10">
                <p className="text-center">© {currentYear} {NAME}. All rights reserved.</p>
                <a target="_blank" href="https://fsd-studio.com">Developed by: <span className="underline underline-offset-2">FSD Studio</span></a>
            </div>
        </Section>
    );
}

export default Footer;