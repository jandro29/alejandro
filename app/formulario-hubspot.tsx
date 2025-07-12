"use client"

import { useState } from "react"
import HubspotForm from '../formulario'
import { Card } from "@/components/ui/card"

export default function RegistrationForm() {

  return (
<div className="flex justify-center lg:justify-start">
  <Card className="w-[100%] bg-white border-none shadow-2xl text-white">
    <HubspotForm />
  </Card>
</div>
  )
}
