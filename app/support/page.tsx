import Link from "next/link";
import { Database, ArrowLeft, Mail, MessageCircle, Bug, HelpCircle } from "lucide-react";

export default function Support() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Database className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">SupaStats</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </nav>

      {/* Support Content */}
      <main className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Support Center</h1>
            <p className="text-xl text-muted-foreground">
              Need help with SupaStats? We&apos;re here to assist you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Support */}
            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-card-foreground mb-4">Contact Support</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If you have any problems or need assistance with SupaStats, please don&apos;t hesitate to contact us at:
              </p>
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                <p className="text-foreground font-medium mb-2">Support Email</p>
                <a 
                  href="mailto:team@expobase.dev" 
                  className="text-primary hover:text-primary/80 transition-colors font-medium text-lg"
                >
                  team@expobase.dev
                </a>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <HelpCircle className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-card-foreground mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-foreground mb-2">How do I connect my Supabase project?</h3>
                  <p className="text-muted-foreground text-sm">
                    You&apos;ll need your Supabase project URL and anon key from your project settings.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Is my data secure?</h3>
                  <p className="text-muted-foreground text-sm">
                    Yes, we use end-to-end encryption and never store your Supabase credentials permanently.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Can I monitor multiple projects?</h3>
                  <p className="text-muted-foreground text-sm">
                    Premium plans allow monitoring multiple Supabase projects from a single dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Support Categories */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">How Can We Help?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Technical Issues */}
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <div className="bg-red-500/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Bug className="h-6 w-6 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Technical Issues</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  App crashes, connection problems, or unexpected behavior? Let us know the details.
                </p>
              </div>

              {/* Feature Requests */}
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Feature Requests</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Have an idea for a new feature? We&apos;d love to hear your suggestions for improving SupaStats.
                </p>
              </div>

              {/* Account Help */}
              <div className="bg-card p-6 rounded-xl border border-border text-center">
                <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">Account Help</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Need help with your account, subscription, or billing? We&apos;re here to assist.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-muted/30 p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Get in Touch</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Whether you&apos;re experiencing technical difficulties, have questions about features, 
              or need help with your account, our support team is ready to help.
            </p>
            <div className="inline-flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-lg border border-primary/20">
              <Mail className="h-5 w-5 text-primary" />
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Email us at</p>
                <a 
                  href="mailto:team@expobase.dev" 
                  className="text-primary hover:text-primary/80 transition-colors font-semibold"
                >
                  team@expobase.dev
                </a>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              We typically respond within 24 hours during business days.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 mt-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Database className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">SupaStats</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2024 SupaStats. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 