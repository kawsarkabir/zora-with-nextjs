import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, CheckCircle } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-blue-900 dark:to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Light mode gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl animate-pulse dark:bg-teal-500/10"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000 dark:bg-blue-500/10"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzMiAzMicgd2lkdGg9JzMyJyBoZWlnaHQ9JzMyJyBmaWxsPSdub25lJyBzdHJva2U9J3JnYmEoMCwwLDAsMC4wNSknPjxwYXRoIGQ9J00wIC41SDMxLjVWMzInLz48L3N2Zz4=')] dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAzMiAzMicgd2lkdGg9JzMyJyBoZWlnaHQ9JzMyJyBmaWxsPSdub25lJyBzdHJva2U9J3JnYmEoMjU1LDI1NSwyNTUsMC4wNSknPjxwYXRoIGQ9J00wIC41SDMxLjVWMzInLz48L3N2Zz4=')] bg-[size:60px_60px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-10">
        <div className="max-w-5xl mx-auto">
          {/* Trust Badge */}
          <div
            className="inline-flex items-center px-5 py-3 rounded-full 
                         bg-white/80 backdrop-blur-md border border-slate-200/50 
                         text-slate-700 dark:bg-slate-900/80 dark:border-slate-700/50 dark:text-slate-200
                         text-sm md:text-base font-medium mb-10
                         hover:bg-white dark:hover:bg-slate-800/90 transition-all duration-300 group"
          >
            <span className="w-2 h-2 bg-teal-500 rounded-full mr-3 animate-pulse dark:bg-teal-400"></span>
            Trusted by 50,000+ tech enthusiasts worldwide
            <div className="ml-3 flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-amber-400 text-amber-400 ml-1"
                />
              ))}
              <span className="ml-2 text-sm">4.8/5</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-800 dark:text-white leading-tight">
            Discover Cutting-Edge{" "}
            <span className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 dark:from-teal-300 dark:via-cyan-300 dark:to-blue-300 bg-clip-text text-transparent">
              Tech Gadgets
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Curated collection of innovative gadgets designed to upgrade your
            lifestyle, boost productivity, and bring futuristic technology to
            your fingertips.
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-5">
            {[
              "Free shipping on orders over $50",
              "30-day money-back guarantee",
              "2-year warranty on all products",
            ].map((feature, i) => (
              <div
                key={i}
                className="flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-200/50 dark:bg-slate-800/80 dark:border-slate-700/50"
              >
                <CheckCircle className="w-4 h-4 text-teal-500 dark:text-teal-400 mr-2" />
                <span className="text-slate-700 dark:text-slate-300 text-sm">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-cyan-500 to-teal-500 
                         hover:from-cyan-600 hover:to-teal-600
                         text-lg px-8 py-6 rounded-xl shadow-lg shadow-cyan-500/25
                         hover:shadow-cyan-500/40 transform hover:scale-105
                         transition-all duration-300 font-medium flex items-center text-white group"
            >
              <Link href="/products">
                Shop Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-slate-300 text-slate-700 hover:bg-slate-100
                         dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800/50
                         text-lg px-8 py-6 rounded-xl hover:border-slate-400 dark:hover:border-slate-500
                         transition-all duration-300 font-medium flex items-center group"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              See Products in Action
            </Button>
          </div>
        </div>
      </div>

      {/* Scrolling Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-teal-500 dark:bg-teal-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
