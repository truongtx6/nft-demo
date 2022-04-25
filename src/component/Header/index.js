import React from "react";

import { Helmet } from "react-helmet";

export default function Header() {
  return (
    <Helmet htmlAttributes>
      <html lang="en" />
      <meta charset="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <meta name="description" content="" />
      <meta name="author" content="metazom" />
      <title>Index</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Oxanium:wght@400;600;800&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
      />
    </Helmet>
  );
}
