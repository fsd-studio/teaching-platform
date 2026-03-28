import Post from '@/app/components/Post';
import Posts from '@/app/components/Posts';
import Section from '@/components/template/ui/Section';
import { Title } from '@/components/ui/Title';
import { NAME } from '@/constants/names';
import { getBlogPosts } from '@/utils';
import { Metadata } from 'next';

// Every page.jsx file should export a metadata variable.
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-object

export const metadata: Metadata = {
  title: NAME,
  description: 'Interactive Learning platform.',
};

function page() {
  return (
    <>
      <Section id='intro' outerClassName='bg-blue-50/80' innerClassName='flex flex-col mt-10 gap-4 mx-auto'>
        <div className='md:max-w-[80%] flex flex-col gap-4 md:gap-6 mx-auto'>
          <Title>Learning Platform with Interactive and Visual Demos</Title>
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

      <Posts />
    </>
  );
}

export default page;
