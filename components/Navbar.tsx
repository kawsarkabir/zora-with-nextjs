"use client";

import {
  User,
  LogOut,
  Menu,
  X,
  Search,
  ShoppingCart,
  ChevronDown,
  Percent,
  Star,
  Gift,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

interface NavbarProps {
  sideMenu: boolean;
}

const Navbar = ({ sideMenu }: NavbarProps) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOffersOpen, setIsOffersOpen] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  // Offer categories for the subnavigation
  const offerCategories = [
    { name: "Flash Sale", icon: Zap, discount: "Up to 70% OFF" },
    { name: "New Arrivals", icon: Star, discount: "Just In" },
    { name: "Best Sellers", icon: Gift, discount: "Most Popular" },
    { name: "Clearance", icon: Percent, discount: "Limited Stock" },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white text-sm py-2 text-center">
        <div className="container mx-auto px-4">
          🎉 Special Launch Offer - Get 20% OFF on all products! Use code:{" "}
          <strong>WELCOME20</strong>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md border-b border-gray-200 dark:border-gray-800"
            : "bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-white/20 dark:border-gray-800"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent flex items-center"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-teal-500 to-blue-600 flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">PH</span>
              </div>
              ProductHub
            </Link>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                />
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/"
                className={`font-medium text-gray-700 dark:text-gray-200 hover:text-teal-500 transition-colors ${
                  isActive("/") && "text-teal-500 font-semibold"
                }`}
              >
                Home
              </Link>

              {/* Offers dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsOffersOpen(true)}
                onMouseLeave={() => setIsOffersOpen(false)}
              >
                <button
                  className={`font-medium flex items-center text-gray-700 dark:text-gray-200 hover:text-teal-500 transition-colors ${
                    (pathname.includes("/offers") || isOffersOpen) &&
                    "text-teal-500 font-semibold"
                  }`}
                >
                  Offers
                  <ChevronDown
                    className={`ml-1 w-4 h-4 transition-transform ${
                      isOffersOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Offers dropdown menu */}
                {isOffersOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-700">
                      <h3 className="font-semibold text-gray-800 dark:text-white">
                        Special Offers
                      </h3>
                    </div>
                    {offerCategories.map((category, index) => (
                      <Link
                        key={index}
                        href={`/offers/${category.name
                          .toLowerCase()
                          .replace(" ", "-")}`}
                        className="flex items-center px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                        onClick={() => setIsOffersOpen(false)}
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center">
                          <category.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {category.name}
                          </p>
                          <p className="text-xs text-teal-500">
                            {category.discount}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/products"
                className={`font-medium text-gray-700 dark:text-gray-200 hover:text-teal-500 transition-colors ${
                  isActive("/products") && "text-teal-500 font-semibold"
                }`}
              >
                Products
              </Link>
              <Link
                href="/dashboard/add-product"
                className={`font-medium text-gray-700 dark:text-gray-200 hover:text-teal-500 transition-colors ${
                  isActive("/dashboard/add-product") &&
                  "text-teal-500 font-semibold"
                }`}
              >
                Add product
              </Link>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Search Button - Mobile */}
              <button className="lg:hidden p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
                <Search className="w-5 h-5" />
              </button>

              {/* Cart */}
              <button className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-teal-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>

              <ModeToggle />

              {status === "authenticated" ? (
                // Show profile image and logout when logged in
                <div className="flex items-center space-x-3">
                  <Image
                    src={
                      session.user?.image || "https://via.placeholder.com/32"
                    }
                    alt="Profile"
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border-2 border-teal-400 cursor-pointer"
                  />

                  <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="text-gray-700 dark:text-gray-200 hover:text-red-500 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                    title="Logout"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                // Show login button if not authenticated and sideMenu is enabled
                sideMenu && (
                  <Button
                    size="sm"
                    asChild
                    className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white text-sm font-medium hidden md:flex"
                  >
                    <Link href="/login" className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      Login
                    </Link>
                  </Button>
                )
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-2 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 animate-in slide-in-from-top-2 duration-200">
              {/* Mobile Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-50 dark:bg-gray-750 text-gray-900 dark:text-white"
                />
              </div>

              <div className="flex flex-col space-y-3">
                <Link
                  href="/"
                  className={`font-medium py-2 px-3 rounded-lg ${
                    isActive("/")
                      ? "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-750"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                  <h3 className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                    Special Offers
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {offerCategories.map((category, index) => (
                      <Link
                        key={index}
                        href={`/offers/${category.name
                          .toLowerCase()
                          .replace(" ", "-")}`}
                        className="flex flex-col items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-750 hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-teal-400 to-blue-500 flex items-center justify-center mb-1">
                          <category.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-200">
                          {category.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/products"
                  className={`font-medium py-2 px-3 rounded-lg ${
                    isActive("/products")
                      ? "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-750"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link>
                <Link
                  href="/dashboard/add-product"
                  className={`font-medium py-2 px-3 rounded-lg ${
                    isActive("/dashboard/add-product")
                      ? "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-750"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Add product
                </Link>

                <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                  {status === "authenticated" ? (
                    <button
                      className="w-full flex items-center justify-center py-2 px-3 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                      onClick={() => {
                        signOut({ callbackUrl: "/" });
                        setIsMenuOpen(false);
                      }}
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </button>
                  ) : (
                    sideMenu && (
                      <Button
                        size="sm"
                        asChild
                        className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white"
                      >
                        <Link
                          href="/login"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <User className="w-4 h-4 mr-2" />
                          Login
                        </Link>
                      </Button>
                    )
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
