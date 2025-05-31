import Link from "next/link";
import { Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <Card className="w-full max-w-md border-dashed border-2 rounded-none shadow-none">
        <CardHeader className="border-b border-dashed pb-4">
          <div className="flex items-center space-x-2">
            <Terminal className="h-5 w-5" />
            <span className="text-sm font-mono">Oops! Page Not Found</span>
          </div>
        </CardHeader>
        <CardContent className="pt-6 pb-0 font-mono">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-muted-foreground">😕</span>
              <span>
                We couldn&apos;t find the page you&apos;re looking for.
              </span>
            </div>
            <div className="space-y-1 pl-6">
              <p className="text-3xl font-bold">404</p>
              <p className="text-muted-foreground">
                It might have been moved or deleted, or the URL may be
                incorrect.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-muted-foreground">💡</span>
              <div className="flex items-center">
                <span>
                  Try going back to the homepage or double-checking the URL.
                </span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-6 border-t border-dashed mt-6">
          <Button
            variant="outline"
            className="w-full rounded-none border-dashed"
            asChild
          >
            <Link href="/">Take me home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
