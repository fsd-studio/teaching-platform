import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Section from "components/template/ui/Section";

gsap.registerPlugin(SplitText, ScrollTrigger);

function Quote() {
    useGSAP(() => {
        let split = SplitText.create(".split", { type: "words" });

        gsap.from([split.words, ".arrow-icon"], {
            duration: 1,
            y: 100,
            autoAlpha: 0,
            stagger: {
                amount: 0.5
            },
            scrollTrigger: {
                trigger: ".split",
                start: "top 80%",
                toggleActions: "play none none reverse",
                once: true
                }
        });
    });

    return (
        <Section outerC="bg-primary/70">
            <div className="relative z-10">
                <div className="w-[90%] split will-change-transform text-2xl md:text-3xl lg:text-4xl leading-relaxed text-center text-secondary max-w-4xl mx-auto">
                    <a href="#contact" className="flex text-accent will-change-transform cursor-pointer hover:text-accent/90 justify-center mt-6 items-center">
                        <p>A kisgyermek fejlődésének szabadsága nem azt jelenti, hogy egyszerűen magukra hagyjuk, hanem, hogy segítő szeretettel emeljük köré a megfelelő környezetet…</p>
                        <MdOutlineKeyboardArrowDown className="arrow-icon mt-1 ms-2"/>
                    </a>
                    <div className="arrow-icon mx-auto w-30 border-2 rounded-full border-primaryk border-dashed my-8"></div>
                    <span className="!font-primary text-5xl">Maria Montessori</span>
                </div>
            </div>
        </Section>
    );
}

export default Quote;