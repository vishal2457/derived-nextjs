"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { useState } from "react";
import { authClient, signIn } from "@/lib/auth/auth-client";
import { cn } from "@/lib/utils";
import { Loader2, LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AuthCard({
  title,
  description,
  mode = "sign-in",
}: {
  title: string;
  description: string;
  mode?: "sign-in" | "sign-up";
}) {
  const [githubLoading, setGithubLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [discordLoading, setDiscordLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    if (!email || !password) return;

    setIsLoading(true);
    setErrorMessage("");
    if (mode === "sign-in") {
      authClient.signIn.email(
        {
          email,
          password,
          callbackURL: "/dashboard",
        },
        {
          onError: (ctx) => {
            setErrorMessage(ctx.error.message);
            setIsLoading(false);
          },
          onSuccess: async () => {
            router.push("/dashboard");
          },
        }
      );
    } else {
      authClient.signUp.email(
        {
          name: "John Doe",
          email,
          password,
          callbackURL: "/dashboard",
        },
        {
          onError: (ctx) => {
            setErrorMessage(ctx.error.message);
            setIsLoading(false);
          },
          onSuccess: async () => {
            router.push("/dashboard");
          },
        }
      );
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="max-w-md w-full rounded-none border-dashed">
        <CardHeader>
          <CardTitle className="text-lg md:text-xl">{title}</CardTitle>
          <CardDescription className="text-xs md:text-sm">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5 my-3">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="hello@example.com"
                  readOnly={isLoading}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password here"
                  readOnly={isLoading}
                  required
                />
              </div>
              {errorMessage && (
                <p className="text-red-500 text-sm">{errorMessage}</p>
              )}
              <Button
                type="submit"
                className="mt-2 w-full"
                size="lg"
                disabled={isLoading}
              >
                {isLoading && <LoaderCircle className="animate-spin" />}
                {mode === "sign-in" ? "Sign in" : "Sign up"}
              </Button>
            </div>
          </form>

          <div className="grid gap-4">
            <div
              className={cn(
                "w-full gap-2 flex items-center",
                "justify-between flex-col"
              )}
            >
              <SignInButton
                title={`${
                  mode === "sign-in" ? "Sign in" : "Sign up"
                } with Github`}
                provider="github"
                loading={githubLoading}
                setLoading={setGithubLoading}
                callbackURL="/dashboard"
              />
              <SignInButton
                title={`${
                  mode === "sign-in" ? "Sign in" : "Sign up"
                } with Google`}
                provider="google"
                loading={googleLoading}
                setLoading={setGoogleLoading}
                callbackURL="/dashboard"
              />
              <SignInButton
                title={`${
                  mode === "sign-in" ? "Sign in" : "Sign up"
                } with Discord`}
                provider="discord"
                loading={discordLoading}
                setLoading={setDiscordLoading}
                callbackURL="/dashboard"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center border-t border-dashed pt-4">
          <p className="text-sm text-muted-foreground">
            {mode === "sign-in" ? (
              <>
                Don&apos;t have an account?{" "}
                <Link
                  href="/sign-up"
                  className="text-primary font-medium hover:underline"
                >
                  Sign up
                </Link>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Link
                  href="/sign-in"
                  className="text-primary font-medium hover:underline"
                >
                  Sign in
                </Link>
              </>
            )}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

const SignInButton = ({
  title,
  provider,
  loading,
  setLoading,
  callbackURL,
  icon,
}: {
  title: string;
  provider: "github" | "google" | "discord";
  loading: boolean;
  setLoading: (loading: boolean) => void;
  callbackURL: string;
  icon?: React.ReactNode;
}) => {
  return (
    <Button
      variant="outline"
      size="lg"
      className={cn("w-full gap-2 border-dashed")}
      disabled={loading}
      onClick={async () => {
        await signIn.social(
          {
            provider: provider,
            callbackURL: callbackURL,
          },
          {
            onRequest: (ctx) => {
              setLoading(true);
            },
          }
        );
      }}
    >
      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : icon}
      {title}
    </Button>
  );
};
