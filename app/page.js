import Image from "next/image";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Menu from "./components/Menu";
import HeroSection from "./components/HeroSection";
import TrustBuilding from "./components/TrustBulding";
import ArtOfAuthenticity from "./components/ArtOfAuthenticity";
import RoyalCollection from "./components/RoyalCollection";
import FeaturedCollection from "./components/FeaturedCollection";
import SellingProducts from "./components/SellingProducts";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <>
    <AnnouncementBar/>
    <Header/>
    <Menu/>
    <HeroSection/>
    <TrustBuilding/>
    <ArtOfAuthenticity/>
    <RoyalCollection/>
    <FeaturedCollection/>
    <SellingProducts/>

    <WhatsAppButton/>
    </>
  );
}
