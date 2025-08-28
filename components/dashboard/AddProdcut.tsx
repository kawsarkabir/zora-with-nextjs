"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Plus } from "lucide-react";

const AddProduct = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [productCategory, setProductCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name") as string;
      const description = formData.get("description") as string;
      const price = parseFloat(formData.get("price") as string);

      // Client-side validation
      if (!name || !description || !price || !productCategory || !imageUrl) {
        setError("All fields are required.");
        setIsLoading(false);
        return;
      }

      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          price,
          category: productCategory,
          img: imageUrl,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Failed to add product.");
      }

      router.push("/products");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background mt-10">
      <main className="pt-20">
        <div className="container mx-auto px-6 py-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Plus className="w-5 h-5 mr-2" />
                Add New Product
              </CardTitle>
              <CardDescription>
                Create a new digital product listing for your store
              </CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Product Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter product name"
                    required
                  />
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={productCategory}
                    onValueChange={setProductCategory}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AI Tool">AI Tool</SelectItem>
                      <SelectItem value="Productivity">Productivity</SelectItem>
                      <SelectItem value="Analytics">Analytics</SelectItem>
                      <SelectItem value="Automation">Automation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <Label htmlFor="price">Price</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    required
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Enter product description"
                    className="min-h-[100px]"
                    required
                  />
                </div>

                {/* Single Image URL */}
                <div className="space-y-2">
                  <Label htmlFor="img">Image URL (Single Image)</Label>
                  <Input
                    id="img"
                    name="img"
                    type="url"
                    placeholder="https://example.com/image.png"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    required
                  />
                  <p className="text-sm text-muted-foreground">
                    Enter a direct link to a single image (JPG, PNG, WebP, etc.)
                  </p>
                </div>

                {/* Submit */}
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Adding Product..." : "Add Product"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AddProduct;
