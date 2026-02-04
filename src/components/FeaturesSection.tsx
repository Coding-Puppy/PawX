import { BarChart3, Filter, Users, Zap, Hash, Radio } from "lucide-react";

const dashboardFeatures = [
  {
    icon: BarChart3,
    title: "Tweets metrics",
    description: "Track engagement and performance in real-time",
    number: "01"
  },
  {
    icon: Filter,
    title: "Tweets filters",
    description: "Customize your feed with advanced filtering",
    number: "02"
  },
  {
    icon: Users,
    title: "KOL dataset (~10K)",
    description: "Access curated influencer data instantly",
    number: "03"
  },
  {
    icon: Zap,
    title: "Low-latency stream / webhooks",
    description: "Get updates with minimal delay",
    number: "04"
  },
  {
    icon: Hash,
    title: "Keywords engagement records",
    description: "Monitor trending topics and hashtags",
    number: "05"
  },
  {
    icon: Radio,
    title: "X's Real-time Tweet data",
    description: "Stream live tweets as they happen",
    number: "06"
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="hero-title text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            <span className="text-foreground">PAWX OFFERS</span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 bg-clip-text text-transparent">THE BEST</span>
            <br />
            <span className="text-foreground">DASHBOARD</span>
          </h2>
        </div>

        {/* Dashboard Features - Grid Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {dashboardFeatures.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-white/80 dark:bg-card/80 backdrop-blur-sm border-2 border-orange-100 dark:border-orange-900/30 hover:border-orange-200 dark:hover:border-orange-800/50 shadow-[0_4px_20px_rgba(251,146,60,0.08)] hover:shadow-[0_8px_30px_rgba(251,146,60,0.15)] transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex flex-col gap-3">
                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-primary/20 group-hover:text-primary/40 transition-colors">
                    {feature.number}
                  </span>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-orange flex items-center justify-center group-hover:scale-110 transition-transform shadow-soft">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
