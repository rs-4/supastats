import Link from "next/link";
import { Database, ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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
            <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </nav>

      {/* Privacy Policy Content */}
      <main className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Welcome to SupaStats (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting your privacy and ensuring 
                  the security of your personal information. This Privacy Policy explains how we collect, use, disclose, 
                  and safeguard your information when you use our mobile application and related services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-2">2.1 Information You Provide</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Supabase project credentials and API keys</li>
                      <li>Account registration information</li>
                      <li>Settings and preferences</li>
                      <li>Support communications</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-2">2.2 Automatically Collected Information</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Device information and identifiers</li>
                      <li>Usage analytics and app performance data</li>
                      <li>Log files and error reports</li>
                      <li>Network information</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide and maintain our mobile application services</li>
                  <li>Connect to and monitor your Supabase databases</li>
                  <li>Analyze database performance and generate insights</li>
                  <li>Improve our app functionality and user experience</li>
                  <li>Send important updates and security notifications</li>
                  <li>Provide customer support and technical assistance</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We implement industry-standard security measures to protect your information:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>End-to-end encryption for sensitive data transmission</li>
                  <li>Secure storage of API keys and credentials</li>
                  <li>Regular security audits and updates</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                  <li>Secure data centers with physical and digital protections</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your 
                  information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations or court orders</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>In connection with a business transfer or merger</li>
                  <li>With trusted service providers who assist in our operations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights and Choices</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Access and review your personal information</li>
                  <li>Correct inaccurate or incomplete information</li>
                  <li>Delete your account and associated data</li>
                  <li>Opt-out of non-essential communications</li>
                  <li>Export your data in a portable format</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information for as long as necessary to provide our services and fulfill 
                  the purposes outlined in this Privacy Policy. When you delete your account, we will remove your 
                  personal information within 30 days, except where we are required to retain certain information 
                  for legal or regulatory purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. International Data Transfers</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. We ensure 
                  that such transfers comply with applicable data protection laws and implement appropriate safeguards 
                  to protect your information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Children&apos;s Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not directed to children under 13 years of age. We do not knowingly collect 
                  personal information from children under 13. If we become aware that we have collected personal 
                  information from a child under 13, we will take steps to delete such information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes 
                  by posting the new Privacy Policy in the app and updating the &quot;Last updated&quot; date. Your continued 
                  use of our services after any changes indicates your acceptance of the updated Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg mt-4">
                  <p className="text-foreground font-medium">SupaStats Privacy Team</p>
                  <p className="text-muted-foreground">Email: support@supastatsapp.com</p>
                  <p className="text-muted-foreground">Address: [Your Company Address]</p>
                </div>
              </section>
            </div>
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