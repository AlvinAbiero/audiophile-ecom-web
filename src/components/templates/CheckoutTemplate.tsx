import React from "react";
import GoBackLink from "../links/GoBackLink";
import CheckoutForm from "../form/CheckoutForm";

const CheckoutTemplate = () => {
  return (
    <main
      className="bg-white px-4 sm:px-8 w-full mx-auto pt-12 pb-24"
      id="main"
    >
      <GoBackLink />
      <CheckoutForm />
    </main>
  );
};

export default CheckoutTemplate;
