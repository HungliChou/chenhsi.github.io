/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import { I18nProvider } from "./i18n/I18nProvider";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import CaseStudies from "./pages/CaseStudies";
// import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
// import Careers from "./pages/Careers";

export default function App() {
  return (
    <I18nProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="industries" element={<Industries />} />
            <Route path="case-studies" element={<CaseStudies />} />
            {/* <Route path="blog" element={<Blog />} /> */}
            <Route path="faq" element={<FAQ />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
            {/* <Route path="careers" element={<Careers />} /> */}
          </Route>
        </Routes>
      </Router>
    </I18nProvider>
  );
}
