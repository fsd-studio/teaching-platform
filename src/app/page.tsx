import Layout from '@/components/template/layouts/Layout';
import FSDImage from '@/components/template/ui/FSDImage';
import LinkWrapper from '@/components/template/ui/LinkWrapper';
import Section from '@/components/template/ui/Section';
import { Title } from '@/components/ui/Title';

// Every page.jsx file should export a metadata variable.
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-object

export const metadata = {
  title: 'Dashboard',   
  description: 'Katedra Coworking Dashboard',
};

const timetable = {
  "Hétfő": "8-14",
  "Kedd": "14-19",
  "Szerda": "8-14",
  "Péntek": "8-14"
}

function page() {
  return (
    <Layout>
      <Section innerClassName='h-screen' outerClassName='!h-screen !py-0 bg-[linear-gradient(71deg,rgba(255,255,255,1)_0%,rgba(218,252,237,1)_100%)]'>
        <div className='mx-auto relative flex gap-16 mt-8 justify-center flex-col md:flex-row h-full md:justify-between'>
          <div className='md:my-auto'>
            <h1 className="text-4xl md:text-6xl font-secondary">
              Excellence in every smile.
            </h1>
            <FSDImage src='/images/smile-hero.png' alt='smile' className="-mt-30 w-[90%] ms-24 md:-mt-36"></FSDImage>
          </div>

          <FSDImage src='/images/Krisztina-hero.png' alt='Fogászat' className="md:h-[80%] md:my-auto rounded-2xl"></FSDImage>
        </div>
      </Section>      
        
      <Section outerClassName='bg-blue-50/60' innerClassName='flex flex-col gap-4 mx-auto'>
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

      <Section innerClassName='flex flex-col gap-4'>
          <div className='my-auto w-full flex flex-col gap-4 md:gap-6 md:max-w-[80%] mx-auto'>
            <Title>Mikor rendelek:</Title>

            {Object.entries(timetable).map(([key, value], index) => (
              <div key={index} className='border-b-2 w-full border-green-200 bg-green-50 flex justify-between p-2'>
                <p className="font-bold relative text-xl font-secondary mt-2">
                  {key}
                </p>
                <p className="font-primary-bold text-green-950 text-3xl">{value}</p>
              </div>   
            ))}
          </div>
      </Section>



      <Section outerClassName='bg-blue-50/60' innerClassName='flex flex-col gap-4'>
          <div className='my-auto w-full flex flex-col gap-4 md:gap-6 md:max-w-[80%] mx-auto'>
            <Title>Időpontfoglalás</Title>

            <p>
              Időpontfoglalás lehetséges a  
              <LinkWrapper link={"tel:+3688444644"} className={"font-bold text-blue-900 hover:text-blue-900/70"}> +3688444644</LinkWrapper>, 
              illetve <LinkWrapper link={"tel:+36309463145"} className={"font-bold text-blue-900 hover:text-blue-900/70"}>+36309463145</LinkWrapper> telefonszámon, 
              a <LinkWrapper link={"https://promedicum.hu/idopontfoglalas"} className={"font-bold text-blue-900 hover:text-blue-900/70"}>Promedicum honlapján</LinkWrapper> keresztül 
              vagy személyesen a Nárcisz utca 2-ben.
            </p>
          </div>
      </Section>
    </Layout>
  );
}

export default page;