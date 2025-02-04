'use client';
import { useProductHook } from "@/Context/ProductContext";
import Link from "next/link";
function ShipLabelButton() {
    const {labelPdf} = useProductHook();
  return (
    <Link href={labelPdf as string}
     target="_blank">

    <button className={` bg-sky-400 text-white p-3`} >
        Download Label
    </button>
    </Link>
  )
}

export default ShipLabelButton