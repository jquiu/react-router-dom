/**
 * Dependencies
 */
import React from "react";
import { Route } from "react-router-dom";

/**
 * Components
 */
import Home from "./home/index";
import Courses from "./courses/index";
import Contacts from "./contacts/index";

/**
 * Others
 */
import { URLS } from "../utils/constants";

function Pages() {
  return (
    <main className="main">
      <Route path={URLS.base} exact component={Home} />
      <Route path={URLS.courses} exact component={Courses} />
      <Route path={URLS.contacts} exact component={Contacts} />
    </main>
  );
}

export default Pages;
