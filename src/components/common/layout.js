import PropTypes from "prop-types";
import React from "react";

import Header from "../MobileMenu/header";
import MDHeader from "../MobileMenu";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen antialiased font-body text-neutral-700 dark:text-neutral-100 bg-neutral-50 dark:bg-neutral-900 dark-transition">
      <Header />

      <main className="flex flex-col flex-1 w-full mx-auto mb-20">
        {children}
      </main>
      <MDHeader />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;