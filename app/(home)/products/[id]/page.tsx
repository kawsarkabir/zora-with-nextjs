import ProductDetail from "@/components/product/ProductDetail";

interface ProductDetailsPageProps {
  params: { id: string };
}

const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
  const { id } = await params;

  return <ProductDetail productID={id} />;
};

export default ProductDetailsPage;
