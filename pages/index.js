import React from "react";
import BlogList from "../components/BlogList";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Services from "../components/Services";

const index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <BlogList />
      <Contact />
    </Layout>
  );
};

export default index;
