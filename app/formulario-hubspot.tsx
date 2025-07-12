"use client";

import { useState } from "react";
import HubspotForm from "../formulario";
import { Card } from "@/components/ui/card";

export default function RegistrationForm() {
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleTermsChange = (checked: boolean | "indeterminate") => {
    setAcceptTerms(checked === true);
  };

  return (
    <div className="flex justify-center lg:justify-start">
      <Card className="w-full bg-white border-none shadow-2xl">
        {/* Tu formulario HubSpot con desactivación */}
        <div className={acceptTerms ? "opacity-100" : "opacity-50 pointer-events-none"}>
          <HubspotForm />
        </div>

        {/* Checkbox de términos y condiciones */}
        <div className="mt-4 flex items-center gap-2 px-4 pb-4">
          <input
            id="terms"
            type="checkbox"
            checked={acceptTerms}
            onChange={(e) => handleTermsChange(e.target.checked)}
            className="h-4 w-4 cursor-pointer accent-blue-600"
          />
          <label
            htmlFor="terms"
            className="cursor-pointer text-sm text-gray-700 select-none"
          >
            Acepto los&nbsp;
            <a
              href="/terminos-y-condiciones"
              className="text-blue-600 underline hover:text-blue-800"
              target="_blank"
            >
              términos y condiciones
            </a>
          </label>
        </div>
      </Card>
    </div>
  );
}
