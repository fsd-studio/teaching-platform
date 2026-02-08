import Footer from "@/components/template/sections/footer/Footer";
import Nav from "@/components/template/sections/nav/Nav";
import { ReactNode } from "react";

export default function Layout({ 
  children,
 }: { 
  children: ReactNode 
}) {
  return (
    <div>
      <Nav />

      {children}

      <Footer />
    </div>
  );
}