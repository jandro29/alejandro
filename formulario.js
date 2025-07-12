"use client";
// components/HubspotForm.js
import { useEffect } from "react";

const HubspotForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/50261857.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      class="hs-form-frame lg:w-[100%] lg:h-[100%] text-white"
      data-region="na1"
      data-form-id="fc57bda5-19f8-4a04-a0d6-e84c95b5fe5c"
      data-portal-id="50261857"
    ></div>
  );
};

export default HubspotForm;
