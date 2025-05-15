import "../app.css"
import Navbar from "~/sections/navbar";
import type { Route } from "./+types/home";
import LandingPage from "~/sections/landingPage";
import Product from "~/sections/product";
import Facts from "~/sections/facts";
import Info from "~/sections/info";
import Articles from "~/sections/articles";
import Videos from "~/sections/videos";
import Footer from "~/sections/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Derma World" }
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start">
    <Navbar/>
    <LandingPage/>
    <Product/>
    <Facts/>
    <Info/>
    <Articles/>
    <Videos/>
    <Footer/>
    </div>
  )
}
