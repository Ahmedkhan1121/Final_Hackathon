'use client'

import { useProductHook } from "@/Context/ProductContext";

function TrackingForm() {
    const {labelId,onHandleTrack,loading,onSubmitTracking} = useProductHook();
  return (
    <form className={` flex flex-col items-center`}  action='' onSubmit={onSubmitTracking}>
      <input className="border p-2 mb-5 outline-none w-[500px] max-[530px]:w-[95%]" type="text" name="" id="" placeholder="Enter Your Shipment ID" value={labelId} onChange={(e) => onHandleTrack(e.target.value)} />
      <button type="submit" className="bg-teal-200 text-white p-3" disabled={loading}>{loading ? "Tracking..." : "Track Shipment"}</button>
    </form>
  )
}

export default TrackingForm