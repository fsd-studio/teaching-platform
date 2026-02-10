import TimetableRow from '@/app/components/TimeTableRow';
import Layout from '@/components/template/layouts/Layout';
import FSDImage from '@/components/template/ui/FSDImage';
import LinkWrapper from '@/components/template/ui/LinkWrapper';
import Section from '@/components/template/ui/Section';
import { Title } from '@/components/ui/Title';

// Every page.jsx file should export a metadata variable.
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-object

export const metadata = {
  title: 'Dr Somogyi Krisztina',   
  description: 'Veszprémi fogorvos 1995 óta, konzerváló kezelésekkel, fogpótlásokkal és gyermekfogászattal.',
};

const timetable = {
  "Kedd": "14-19",
  "Szerda": "8-14",
  "Péntek": "8-14"
}

function page() {
  return (
    <Layout>
      <Section innerClassName='h-screen' outerClassName='!h-screen !py-0 bg-[linear-gradient(71deg,rgba(255,255,255,1)_0%,rgba(218,252,237,1)_100%)]'>
        <div className='mx-auto max-w-[380px] md:max-w-[500px] lg:max-w-max relative flex gap-10 lg:gap-18 mt-8 md:mt-14 justify-center flex-col lg:flex-row h-full lg:justify-between'>
          <div className='lg:my-auto md:order-2 lg:order-0'>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-secondary">
              Excellence in every smile.
            </h1>
            <FSDImage src='/images/smile-hero.png' alt='smile' className="-mt-26 w-[90%] ms-24 md:-mt-30 lg:-mt-30"></FSDImage>
          </div>

          <FSDImage src='/images/Krisztina-hero.png' alt='Fogászat' className="mx-auto md:order-0 md:h-[50%] xl:h-[70%] lg:my-auto rounded-2xl"></FSDImage>
        </div>
      </Section>      
        
      <Section id='Rólam' outerClassName='bg-blue-50/80' innerClassName='flex flex-col gap-4 mx-auto'>
        <div className='md:max-w-[80%] flex flex-col gap-4 md:gap-6 mx-auto'>
          <Title>Szakértelem és gondoskodás 1995 óta</Title>
          <p className='text-cyan-950'>
            1995-ben végeztem a SOTE Fogorvostudományi Karán.
            Szakvizsgám megszerzése óta Veszprémben dolgozom.
            Konzerváló fogászati problémákkal, fogpótlásokkal, gyermekfogászati kérdésekkel, alapszintű parodontológiai kezelésekkel kereshetnek pácienseim.
            Új munkahelyemen is szájsebész és fogszabályozó kollega segít a problémák teljeskörű ellátásában a legkorszerűbb radiológiai háttérrel.
            Fogtechnikus csapatunk pedig felkészült a XXI. század kihívásaira.
            Szeretettel várom pácienseimet március 16-tól a Promedicum Fogászatban.
          </p>
        </div>
      </Section>

      <Section id='Időpontok' innerClassName='flex flex-col gap-4'>
          <div className='my-auto w-full flex flex-col gap-4 md:gap-6 md:max-w-[80%] mx-auto'>
            <Title>Rendelési id<span className='text-3xl font-semibold md:text-xl md:font-bold'>ő</span>m:</Title>

            <TimetableRow value="8-14" label={
              <>
                Hétf<span className="text-2xl font-semibold md:text-sm lg:text-lg md:font-bold">ő</span>
              </>
            } />  

            {Object.entries(timetable).map(([key, value], index) => (
                <TimetableRow key={index} value={value} label={key} />  
            ))}
          </div>
      </Section>
      
      <Section id='Kapcsolat' outerClassName='bg-blue-50/80' innerClassName='flex flex-col gap-4'>
          <div className='my-auto w-full flex flex-col gap-4 md:gap-6 md:max-w-[80%] mx-auto'>
            <Title>Id<span className='text-3xl font-semibold md:text-xl md:font-bold'>ő</span>pontfoglalás</Title>
            <p>
              Időpontfoglalás lehetséges a  
              <LinkWrapper link={"tel:+3688444644"} className={"font-bold text-green-900 hover:text-green-900/70"}> +3688444644</LinkWrapper>, 
              illetve <LinkWrapper link={"tel:+36309463145"} className={"font-bold text-green-900 hover:text-green-900/70"}>+36309463145</LinkWrapper> telefonszámon, 
              a <LinkWrapper link={"https://promedicum.hu/idopontfoglalas"} className={"font-bold text-green-900 hover:text-green-900/70"}>Promedicum honlapján</LinkWrapper> keresztül 
              vagy személyesen a Nárcisz utca 2-ben.
            </p>
          </div>
      </Section>
    </Layout>
  );
}

export default page;
