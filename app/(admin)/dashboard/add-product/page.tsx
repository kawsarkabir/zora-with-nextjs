import { auth } from "@/auth";
import AddProduct from "@/components/dashboard/AddProdcut";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const AddProductPage = async () => {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <AddProduct />
    </>
  );
};

export default AddProductPage;
