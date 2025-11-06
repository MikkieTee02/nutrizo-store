import { v2 as cloudinary } from "cloudinary";
import {getAuth} from '@clerk/nextjs/server'
import authSeller from "@/lib/authSeller";
import { NextResponse } from "next/server";
import connectDB from "@/config/db";
import Product from "@/models/Product";

//Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


export async function PUT(request, { params }) {
    try {

        const {userId} = getAuth(request)

        const isSeller = await  authSeller(userId)

        if (!isSeller) {
           return NextResponse.json({success: false, message: 'not-authorized'})
        }

        const { id } = params;

        const formData = await request.formData()

        const name = formData.get('name');
        const description = formData.get('description');
        const category = formData.get('category');
        const price = formData.get('price');
        const offerPrice = formData.get('offerPrice');

        const files = formData.getAll('images');

        await connectDB()

        // Find the existing product
        const product = await Product.findById(id);
        if (!product) {
            return NextResponse.json({success: false, message: 'Product not found'})
        }

        if (product.userId !== userId) {
            return NextResponse.json({success: false, message: 'not-authorized'})
        }

        let image = product.image; // Keep existing images

        // If new images are uploaded, upload them
        if (files && files.length > 0) {
            const result = await Promise.all(
                files.map(async (file) => {
                    const arrayBuffer = await file.arrayBuffer()
                    const buffer = Buffer.from(arrayBuffer)

                    return new Promise((resolve, reject)=>{
                      const stream = cloudinary.uploader.upload_stream(
                        {resource_type: 'auto'},
                        (error, result) => {
                            if (error) {
                                reject(error)
                            }else{
                                resolve(result)
                            }
                        }
                      )
                      stream.end(buffer)
                    })
                })
            )

            image = result.map(result => result.secure_url)
        }

        // Update the product
        const updatedProduct = await Product.findByIdAndUpdate(id, {
            name,
            description,
            category,
            price: Number(price),
            offerPrice: Number(offerPrice),
            image,
        }, { new: true })

        return NextResponse.json({success: true, message: 'Product updated successfully', product: updatedProduct})


    } catch (error) {
         return NextResponse.json({success: false, message: error.message})
    }
}