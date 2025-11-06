import connectDB from '@/config/db'
import Product from '@/models/Product'
import { NextResponse } from 'next/server'

export async function GET(request) {
    try {

        const { searchParams } = new URL(request.url)
        const id = searchParams.get('id')

        await connectDB()

        if (id) {
            const product = await Product.findById(id)
            return NextResponse.json({success:true, products: product ? [product] : []})
        } else {
            const products = await Product.find({})
            return NextResponse.json({success:true, products})
        }
    } catch (error) {
        return NextResponse.json({success:false, message: error.message})
    }
}