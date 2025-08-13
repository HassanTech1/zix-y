import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"
import { Globe } from "lucide-react"

function DataVisualizer() {
    return (
        <div className="flex flex-col items-center justify-center h-full bg-background text-foreground p-8">
            <div className="w-full max-w-md space-y-4 text-center">
                 <div className="relative flex items-center justify-center">
                    <Globe className="w-48 h-48 text-primary/10 animate-spin [animation-duration:20s]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-32 h-32 rounded-full bg-primary/20 animate-pulse"></div>
                    </div>
                </div>
                <h2 className="text-2xl font-bold">Real-time Data Visualization</h2>
                <p className="text-muted-foreground">
                    Monitoring global vehicle data streams.
                </p>
            </div>
        </div>
    )
}


export default function LoginPage() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-2">
       <div className="flex items-center justify-center bg-muted/30 p-8">
         <Card className="mx-auto w-full max-w-sm border-0 shadow-none sm:border sm:shadow-sm">
           <CardHeader className="space-y-2 text-center">
               <div className="inline-block mx-auto">
               <Icons.logo className="w-16 h-16 text-primary" />
               </div>
             <CardTitle className="text-2xl font-bold">Welcome to ZiaXen</CardTitle>
             <CardDescription>
               Enter your email below to login to your account
             </CardDescription>
           </CardHeader>
           <CardContent>
             <div className="space-y-4">
               <div className="space-y-2">
                 <Label htmlFor="email">Email</Label>
                 <Input
                   id="email"
                   type="email"
                   placeholder="m@example.com"
                   required
                 />
               </div>
               <div className="space-y-2">
                 <div className="flex items-center">
                   <Label htmlFor="password">Password</Label>
                   <Link
                     href="#"
                     className="ml-auto inline-block text-sm underline"
                   >
                     Forgot your password?
                   </Link>
                 </div>
                 <Input id="password" type="password" required />
               </div>
               <Button type="submit" className="w-full" asChild>
                 <Link href="/">Login</Link>
               </Button>
             </div>
           </CardContent>
         </Card>
       </div>
       <div className="hidden lg:flex items-center justify-center p-8">
         <DataVisualizer />
       </div>
     </div>
  )
}