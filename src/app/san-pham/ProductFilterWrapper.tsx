"use client";

import { Suspense } from "react";
import ProductFilter from "./ProductFilter";

interface Props {
  initialDeviceType?: string;
  disableDeviceTypeSelect?: boolean;
}

export default function ProductFilterWrapper({ initialDeviceType, disableDeviceTypeSelect }: Props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductFilter initialDeviceType={initialDeviceType} disableDeviceTypeSelect={disableDeviceTypeSelect} />
    </Suspense>
  );
}
