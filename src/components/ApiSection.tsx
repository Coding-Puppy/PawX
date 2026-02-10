import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const apiExamples = [
  {
    label: "Profile & historical tweets",
    color: "bg-green-500",
    copyText:
      'curl -i \\\n  -H "X-API-Key: YOUR-API-KEY" \\\n  "https://pawx.ai/api/v1/twitterUsers/info?screenName=elonmusk,VitalikButerin&userId=2259434528,902926941413453824"',
    code: (
      <>
        <span className="text-primary">curl</span>
        <span className="text-muted-foreground"> -i </span>
        <span className="text-muted-foreground"> \</span>
        <br />
        <span className="text-muted-foreground">  -H </span>
        <span className="text-green-600">"X-API-Key: YOUR-API-KEY"</span>
        <span className="text-muted-foreground"> \</span>
        <br />
        <span className="text-green-600">"https://pawx.ai/api/v1/twitterUsers/info?</span>
        <br />
        <span className="text-green-600">screenName=elonmusk,VitalikButerin&amp;</span>
        <br />
        <span className="text-green-600">userId=2259434528,902926941413453824"</span>
      </>
    ),
  },
  {
    label: "Keyword Monitor",
    color: "bg-blue-500",
    copyText:
      'curl -X POST "https://pawx.ai/api/v1/keywordMonitors" \\\n  -H "Content-Type: application/json" \\\n  -H "X-API-Key: YOUR-API-KEY" \\\n  -d \'{"name":"uxlink tweets","keywords":["@uxlink"]}\'',
    code: (
      <>
        <span className="text-primary">curl</span>
        <span className="text-muted-foreground"> -X POST </span>
        <span className="text-green-600">"https://pawx.ai/api/v1/keywordMonitors"</span>
        <span className="text-muted-foreground"> \</span>
        <br />
        <span className="text-muted-foreground">  -H </span>
        <span className="text-green-600">"Content-Type: application/json"</span>
        <span className="text-muted-foreground"> \</span>
        <br />
        <span className="text-muted-foreground">  -H </span>
        <span className="text-green-600">"X-API-Key: YOUR-API-KEY"</span>
        <span className="text-muted-foreground"> \</span>
        <br />
        <span className="text-muted-foreground">  -d </span>
        <span className="text-yellow-600">{'{"name":"uxlink tweets","keywords":["@uxlink"]}\''}</span>
      </>
    ),
  },
  {
    label: "Associated Users",
    color: "bg-purple-500",
    copyText:
      'curl -X GET \\\n  "https://pawx.ai/api/v1/keywordMonitors/uxlink-tweets/users" \\\n  -H "X-API-Key: YOUR-API-KEY"',
    code: (
      <>
        <span className="text-primary">curl</span>
        <span className="text-muted-foreground"> -X GET </span>
        <span className="text-muted-foreground"> \</span>
        <br />
        <span className="text-green-600">
          "https://pawx.ai/api/v1/keywordMonitors/uxlink-tweets/users"
        </span>
        <span className="text-muted-foreground"> \</span>
        <br />
        <span className="text-muted-foreground">  -H </span>
        <span className="text-green-600">"X-API-Key: YOUR-API-KEY"</span>
      </>
    ),
  },
  {
    label: "Matched Tweets",
    color: "bg-pink-500",
    copyText:
      'curl -X GET \\\n  "https://pawx.ai/api/v1/keywordMonitors/uxlink-tweets/tweets?createdAfter=2025-01-01T00:00:00Z&createdBefore=2025-08-11T12:22:06.000Z&limit=20" \\\n  -H "X-API-Key: YOUR-API-KEY"',
    code: (
      <>
        <span className="text-primary">curl</span>
        <span className="text-muted-foreground"> -X GET </span>
        <span className="text-muted-foreground"> \</span>
        <br />
        <span className="text-green-600">"https://pawx.ai/api/v1/keywordMonitors/uxlink-tweets/tweets?</span>
        <br />
        <span className="text-green-600">createdAfter=2025-01-01T00:00:00Z&amp;</span>
        <br />
        <span className="text-green-600">createdBefore=2025-08-11T12:22:06.000Z&amp;</span>
        <br />
        <span className="text-green-600">limit=20"</span>
        <span className="text-muted-foreground"> \</span>
        <br />
        <span className="text-muted-foreground">  -H </span>
        <span className="text-green-600">"X-API-Key: YOUR-API-KEY"</span>
      </>
    ),
  },
  {
    label: "Find user's tweet",
    color: "bg-yellow-500",
    copyText:
      'curl -i \\\n  -H "X-API-Key: YOUR-API-KEY" \\\n  "https://pawx.ai/api/v1/twitterUsers/44196397/tweet-timestamps?createdAfter=2025-01-01T00:00:00Z&createdBefore=2025-06-21T23:59:59Z&limit=200"',
    code: (
      <>
        <span className="text-primary">curl</span>
        <span className="text-muted-foreground"> -i </span>
        <span className="text-muted-foreground"> \</span>
        <br />
        <span className="text-muted-foreground">  -H </span>
        <span className="text-green-600">"X-API-Key: YOUR-API-KEY"</span>
        <span className="text-muted-foreground"> \</span>
        <br />
        <span className="text-green-600">"https://pawx.ai/api/v1/twitterUsers/44196397/tweet-timestamps?</span>
        <br />
        <span className="text-green-600">createdAfter=2025-01-01T00:00:00Z&amp;</span>
        <br />
        <span className="text-green-600">createdBefore=2025-06-21T23:59:59Z&amp;</span>
        <br />
        <span className="text-green-600">limit=200"</span>
      </>
    ),
  },
  {
    label: "Referencing Tweets",
    color: "bg-orange-500",
    copyText:
      'curl -i \\\n  -H "X-API-Key: YOUR-API-KEY" \\\n  "https://pawx.ai/api/v1/twitterUsers/tweets/1943602916683592131/referencing-tweets?createdAfter=2025-01-01T00:00:00Z&createdBefore=2025-08-21T23:59:59Z&minKolFollowers=3&limit=200"',
    code: (
      <>
        <span className="text-primary">curl</span>
        <span className="text-muted-foreground"> -i </span>
        <span className="text-muted-foreground"> \</span>
        <br />
        <span className="text-muted-foreground">  -H </span>
        <span className="text-green-600">"X-API-Key: YOUR-API-KEY"</span>
        <span className="text-muted-foreground"> \</span>
        <br />
        <span className="text-green-600">
          "https://pawx.ai/api/v1/twitterUsers/tweets/1943602916683592131/referencing-tweets?
        </span>
        <br />
        <span className="text-green-600">createdAfter=2025-01-01T00:00:00Z&amp;</span>
        <br />
        <span className="text-green-600">createdBefore=2025-08-21T23:59:59Z&amp;</span>
        <br />
        <span className="text-green-600">minKolFollowers=3&amp;</span>
        <br />
        <span className="text-green-600">limit=200"</span>
      </>
    ),
  },
  {
    label: "Tweets Engagement",
    color: "bg-red-500",
    copyText:
      'curl -i \\\n  -H "X-API-Key: YOUR-API-KEY" \\\n  "https://pawx.ai/api/v1/twitterUsers/tweets/1921467596810915939/referencing-counts?minKolFollowers=1"',
    code: (
      <>
        <span className="text-primary">curl</span>
        <span className="text-muted-foreground"> -i </span>
        <span className="text-muted-foreground"> \</span>
        <br />
        <span className="text-muted-foreground">  -H </span>
        <span className="text-green-600">"X-API-Key: YOUR-API-KEY"</span>
        <span className="text-muted-foreground"> \</span>
        <br />
        <span className="text-green-600">
          "https://pawx.ai/api/v1/twitterUsers/tweets/1921467596810915939/referencing-counts?
        </span>
        <br />
        <span className="text-green-600">minKolFollowers=1"</span>
      </>
    ),
  },
];

