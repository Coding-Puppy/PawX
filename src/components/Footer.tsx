import logo from "@/assets/logo.jpg";
import { Twitter, Github, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="PawX AI"
              className="w-10 h-10 rounded-xl object-cover"
            />
            <div>
              <span className="text-lg font-bold text-foreground">PawX AI</span>
              <p className="text-sm text-muted-foreground">
                © 2026 PawX AI. All rights reserved.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors font-semibold"
            >
              API Docs
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors font-semibold"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors font-semibold"
            >
              Privacy
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://x.com/pawx_ai"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://t.me/pawx_ai"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/abcd5251/pawx_api"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
