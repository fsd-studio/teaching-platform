import Section from "@/components/template/ui/Section";
import { ReactNode } from "react";

import {
    LiaFacebook,
    LiaInstagram,
    LiaLinkedin,
    LiaTwitter,
} from "react-icons/lia";

type FooterProps = {
    logo?: string,
    name?: string,
    sections?: string[],
    socialMedia?: Partial<Record<SocialPlatform, string>>
}

type SocialPlatform = "twitter" | "facebook" | "instagram" | "linkedin" | "x";

function Footer({
    name = "Dr Somogyi Krisztina",
    sections = ["About", "Menu", "Gallery", "Contact"],
    socialMedia = {
        twitter: "x.com",
        facebook: "facebook.com",
        instagram: "instagram.com",
        linkedin: "linkedin.com",
    }
}: FooterProps) {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()

    const icons: Record<SocialPlatform, ReactNode> = {
        instagram: <LiaInstagram className="h-full w-full text-black/80"/>,
        x: <LiaTwitter className="h-full w-full text-black/80"/>,
        twitter: <LiaTwitter className="h-full w-full text-black/80"/>,
        facebook: <LiaFacebook className="h-full w-full text-black/80"/>,
        linkedin: <LiaLinkedin className="h-full w-full text-black/80"/>,
    };

    const socialEntries = Object.entries(socialMedia) as [SocialPlatform, string][]

    return (
        <Section innerClassName="space-y-8" outerClassName="bg-secondary !py-10">
            <div className="md:flex justify-between">
                <div>
                    <div className="flex items-center h-fit gap-8 justify-center">
                        <h2 className="text-4xl font-black">
                            {name}
                        </h2>
                    </div>

                    <div className="gap-4 text-lg mt-4 hidden md:flex">
                        {socialEntries.map(([platform, link], index) => (
                            <a key={index} href={link} className="w-10 h-10">
                                {icons[platform]}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-6 md:mt-0">
                    <div className="flex flex-col gap-4 text-center text-xl">
                        {sections.map((section, index) => (
                            <a key={index} href={`#${section}`}>{section}</a>
                        ))}
                    </div>
                </div>
            </div>


            <div className="flex gap-4 text-lg justify-center mt-4 md:hidden">
                {socialEntries.map(([social, link], index) => (
                    <a key={index} href={link} className="w-10 h-10">
                        {icons[social]}
                    </a>
                ))}
            </div>
            
            
            <div className="text-center md:flex justify-between">
                <p className="text-center">© {currentYear} FSD STUDIO. All rights reserved.</p>
                <a target="_blank" href="https://fsd-studio.com">developed by <span className="underline underline-offset-2">FSD Studio</span></a>
            </div>
        </Section>
    );
}

export default Footer;