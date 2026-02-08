import { useTranslation } from "next-i18next";
import ExpandableCard from "./ExpandableCard";
import FSDImage from "./FSDImage";
import Section from "./Section";
import Title from "@/components/template/ui/Title";

function ImageTextSection() {
    const {t} = useTranslation('')
  return (
    <>
        <Section>
            <Title className="lg:hidden">{t('title')}</Title>
            <div className="flex lg:gap-10 xl:gap-20 items-center">
                <div className="hidden xl:block w-full">
                    <Title className="lg:text-start">{t('title')}</Title>
                    <p>{t('text')}</p>
                </div>
                <div className="xl:hidden w-full">
                    <ExpandableCard>
                        <Title className="text-start">{t('title')}</Title>
                        <p>{t('text')}</p>
                    </ExpandableCard>
                </div>
                <div className="!w-full hidden lg:block">
                    <FSDImage src="/WhyUs/why-1.webp" className="rounded-2xl"></FSDImage>
                </div>
            </div>
        </Section>
    </>
  );
}

export default ImageTextSection;