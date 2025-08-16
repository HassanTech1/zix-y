import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { User, Lock } from "lucide-react";

function WelcomeGraphic() {
  return (
    <div className="relative hidden h-full w-full flex-col justify-center overflow-hidden rounded-l-lg bg-primary p-12 text-white lg:flex">
      <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
      <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary-foreground/10"></div>
      <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-primary-foreground/10"></div>

      <div className="relative z-10">
        <h1 className="text-4xl font-bold tracking-tighter">Welcome back!</h1>
        <p className="mt-2 text-lg text-primary-foreground/80">
          You can sign in to access with your existing account.
        </p>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full h-auto text-primary-foreground/20"
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
      >
        <path
          d="M0,10 Q25,0 50,10 T100,10"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        />
      </svg>
       <div className="absolute top-8 right-8 grid grid-cols-4 gap-1.5">
        {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="h-1.5 w-1.5 rounded-full bg-primary-foreground/30"></div>
        ))}
      </div>
       <div className="absolute top-1/3 left-12 h-3 w-3 rounded-full bg-primary-foreground/30">+</div>
       <div className="absolute bottom-1/4 right-16 h-4 w-4 rounded-full border-2 border-primary-foreground/30"></div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background p-4 font-body">
      <div className="grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-lg shadow-2xl lg:grid-cols-2">
        <WelcomeGraphic />
        <div className="flex w-full flex-col items-center justify-center bg-card p-8 sm:p-12">
          <div className="w-full max-w-sm">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Sign In
            </h2>
            <div className="mt-8 space-y-6">
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Username or email"
                  className="pl-10"
                  required
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="pl-10"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  href="#"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <Button type="submit" className="w-full" asChild>
                <Link href="/">Sign In</Link>
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                New here?{" "}
                <Link
                  href="#"
                  className="font-medium text-primary hover:underline"
                >
                  Create an Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
