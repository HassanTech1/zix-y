import { Bell, LayoutGrid, PlusCircle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { UserNav } from "@/components/user-nav";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const notifications = [
    {
        title: "New threat detected",
        description: "A critical vulnerability has been found in the CAN bus.",
        avatar: "https://placehold.co/100x100.png",
        avatarFallback: "TH",
        read: false,
    },
    {
        title: "System Update",
        description: "Vehicle XA-7 has been updated to the latest software version.",
        avatar: "https://placehold.co/100x100.png",
        avatarFallback: "SU",
        read: true,
    },
    {
        title: "Maintenance Reminder",
        description: "Scheduled maintenance for Vehicle XA-7 is due next week.",
        avatar: "https://placehold.co/100x100.png",
        avatarFallback: "MR",
        read: true,
    }
]

export function AppHeader() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-card px-4 lg:h-[60px] lg:px-6 sticky top-0 z-10">
      <SidebarTrigger className="md:hidden"/>
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search vehicles, alerts, or systems..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
      <Button variant="ghost" size="icon">
        <LayoutGrid className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon">
        <PlusCircle className="h-5 w-5" />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80" align="end">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="p-1">
                {notifications.map((notification, index) => (
                    <DropdownMenuItem key={index} className="flex items-start gap-2.5 p-2 rounded-md transition-colors hover:bg-muted/50 cursor-pointer">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={notification.avatar} alt={notification.title} data-ai-hint="abstract geometric" />
                            <AvatarFallback>{notification.avatarFallback}</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-0.5">
                            <p className="font-medium text-sm">{notification.title}</p>
                            <p className="text-xs text-muted-foreground">{notification.description}</p>
                        </div>
                        {!notification.read && <div className="ml-auto mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" />}
                    </DropdownMenuItem>
                ))}
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="py-2 justify-center text-sm font-medium">
                View all notifications
            </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ThemeToggle />
      <UserNav />
    </header>
  );
}
