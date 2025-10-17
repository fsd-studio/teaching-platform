import HeadComponent from "components/template/config/HeadComponent";
import FAQ from "components/template/sections/faq/FAQ";
import HeroMinimalist from "components/template/sections/hero/HeroMinimalist";
import Quote from "components/template/sections/quote/Quote";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from "next/head";

export async function getServerSideProps({ locale }) {
  const translations = await serverSideTranslations(locale, ['common', 'nav']);
  return {
    props: {
      ...translations,
    },
  };
}

export default function Home() {
  return (
    <>
      <HeadComponent/>

      <div>
        <FAQ></FAQ>
        <HeroMinimalist />
        <Quote></Quote>
      </div>
    </>
  );
}
