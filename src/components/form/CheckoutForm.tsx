"use client";

import React, { useState } from "react";
import { useModalStore } from "@/store/useModalStore";
import { useForm } from "react-hook-form";
import Summary from "../items/Summary";
import FormField from "./FormField";
import FormLegend from "./FormLegend";
import Image from "next/image";

type Inputs = {
  name: string;
  emailAddress: string;
  phoneNumber: string;
  address: string;
  ZIPCode: string;
  city: string;
  country: string;
  eMoneyNumber: number;
  eMoneyPin: number;
};

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onBlur" });

  const { openCheckoutModal } = useModalStore();
  const options = ["e-Money", "Cash on Delivery"];
  const [checkedOption, setCheckedOption] = useState(options[0]);
  const [isDisabled, setIsDisabled] = useState(false);

  const onSubmit = () => {
    if (!isDisabled) {
      openCheckoutModal();
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col lg:items-center lg:flex-row gap-8 mt-6"
      noValidate
    >
      {/* Left Section */}
      <div className="bg-white rounded-lg px-3 sm:px-6 lg:px-12 pt-6 lg:pt-14 pb-8 lg:pb-12 w-full lg:max-w-[55.625rem] flex-1">
        <h1 className="text-2xl font-bold mb-8 text-black">Checkout</h1>

        {/* Billing Details */}
        <fieldset className="mb-8">
          <FormLegend>Billing Details</FormLegend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              {...register("name", {
                required: "Field cannot be empty",
                pattern: {
                  value: /^[^<>%$#^*]*$/,
                  message: "Wrong format",
                },
              })}
              errors={errors.name}
              label="Name"
              placeholder="Alexei Ward"
            />
            <FormField
              {...register("emailAddress", {
                required: "Field cannot be empty",
                pattern: {
                  value: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/,
                  message: "Wrong format",
                },
              })}
              errors={errors.emailAddress}
              label="Email Address"
              type="email"
              placeholder="alexei@mail.com"
            />
            <FormField
              {...register("phoneNumber", {
                required: "Field cannot be empty",
              })}
              errors={errors.phoneNumber}
              label="Phone Number"
              placeholder="+1 202-555-0136"
            />
          </div>
        </fieldset>

        {/* Shipping Info */}
        <fieldset className="mb-8">
          <FormLegend>Shipping Info</FormLegend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Address spans both columns */}
            <div className="sm:col-span-2">
              <FormField
                {...register("address", {
                  required: "Field cannot be empty",
                })}
                errors={errors.address}
                label="Your Address"
                placeholder="1137 Williams Avenue"
              />
            </div>

            {/* ZIP Code on left, City on right */}
            <div className="sm:col-start-1 sm:col-end-2">
              <FormField
                {...register("ZIPCode", {
                  required: "Field cannot be empty",
                  pattern: {
                    value: /^[0-9]{5}(?:-[0-9]{4})?$/,
                    message: "Wrong format",
                  },
                })}
                errors={errors.ZIPCode}
                label="ZIP Code"
                placeholder="10001"
              />
            </div>
            <div className="sm:col-start-2 sm:col-end-3">
              <FormField
                {...register("city", {
                  required: "Field cannot be empty",
                })}
                errors={errors.city}
                label="City"
                placeholder="New York"
              />
            </div>

            {/* Country starts new row */}
            <div className="sm:col-start-1 sm:col-end-2">
              <FormField
                {...register("country", {
                  required: "Field cannot be empty",
                })}
                errors={errors.country}
                label="Country"
                placeholder="United States"
              />
            </div>
          </div>
        </fieldset>

        {/* Payment Details */}
        <fieldset>
          <FormLegend>Payment Details</FormLegend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <p className="text-sm font-bold text-black mb-2 sm:mb-0">
              Payment Method
            </p>
            <div className="flex flex-col gap-2">
              {options.map((value) => (
                <label
                  key={value}
                  className={`border rounded-lg px-4 py-2 cursor-pointer ${
                    checkedOption === value
                      ? "border-orange-500 bg-orange-50"
                      : "border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    value={value}
                    checked={checkedOption === value}
                    onChange={() => setCheckedOption(value)}
                    className="hidden"
                  />
                  {value}
                </label>
              ))}
            </div>
          </div>

          {checkedOption === options[0] ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <FormField
                {...register("eMoneyNumber", {
                  required: "Field cannot be empty",
                  pattern: {
                    value: /^[0-9]{9}$/,
                    message: "Wrong format",
                  },
                })}
                errors={errors.eMoneyNumber}
                label="e-Money Number"
                placeholder="238521993"
                type="number"
              />
              <FormField
                {...register("eMoneyPin", {
                  required: "Field cannot be empty",
                  pattern: {
                    value: /^[0-9]{4}$/,
                    message: "Wrong format",
                  },
                })}
                errors={errors.eMoneyPin}
                label="e-Money PIN"
                placeholder="6891"
                type="number"
              />
            </div>
          ) : (
            <div className="flex items-center gap-4 mt-4">
              <Image
                src="/images/checkout/icon-cash-on-delivery.svg"
                alt=""
                width={12}
                height={12}
                className="w-10 h-10"
              />
              <p className="text-sm text-gray-400">
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          )}
        </fieldset>
      </div>

      {/* Right Section (Summary) */}
      <Summary isDisabled={isDisabled} setIsDisabled={setIsDisabled} />
    </form>
  );
};

export default CheckoutForm;
