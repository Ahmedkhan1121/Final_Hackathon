'use client';
import { useProductHook } from '@/Context/ProductContext';
import TrackingForm from '../TrackingForm/TrackingForm';
import TrackingError from '../TrackingError/TrackingError';
import ShipmentIdTrack from '../ShipmentIdTrack/ShipmentIdTrack';

function TrackingPage() {
    const {trackingData,trackError} = useProductHook();
  return (
    <section className='py-10 '>
        <h1 className={` text-3xl text-center pb-5`}>Track Your Shipment</h1>
      <TrackingForm/>
      {
        trackError ? <TrackingError/> :''
      }
      {
        trackingData ? <ShipmentIdTrack/> :''
      }
    </section>
  )
}

export default TrackingPage