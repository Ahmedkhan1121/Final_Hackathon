'use client';
import { useProductHook } from '@/Context/ProductContext';


function LabelButton() {
    
    const {onCreatingLabel,loading} = useProductHook();
  return (
    <button className={` bg-teal-400 text-white p-3 rounded-md`} onClick={onCreatingLabel}  disabled={loading}>{loading ? 'Creating Label...' :'Create Label'}</button>
  )
}

export default LabelButton