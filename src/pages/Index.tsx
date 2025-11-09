import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-4">
              <Sparkles className="h-4 w-4" />
              AI-Powered Open Source Assistant
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Dissolve
              </span>
              <span className="text-foreground"> Complexity</span>
              <br />
              <span className="text-foreground">Contribute with </span>
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Confidence
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Transform complex repositories into actionable insights. Navigate massive codebases, 
              understand GitHub issues, and contribute meaningfully—all guided by advanced AI.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow-primary transition-all text-lg px-8 py-6 group"
                asChild
              >
                <a href="#" className="flex items-center gap-2">
                  Try It Out
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 hover:bg-primary/5 transition-all"
                asChild
              >
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 border-y border-border/40 bg-card/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                70-80%
              </div>
              <p className="text-muted-foreground">Time saved on understanding code context</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                1-3 days
              </div>
              <p className="text-muted-foreground">Average contribution time (down from 1-2 weeks)</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                420M+
              </div>
              <p className="text-muted-foreground">GitHub projects you can navigate with ease</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Preview */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Powered by <span className="bg-gradient-primary bg-clip-text text-transparent">Intelligence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced AI models that understand both your repository and your goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all hover:shadow-glow-primary">
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity" />
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instant Analysis</h3>
              <p className="text-muted-foreground">
                Maps dependencies, identifies patterns, and highlights critical paths in seconds
              </p>
            </div>

            <div className="group relative p-8 rounded-2xl border border-border bg-card hover:border-accent/50 transition-all hover:shadow-glow-accent">
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity" />
              <Sparkles className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Suggestions</h3>
              <p className="text-muted-foreground">
                Get specific files, functions, and implementation recommendations
              </p>
            </div>

            <div className="group relative p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all hover:shadow-glow-primary">
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity" />
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-muted-foreground">
                Follow project patterns and best practices automatically
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild className="border-2">
              <Link to="/features">
                Explore All Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
