"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  ArrowRight,
  Shield,
  Sparkles,
  Clock,
  ShoppingCart,
  Truck,
  RotateCcw,
  Award,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  img: string;
  createdAt: string;
}

const ProductHighlights = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products/featured");
        const data = await res.json();
        setFeaturedProducts(data);
      } catch (error) {
        console.error("Failed to fetch featured products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const ProductSkeleton = () => (
    <Card className="border border-border bg-card overflow-hidden animate-pulse h-full flex flex-col">
      <div className="aspect-[4/3] bg-muted"></div>
      <CardHeader className="pb-4">
        <div className="h-6 bg-muted rounded mb-2"></div>
        <div className="h-4 bg-muted rounded w-3/4"></div>
      </CardHeader>
      <CardContent>
        <div className="h-4 bg-muted rounded mb-2"></div>
        <div className="h-4 bg-muted rounded w-2/3"></div>
      </CardContent>
      <CardFooter>
        <div className="h-10 bg-muted rounded w-full"></div>
      </CardFooter>
    </Card>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-[#0b1222] dark:to-[#0b1222]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-1.5 text-sm font-semibold"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Featured Collection
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Top-Rated{" "}
            <span className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 dark:from-teal-300 dark:via-cyan-300 dark:to-blue-300 bg-clip-text text-transparent">
              Tech Gadgets
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our most innovative gadgets, carefully selected for
            exceptional performance, design, and cutting-edge technology.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => <ProductSkeleton key={i} />)
          ) : featuredProducts.length === 0 ? (
            <div className="col-span-3 text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                <Award className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                New gadgets coming soon!
              </h3>
              <p className="text-muted-foreground">
                We're preparing our latest tech innovations for you.
              </p>
            </div>
          ) : (
            featuredProducts.map((product) => (
              <Card
                key={product._id}
                className="group border border-border bg-card hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1   flex flex-col py-0"
              >
                <CardHeader className="relative p-0">
                  <div className="aspect-[4/3] bg-muted overflow-hidden relative">
                    <Image
                      src={product.img || "https://via.placeholder.com/600"}
                      alt={product.name}
                      width={600}
                      height={450}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-primary text-white">Popular</Badge>
                    </div>
                  </div>
                  <div className="px-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-foreground line-clamp-1">
                        {product.name}
                      </CardTitle>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">4.7</span>
                      </div>
                    </div>
                    <Badge variant="outline">{product.category}</Badge>
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                    {product.description}
                  </CardDescription>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="text-xl font-bold text-primary">
                      ${product.price.toFixed(2)}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      In stock
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="">
                  <Button
                    size="lg"
                    asChild
                    className="w-full bg-gradient-to-r from-primary to-primary/70 hover:from-primary/80 hover:to-primary text-white py-2 group/btn"
                  >
                    <Link
                      href={`/products/${product._id}`}
                      className="flex items-center justify-center gap-2"
                    >
                      <ShoppingCart className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                      Add to Cart
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/70 hover:from-primary/80 hover:to-primary text-black dark:text-white px-8 py-3"
          >
            <Link href="/products">
              View All Products <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
