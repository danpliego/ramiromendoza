import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: No encontrada" />
    <h1>Pagina no encontrada</h1>
    <p>Oops no encontramos la página que buscabas</p>
  </Layout>
);

export default NotFoundPage;
