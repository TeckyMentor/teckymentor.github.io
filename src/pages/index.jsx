import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import EmailListForm from "../components/EmailListForm";
import "../static/styles/main.scss";

const IndexPage = () => {
  return (
    <Layout>
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
