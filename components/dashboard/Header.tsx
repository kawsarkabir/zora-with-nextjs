import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 border-b border-white/20">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between ">
        <div>
          <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your products and view analytics
          </p>
        </div>
        <Button variant="ghost" asChild>
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Header;
