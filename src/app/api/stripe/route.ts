import { CartListType } from "@/utils/type/type";
import { NextRequest,NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!);
export async function POST(req:NextRequest){
    try {
        const addCartProd:CartListType[]= await req.json();
        const cheSession = await stripe.checkout.sessions.create({
            line_items: addCartProd.map((e: CartListType) => ({
                price_data: {
                  currency: "usd",
                  product_data: {
                    name: e.productname,
                    images:[e.productimage]
                  },
                  unit_amount:Math.round(Number(e.price) * 100),
                },
                quantity: e.productquantity,
              })),
              
            shipping_options:[
                {shipping_rate:"shr_1QojsRHpak25DTKbqjynzzfk"}
            ],
            mode:'payment',
            success_url: `${process.env.NEXT_PUBLIC_AVION_API}/success`,
            cancel_url: `${process.env.NEXT_PUBLIC_AVION_API}/cart`,
            
        });
        return NextResponse.json({ sessionId: cheSession.id },{status:200});
    } catch (error) {
        return NextResponse.json({error:`Internal Server Error :${error}`},{status:500})
    }
}