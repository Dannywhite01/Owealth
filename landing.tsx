import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, TrendingUp, Clock, Users, Award, Lock, CheckCircle, User, ArrowRight } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Shield className="text-primary text-2xl" />
              <span className="text-xl font-bold text-neutral-800">PlamPay</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline"
                onClick={() => window.location.href = '/api/login'}
              >
                Login
              </Button>
              <Button onClick={() => window.location.href = '/api/login'}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 mb-6">
            Secure Investment
            <span className="text-primary block">Platform</span>
          </h1>
          <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
            Start your investment journey with our trusted platform. Choose from flexible plans 
            and earn guaranteed returns while completing daily tasks for bonus rewards.
          </p>
          
          {/* Enhanced CTA Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200 max-w-md mx-auto mb-8">
            <h3 className="text-2xl font-bold text-neutral-800 mb-4">Join PlamPay Today</h3>
            <p className="text-neutral-600 mb-6">
              Create your account in seconds and start earning with our secure investment platform.
            </p>
            <Button 
              size="lg" 
              className="w-full mb-4 text-lg py-4"
              onClick={() => window.location.href = '/api/login'}
            >
              Create Free Account
            </Button>
            <div className="text-center">
              <p className="text-sm text-neutral-500 mb-2">Already have an account?</p>
              <Button 
                variant="outline"
                className="w-full"
                onClick={() => window.location.href = '/api/login'}
              >
                Sign In Here
              </Button>
            </div>
            <div className="mt-4 pt-4 border-t border-neutral-100">
              <div className="flex items-center justify-center space-x-2 text-sm text-neutral-500">
                <Shield className="w-4 h-4" />
                <span>Secure • Fast • Trusted</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-neutral-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>✓ No hidden fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>✓ Instant registration</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>✓ Guaranteed returns</span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle>High Returns</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-600">
                Earn up to 25% returns on your investments with our flexible 1-week and 3-week plans.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Lock className="w-12 h-12 text-secondary mx-auto mb-4" />
              <CardTitle>Secure Platform</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-600">
                Your investments are protected with bank-grade security and transparent processes.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Clock className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <CardTitle>Flexible Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-600">
                Choose between 1-week (15% return) or 3-week (25% return) investment plans.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Award className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <CardTitle>Daily Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-600">
                Complete simple daily tasks and earn bonus rewards on top of your investment returns.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <CardTitle>Referral Program</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-600">
                Invite friends and earn additional bonuses for every successful referral.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Shield className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <CardTitle>24/7 Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-600">
                Our dedicated support team is available around the clock to assist you.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Investment Plans */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-neutral-800 mb-8">Investment Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-primary">
              <CardHeader className="bg-primary text-white rounded-t-lg">
                <CardTitle className="text-2xl">1-Week Plan</CardTitle>
                <p className="text-primary-foreground/80">Quick Returns</p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-4">15% Return</div>
                <ul className="space-y-2 text-neutral-600">
                  <li>• Minimum investment: ₦1,000</li>
                  <li>• 7-day lock period</li>
                  <li>• Guaranteed 15% return</li>
                  <li>• Fast withdrawal after maturity</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary">
              <CardHeader className="bg-secondary text-white rounded-t-lg">
                <CardTitle className="text-2xl">3-Week Plan</CardTitle>
                <p className="text-secondary-foreground/80">Higher Returns</p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-secondary mb-4">25% Return</div>
                <ul className="space-y-2 text-neutral-600">
                  <li>• Minimum investment: ₦2,000</li>
                  <li>• 21-day lock period</li>
                  <li>• Guaranteed 25% return</li>
                  <li>• Maximum profit potential</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Registration Process */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200 mb-16">
          <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">Quick & Easy Registration</h2>
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User className="w-6 h-6 text-primary" />
                  <span className="text-lg font-medium">One Click</span>
                </div>
                <ArrowRight className="w-5 h-5 text-neutral-400" />
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-lg font-medium">Account Ready</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-neutral-800">No Forms to Fill</h4>
                  <p className="text-neutral-600">Login with your existing online account - no lengthy registration forms</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-neutral-800">Instant Access</h4>
                  <p className="text-neutral-600">Start investing immediately after login - no waiting for verification</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-neutral-800">Secure Platform</h4>
                  <p className="text-neutral-600">Your account is protected with enterprise-grade security</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-neutral-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Sign Up</h3>
              <p className="text-neutral-600">Create your free account instantly using your existing credentials. No paperwork required.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Invest</h3>
              <p className="text-neutral-600">Choose your investment plan and make a secure deposit to our verified bank account.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-neutral-800 mb-2">Earn</h3>
              <p className="text-neutral-600">Watch your investment grow and complete daily tasks for bonus rewards.</p>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Investing?</h2>
          <p className="text-lg mb-6 text-blue-100">
            Join thousands of satisfied investors who trust PlamPay with their financial growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button 
              variant="secondary" 
              size="lg" 
              className="px-8 py-4 text-lg flex-1"
              onClick={() => window.location.href = '/api/login'}
            >
              Create Account
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg flex-1 bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={() => window.location.href = '/api/login'}
            >
              Sign In
            </Button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            🔒 Both options use the same secure login system
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-neutral-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="text-primary" />
            <span className="text-xl font-bold">PlamPay</span>
          </div>
          <p className="text-neutral-400">
            © 2024 PlamPay Investment Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
      }
            