const ApiSection = () => {
  const [copied, setCopied] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExample = apiExamples[activeIndex];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeExample.copyText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="api" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 items-start">
          {/* Left - Text */}
          <div>
            <span className="px-4 py-2 bg-primary/10 rounded-full text-sm font-bold text-primary mb-4 inline-block">
              DATA API
            </span>
            <h2 className="hero-title text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              <span className="gradient-text">DATA API</span>
              <br />
              SERVICE
            </h2>
            <p className="text-xl text-muted-foreground mb-8 font-semibold">
              Compared to building in-house, our API offers more complete and real-time data at lower cost and with far less engineering overhead.
            </p>

            {/* WebSocket Events */}
            <div className="flex flex-wrap gap-4 mb-8">
              {apiExamples.map((item, index) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`px-5 py-3 rounded-xl text-base font-semibold flex items-center gap-3 shadow-soft transition-all ${
                    activeIndex === index
                      ? "bg-primary/10 text-foreground"
                      : "bg-card text-foreground hover:bg-primary/5"
                  }`}
                >
                  <span className={`w-3 h-3 rounded-full ${item.color}`} />
                  {item.label}
                </button>
              ))}
            </div>

            <Button variant="hero" size="lg" asChild>
              <a href="https://github.com/abcd5251/pawx_api" target="_blank" rel="noreferrer">
                Read API Docs
              </a>
            </Button>
          </div>

          {/* Right - Code Block */}
          <div className="relative mt-[180px]">
            <div className="glass-card overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-muted/30">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              
              {/* Code */}
              <pre className="p-5 overflow-x-auto h-[280px] flex items-start pt-8">
                <code className="text-sm font-mono">{activeExample.code}</code>
              </pre>
            </div>

            {/* Floating decoration */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-orange rounded-2xl rotate-12 opacity-20 blur-sm" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiSection;
