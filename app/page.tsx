import Link from "next/link";
import { Database, BarChart3, Users, Folder, Shield, FileText, Apple, Smartphone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Database className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">SupaStats</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/support" className="text-muted-foreground hover:text-primary transition-colors">
              Support
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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Monitor Your{" "}
              <span className="text-primary">Supabase</span>{" "}
              Database
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A powerful mobile app to track your Supabase database performance, 
              monitor SQL queries, manage users, and explore storage buckets - all in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <Apple className="h-5 w-5" />
                Download for iOS
              </button>
              <button className="border border-border text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-muted transition-colors flex items-center justify-center gap-2">
                <Smartphone className="h-5 w-5" />
                Coming Soon on Android
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Everything You Need to Monitor Supabase
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive database monitoring and management tools
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SQL Query Monitoring */}
            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                SQL Query Analytics
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Track query performance, execution times, and identify slow queries. 
                Get detailed insights into your database operations.
              </p>
            </div>

            {/* User Management */}
            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                User Management
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Monitor user activity, track authentication events, and manage 
                user permissions across your application.
              </p>
            </div>

            {/* Table Explorer */}
            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                Table Explorer
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Browse and explore your database tables, view schema changes, 
                and monitor data growth patterns.
              </p>
            </div>

            {/* Storage Buckets */}
            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Folder className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                Storage Management
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Monitor storage bucket usage, track file uploads, and manage 
                storage policies from your mobile device.
              </p>
            </div>

            {/* Real-time Monitoring */}
            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                Real-time Alerts
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Get instant notifications for database issues, performance 
                problems, or security events.
              </p>
            </div>

            {/* Request Tracking */}
            <div className="bg-card p-8 rounded-xl border border-border hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                Request Tracking
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Monitor API requests, track usage patterns, and analyze 
                application performance metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Monitor Your Database?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of developers who trust SupaStats for their Supabase monitoring needs.
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Database className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground">SupaStats</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/support" className="text-muted-foreground hover:text-primary transition-colors">
                Support
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
