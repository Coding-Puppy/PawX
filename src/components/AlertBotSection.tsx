import { MessageSquare, Zap, Search, Bell, Users, Hash } from "lucide-react";
import { Button } from "@/components/ui/button";

const botFeatures = [
  { icon: Zap, text: "Quick summary" },
  { icon: Search, text: "Query KOL" },
  { icon: Users, text: "Analyze account" },
  { icon: Hash, text: "Keywords monitoring" },
  { icon: Bell, text: "Subscribe keywords & KOL" },
];

const AlertBotSection = () => {
  return (
    <section id="alert-bot" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[0.8fr,1.2fr] gap-12 items-center">
          {/* Left - Bot Preview */}
          <div className="relative">
            {/* Phone mockup container */}
            <div className="relative mx-auto w-[280px] h-[560px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-[3rem] p-3 shadow-2xl">
              <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden border border-orange-200/30 dark:border-orange-800/20">
                {/* Phone screen content */}
                <div className="p-6 space-y-4">
                  {/* Header */}
                  <div className="flex items-center gap-3 pb-4 border-b border-border/30">
                    <div className="w-12 h-12 rounded-full bg-gradient-orange flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm">PawX Alert Bot</h3>
                      <p className="text-xs text-muted-foreground">@pawx_bot</p>
                    </div>
                  </div>

                  {/* Feature buttons */}
                  <div className="space-y-2">
                    {botFeatures.map((feature, index) => (
                      <div
                        key={index}
                        className="glass-card p-3 flex items-center gap-3 hover:border-primary/30 transition-all"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-orange/20 flex items-center justify-center">
                          <feature.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-xs font-semibold">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating decoration */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-orange rounded-2xl rotate-12 opacity-20 blur-sm" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary/30 rounded-2xl -rotate-12 opacity-20 blur-sm" />
          </div>

          {/* Right - Text Content */}
          <div>
            <span className="px-4 py-2 bg-primary/10 rounded-full text-sm font-bold text-primary mb-4 inline-block">
              TELEGRAM BOT
            </span>
            <h2 className="hero-title text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              <span className="text-foreground">PAWX OFFERS</span>
              <br />
              <span className="gradient-text">THE BEST</span>
              <br />
              <span className="text-foreground">ALERT BOT</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 font-semibold">
              Get instant Twitter alerts directly in Telegram. Monitor keywords, track KOLs,
              and receive real-time summaries of important activities in your niche.
            </p>

            {/* Feature list */}
            <div className="space-y-3 mb-8">
              {[
                "Real-time keyword monitoring and alerts",
                "KOL activity tracking and analysis",
                "Quick summaries of trending topics",
                "Customizable notification preferences",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-base text-foreground font-medium">{item}</p>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg">
              Start Using Bot
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlertBotSection;
