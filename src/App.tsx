import { Route } from 'wouter';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <nav className="border-b border-gray-700 bg-gray-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white">ACO Application</h1>
            <div className="flex gap-4">
              <Button variant="ghost" className="text-white">Home</Button>
              <Button variant="ghost" className="text-white">Services</Button>
              <Button variant="ghost" className="text-white">About</Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-5xl font-bold text-white">Welcome to ACO</h2>
          <p className="text-xl text-gray-300">Your Complete Business Solution Platform</p>
        </div>

        <Tabs defaultValue="overview" className="mx-auto max-w-4xl">
          <TabsList className="grid w-full grid-cols-3 bg-gray-800">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Business Intelligence</CardTitle>
                  <CardDescription className="text-gray-300">Advanced analytics and insights</CardDescription>
                </CardHeader>
                <CardContent className="text-gray-400">
                  <p>Transform your data into actionable insights with our powerful analytics tools.</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Cloud Infrastructure</CardTitle>
                  <CardDescription className="text-gray-300">Scalable and reliable</CardDescription>
                </CardHeader>
                <CardContent className="text-gray-400">
                  <p>Built on enterprise-grade cloud infrastructure for maximum reliability.</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Security First</CardTitle>
                  <CardDescription className="text-gray-300">Enterprise-grade protection</CardDescription>
                </CardHeader>
                <CardContent className="text-gray-400">
                  <p>Your data is protected with industry-leading security measures.</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">24/7 Support</CardTitle>
                  <CardDescription className="text-gray-300">Always here to help</CardDescription>
                </CardHeader>
                <CardContent className="text-gray-400">
                  <p>Our dedicated support team is available around the clock.</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="features" className="mt-6">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Platform Features</CardTitle>
                <CardDescription className="text-gray-300">Everything you need to succeed</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>Real-time data processing and analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>Automated workflow management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>Customizable dashboards and reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>API integration capabilities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span>
                    <span>Mobile-responsive design</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pricing" className="mt-6">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Starter</CardTitle>
                  <CardDescription className="text-gray-300">Perfect for small teams</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">$29</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Choose Plan</Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-blue-600 border-2">
                <CardHeader>
                  <CardTitle className="text-white">Professional</CardTitle>
                  <CardDescription className="text-gray-300">Most popular choice</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">$99</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Choose Plan</Button>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Enterprise</CardTitle>
                  <CardDescription className="text-gray-300">For large organizations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">Custom</span>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t border-gray-700 bg-gray-800/50 mt-12">
        <div className="container mx-auto px-4 py-8 text-center text-gray-400">
          <p>© 2024 ACO Application. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
