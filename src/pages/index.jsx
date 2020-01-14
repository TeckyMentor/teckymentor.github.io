import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import EmailListForm from "../components/EmailListForm";
import "../static/styles/main.scss";

const IndexPage = () => {
  return (
    <Layout
      style={{
        background:
          "linear-gradient(45deg, rgb(76, 0, 255), transparent), repeating-linear-gradient(45deg, rgb(185, 0, 255) 0%, rgb(185, 0, 255) 5%, transparent 5%, transparent 10%), rgb(216, 118, 255) repeating-linear-gradient(-45deg, rgba(185, 0, 255, 0.5) 0%, rgba(185, 0, 255, 0.5) 5%, transparent 5%, transparent 10%)",
      }}
    >
      <SEO title="Home" />
      <div className="hero">
        <section className="hero-section">
          <h1>Bienvenidos a TeckyMentor</h1>
          <p>La comunidad de tecnologia en La Guajira.</p>
          <div className="social-icons">
            <a
              className="social-icon social-icon--github"
              href="https://github.com/TeckyMentor"
            >
              <i />
              <div className="tooltip">Github</div>
            </a>
          </div>
        </section>
        <EmailListForm />
      </div>
    </Layout>
  );
};

export default IndexPage;
