'use client';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star, Users, Zap, Code, Rocket, Shield } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Hero() {
  const router = useRouter();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // ACTION_PLACEHOLDER_START
  const handlePrimaryAction = () => {
    router.push('/'); // Navigate to main conversion page
  };

  const handleSecondaryAction = () => {
    setIsVideoModalOpen(true); // Open demo video modal
  };

  const handleBadgeAction = () => {
    router.push('/'); // Navigate to features/updates page
  };
  // ACTION_PLACEHOLDER_END

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-20 size-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 size-96 bg-accent/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <button
              onClick={handleBadgeAction}
              className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary hover:bg-primary/20 transition-colors cursor-pointer"
              data-action-type="badge-link"
            >
              <Zap className="size-4 mr-2" />
              Revolutionary Testing Platform Now Live
              <ArrowRight className="ml-2 size-4" />
            </button>
          </div>

          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Next-Generation
              <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Testing Platform
              </span>
              for Modern Teams
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
              Accelerate your development cycle with AI-powered testing automation. Deploy with
              confidence using intelligent test generation and real-time monitoring.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="inline-flex items-center px-3 py-1 bg-muted/50 rounded-full text-sm text-muted-foreground">
                <Code className="size-4 mr-2" />
                Zero-Config Setup
              </div>
              <div className="inline-flex items-center px-3 py-1 bg-muted/50 rounded-full text-sm text-muted-foreground">
                <Rocket className="size-4 mr-2" />
                10x Faster Testing
              </div>
              <div className="inline-flex items-center px-3 py-1 bg-muted/50 rounded-full text-sm text-muted-foreground">
                <Shield className="size-4 mr-2" />
                Enterprise Security
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="group text-base px-8 bg-primary hover:bg-primary/90"
                onClick={handlePrimaryAction}
                data-action-type="primary-cta"
              >
                Launch Testing Suite
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group text-base px-8 border-primary/20 hover:bg-primary/5"
                onClick={handleSecondaryAction}
                data-action-type="secondary-cta"
              >
                <Play className="mr-2 size-5 transition-transform group-hover:scale-110" />
                View Live Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="size-8 rounded-full bg-gradient-to-br from-primary to-primary/60 border-2 border-background flex items-center justify-center text-xs font-bold text-background">
                    T
                  </div>
                  <div className="size-8 rounded-full bg-gradient-to-br from-accent to-accent/60 border-2 border-background flex items-center justify-center text-xs font-bold text-background">
                    W
                  </div>
                  <div className="size-8 rounded-full bg-gradient-to-br from-secondary to-secondary/60 border-2 border-background flex items-center justify-center text-xs font-bold text-background">
                    P
                  </div>
                </div>
                <span className="ml-2">
                  <Users className="inline size-4 mr-1" />
                  25,000+ engineering teams
                </span>
              </div>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-primary text-primary" />
                ))}
                <span className="ml-2">4.8/5 developer satisfaction</span>
              </div>
            </div>
          </div>

          {/* Hero Dashboard Mockup */}
          <div className="mt-16 relative">
            <div className="relative mx-auto max-w-5xl">
              <div className="rounded-2xl border bg-card p-2 shadow-2xl">
                <div className="rounded-xl bg-gradient-to-br from-muted/30 to-muted/60 aspect-video relative overflow-hidden">
                  {/* Mock Dashboard Header */}
                  <div className="absolute top-0 left-0 right-0 h-12 bg-background/80 border-b border-border/50 flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="size-3 rounded-full bg-red-400/60" />
                      <div className="size-3 rounded-full bg-yellow-400/60" />
                      <div className="size-3 rounded-full bg-green-400/60" />
                    </div>
                    <div className="ml-4 text-xs text-muted-foreground font-mono">
                      Test Website Dashboard
                    </div>
                  </div>

                  {/* Mock Content */}
                  <div className="pt-12 p-6 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="size-20 mx-auto mb-6 rounded-2xl bg-primary/20 flex items-center justify-center">
                        <div className="size-12 rounded-xl bg-primary/30 flex items-center justify-center">
                          <Zap className="size-6 text-primary" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-primary/20 rounded w-32 mx-auto" />
                        <div className="h-2 bg-muted rounded w-24 mx-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Metrics */}
              <div className="absolute -top-4 -left-4 bg-card border rounded-lg p-3 shadow-lg">
                <div className="text-xs text-muted-foreground">Test Coverage</div>
                <div className="text-lg font-bold text-primary">98.7%</div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-card border rounded-lg p-3 shadow-lg">
                <div className="text-xs text-muted-foreground">Performance</div>
                <div className="text-lg font-bold text-accent">2.1s avg</div>
              </div>

              <div className="absolute top-1/2 -right-8 bg-card border rounded-lg p-3 shadow-lg">
                <div className="text-xs text-muted-foreground">Success Rate</div>
                <div className="text-lg font-bold text-secondary">99.9%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Overlay */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border rounded-2xl p-6 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Platform Demo</h3>
              <Button variant="ghost" size="sm" onClick={() => setIsVideoModalOpen(false)}>
                ✕
              </Button>
            </div>
            <div className="aspect-video bg-muted rounded-xl flex items-center justify-center">
              <div className="text-center">
                <Play className="size-12 text-primary mb-2 mx-auto" />
                <p className="text-muted-foreground">Demo video would play here</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
