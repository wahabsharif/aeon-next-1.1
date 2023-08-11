import PageBanner from "@/components/BannerSection/PageBanner";
import GallerySectionOne from "@/components/GallerySection/GallerySectionOne";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import PostControl from "@/components/PostControl/PostControl";
import ProjectSingle from "@/components/ProjectSection/ProjectSingle";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const PortfolioSingle = () => {
  return (
    <Layout pageTitle="Portfolio Single">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Portfolio" />
      <ProjectSingle />
      <PostControl />
      <GallerySectionOne similar />
      <MainFooter />
    </Layout>
  );
};

export default PortfolioSingle;
