import Layout from '@/components/template/layouts/Layout';
import Nav from '@/components/template/sections/nav/Nav';
import { Metadata } from 'next'

// Every page.jsx file should export a metadata variable.
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-object

export const metadata: Metadata = {
  title: 'Dashboard',   
  description: 'Katedra Coworking Dashboard',
};

function page() {
  return (
    <Layout>
      <Nav/>
    </Layout>
  );
}

export default page;