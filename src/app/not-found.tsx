import Link from "next/link";
import { Terminal, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-background to-muted/20">
      <Card className="w-full max-w-lg border-none shadow-lg bg-background/80 backdrop-blur-sm">
        <CardHeader className="pb-6">
          <div className="flex items-center space-x-3">
            <Terminal className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold tracking-tight">
              Page Not Found
            </span>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Oops! Looks like you've ventured into uncharted territory.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🔍</span>
              <p className="text-muted-foreground">
                The page you're looking for might have been moved, deleted, or
                never existed.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">💡</span>
              <p className="text-muted-foreground">
                Don't worry! You can always navigate back to safety.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-6">
          <Button variant="default" size="lg" className="w-full group" asChild>
            <Link
              href="/"
              className="flex items-center justify-center space-x-2"
            >
              <span>Return to Home</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
