import Link from "next/link";
import { Database, ArrowLeft } from "lucide-react";

export default function TermsAndConditions() {
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
          </div>
        </div>
      </nav>

      {/* Terms & Conditions Content */}
      <main className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-foreground mb-8">Terms & Conditions</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By downloading, installing, or using the SupaStats mobile application (&quot;App&quot;), you agree to be bound 
                  by these Terms and Conditions (&quot;Terms&quot;). If you do not agree to these Terms, please do not use our App. 
                  These Terms constitute a legal agreement between you and SupaStats (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  SupaStats is a mobile application that provides monitoring and analytics services for Supabase databases. 
                  Our services include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Real-time database performance monitoring</li>
                  <li>SQL query analysis and optimization suggestions</li>
                  <li>User management and authentication tracking</li>
                  <li>Storage bucket monitoring and management</li>
                  <li>Request tracking and API analytics</li>
                  <li>Custom alerts and notifications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Accounts and Registration</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-2">3.1 Account Creation</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To use our services, you must create an account and provide accurate, complete, and current 
                      information. You are responsible for maintaining the confidentiality of your account credentials.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-2">3.2 Account Security</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      You are solely responsible for all activities that occur under your account. You must immediately 
                      notify us of any unauthorized use of your account or any other breach of security.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Acceptable Use Policy</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree to use our services only for lawful purposes and in accordance with these Terms. 
                  You agree not to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Use the App for any illegal or unauthorized purpose</li>
                  <li>Attempt to gain unauthorized access to our systems or other users&apos; accounts</li>
                  <li>Interfere with or disrupt the App&apos;s functionality or servers</li>
                  <li>Upload or transmit malicious code, viruses, or harmful content</li>
                  <li>Reverse engineer, decompile, or disassemble the App</li>
                  <li>Use the App to monitor databases you don&apos;t own or have permission to access</li>
                  <li>Share your account credentials with third parties</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Supabase Integration</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-2">5.1 Third-Party Service</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our App integrates with Supabase, a third-party database service. You must have valid Supabase 
                      credentials and comply with Supabase&apos;s terms of service. We are not responsible for Supabase&apos;s 
                      availability, performance, or policies.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-2">5.2 API Usage</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Your use of our App may result in API calls to your Supabase project. You are responsible for 
                      any charges incurred from Supabase based on your usage patterns.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Subscription and Payment Terms</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-2">6.1 Free and Paid Services</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We offer both free and paid subscription tiers. Paid subscriptions provide access to premium 
                      features and enhanced monitoring capabilities.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-2">6.2 Billing and Renewals</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Subscription fees are billed in advance on a recurring basis. Subscriptions automatically renew 
                      unless cancelled before the renewal date. All fees are non-refundable except as required by law.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Intellectual Property Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The App and all related content, features, and functionality are owned by SupaStats and are protected 
                  by intellectual property laws. You are granted a limited, non-exclusive, non-transferable license to 
                  use the App for its intended purpose.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You retain ownership of your data and content. By using our services, you grant us a limited license 
                  to access and process your data solely to provide our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Privacy and Data Protection</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your privacy is important to us. Our collection and use of your information is governed by our 
                  Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy 
                  to understand our practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Disclaimers and Limitations of Liability</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-2">9.1 Service Availability</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We strive to maintain high service availability but cannot guarantee uninterrupted access. 
                      The App is provided &quot;as is&quot; without warranties of any kind.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-2">9.2 Limitation of Liability</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, 
                      special, consequential, or punitive damages arising from your use of the App.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Termination</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Either party may terminate this agreement at any time:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>You may delete your account and stop using the App</li>
                  <li>We may suspend or terminate your access for violations of these Terms</li>
                  <li>We may discontinue the service with reasonable notice</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Upon termination, your right to use the App ceases immediately, and we may delete your account 
                  and data in accordance with our Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">11. Updates and Modifications</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of material changes 
                  through the App or by email. Your continued use of the App after changes become effective constitutes 
                  acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">12. Governing Law and Dispute Resolution</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms are governed by and construed in accordance with the laws of [Your Jurisdiction]. 
                  Any disputes arising from these Terms or your use of the App shall be resolved through binding 
                  arbitration or in the courts of [Your Jurisdiction].
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg mt-4">
                  <p className="text-foreground font-medium">SupaStats Support Team</p>
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
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
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