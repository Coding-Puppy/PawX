import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import AnimatedPaw from "@/components/AnimatedPaw";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* 简洁背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 柔和渐变光晕 */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />
      </div>

      {/* 动态猫爪装饰 */}
      <AnimatedPaw
        label="Real-Time"
        className="top-[20vh] right-[10%] hidden lg:block pointer-events-auto"
        rotate={-20}
      />
      <AnimatedPaw
        label="Fast API"
        className="top-[50vh] left-[8%] hidden lg:block pointer-events-auto"
        flip
        rotate={25}
      />
      <AnimatedPaw
        label="Smart Bot"
        className="bottom-[25vh] right-[12%] hidden lg:block pointer-events-auto"
        rotate={15}
      />

      <div className="relative max-w-5xl mx-auto text-center">
        {/* 可爱的标签 */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          <span className="px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary">
            🐾 Real-Time
          </span>
          <span className="px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary">
            ⚡ Fast
          </span>
          <span className="px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary">
            🤖 Smart
          </span>
        </div>

        {/* 简洁可爱的主标题 */}
        <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-foreground mb-6 leading-tight">
          <span className="block">Follow</span>
          <span className="block bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 bg-clip-text text-transparent">PawX AI</span>
          <span className="block">to Alpha</span>
        </h1>

        {/* 简洁副标题 */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10">
          Paw through social data to crypto insights ✨
        </p>

        {/* 简洁按钮组 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="group">
            <Sparkles className="w-4 h-4 mr-2" />
            Get Started
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg">
            View Docs
          </Button>
        </div>
      </div>
    </section>;
};
export default HeroSection;