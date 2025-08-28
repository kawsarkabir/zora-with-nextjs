import { productModel } from "@/models/product-model";
import { dbConnect } from "@/service/mongo";

interface ProductPayload {
  name: string;
  description: string;
  price: number;
  category: string;
  img: string;
}
// get
export async function GET() {
  try {
    await dbConnect();
    const products = await productModel.find({}).lean();
    return new Response(JSON.stringify(products), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}

// create
export async function POST(req: Request) {
  try {
    const { name, description, price, category, img }: ProductPayload =
      await req.json();

    // Basic validation
    if (!name || !description || !price || !category || !img) {
      return new Response(
        JSON.stringify({ message: "All fields are required." }),
        { status: 400 }
      );
    }

    await dbConnect();

    const product = await productModel.create({
      name,
      description,
      price,
      category,
      img,
      createdAt: new Date(),
    });

    return new Response(
      JSON.stringify({
        message: "Product created successfully",
        id: product._id,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating product:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
