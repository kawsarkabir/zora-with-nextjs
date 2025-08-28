import { productModel } from "@/models/product-model";
import { dbConnect } from "@/service/mongo";

// GET /api/products/featured
export async function GET() {
  try {
    await dbConnect();

    const featuredProducts = await productModel
      .find({})
      .sort({ createdAt: -1 })
      .limit(3)
      .lean();

    return new Response(JSON.stringify(featuredProducts), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching featured products:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
