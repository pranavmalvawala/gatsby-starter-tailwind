import React, { useState } from "react";
import Section from "./section";
// import addToMailchimp from "gatsby-plugin-mailchimp";

function Newsletter() {
  const [state, setState] = useState({ mail: "", status: "", msg: "" });

  const handleChange = (event) => {
    setState({ mail: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // addToMailchimp(state.mail)
    //   .then(({ msg, result }) => {
    //     if (result === "success") {
    //       setState({ status: "success" });
    //       setState({ msg: msg });
    //       throw msg;
    //     }
    //   })
    //   .catch((err) => {
    //     setState({ status: "error" });
    //     setState({ msg: err });
    //   });
  };

  return (
    <Section extend="mt-0">
      <div className="p-12 bg-orange-500 rounded-lg">
        <div className="text-white measure-narrow">
          <strong className="text-3xl">
            Let&#39;s chat about coding, business and learning.
          </strong>
          <p>
            I send articles and thoughts occasionally and love to have
            conversations with folks. You can always unsubscribe.
          </p>
        </div>
        <form
          className="flex flex-wrap items-end -mx-2 overflow-hidden"
          onSubmit={handleSubmit}
        >
          <label className="w-full px-2 my-2 md:w-2/4">
            <input
              className="block w-full px-4 py-2 leading-normal bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none text-neutral-600 focus:shadow-outline"
              name="email"
              type="text"
              placeholder="me@email.com"
              onChange={handleChange}
              value={state.mail}
            ></input>
          </label>
          <div className="w-full px-2 my-4 md:my-2 md:w-1/4">
            <button
              type="submit"
              className="inline-flex items-center justify-center w-full h-full px-6 py-3 text-xl font-bold text-green-700 bg-white rounded-lg"
            >
              Subscribe
            </button>
          </div>
        </form>
        <div className="my-4 text-base text-white">{state.msg}</div>
      </div>
    </Section>
  );
}

export default Newsletter;