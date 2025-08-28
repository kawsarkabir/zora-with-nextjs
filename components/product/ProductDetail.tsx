"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Star,
  ArrowLeft,
  Heart,
  Share2,
  ShoppingCart,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  img: string;
}

interface ProductDetailProps {
  productID: string;
}

const ProductDetail = ({ productID }: ProductDetailProps) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`/api/products/${productID}`);

        if (!res.ok) {
          throw new Error(`Failed to fetch product: ${res.status}`);
        }

        const data: Product = await res.json();
        setProduct(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [productID]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Product not found.
      </div>
    );
  }

  // The rest of your UI code using `product` object (same as before)...

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-20">
        <div className="container mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary transition-smooth">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/products"
              className="hover:text-primary transition-smooth"
            >
              Products
            </Link>
            <span>/</span>
            <span>{product.name}</span>
          </div>

          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/products">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="aspect-square bg-muted rounded-xl mb-4 overflow-hidden">
                <Image
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
              </div>
              {/* Add thumbnail images if available */}
            </div>

            {/* Product Info */}
            <div>
              <Badge variant="secondary" className="mb-4">
                {product.category}
              </Badge>

              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${
                        star <= 4
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-medium">4</span>
              </div>

              <div className="flex items-baseline space-x-4 mb-6">
                <span className="text-4xl font-bold text-primary">
                  ${product.price}
                </span>
              </div>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                {product.description.split(" ").slice(0, 10).join(" ")}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" onClick={() => alert("Add to cart clicked")}>
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => alert("Wishlist clicked")}
                >
                  <Heart className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              {/* Shipping Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center space-x-3 p-4 rounded-lg bg-muted/50">
                  <Truck className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium text-sm">Free Shipping</div>
                    <div className="text-xs text-muted-foreground">
                      Orders over $50
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-lg bg-muted/50">
                  <Shield className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium text-sm">2 Year Warranty</div>
                    <div className="text-xs text-muted-foreground">
                      Full coverage
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-lg bg-muted/50">
                  <RotateCcw className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium text-sm">Easy Returns</div>
                    <div className="text-xs text-muted-foreground">
                      30-day policy
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Description */}
              <div className="grid grid-cols-1 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Product Description</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed whitespace-pre-line">
                      {product.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
