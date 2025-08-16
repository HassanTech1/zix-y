
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter
} from "@/components/ui/sidebar";
import { Icons } from "@/components/icons";
import { Home, Shield, Search, Book, Ticket, Bot, Siren, Settings } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const menuItems = [
    { href: "#", icon: <Home />, label: "Home" },
    { href: "/", icon: <Shield />, label: "Alerts", isActive: true },
    { href: "#", icon: <Search />, label: "Search" },
    { href: "#", icon: <Book />, label: "Runbook" },
    { href: "#", icon: <Ticket />, label: "Tickets" },
    { href: "#", icon: <Bot />, label: "Automation" },
    { href: "#", icon: <Siren />, label: "Escalation" },
];

const SidebarMenuItemContent = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
    <div className="flex flex-col items-center justify-center gap-1">
        {icon}
        <span className="text-xs">{label}</span>
    </div>
);

export function AppSidebar() {
  return (
    <Sidebar variant="floating">
      <SidebarContent className="justify-between">
        <SidebarMenu className="flex flex-col items-stretch gap-y-2">
            {menuItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton href={item.href} isActive={item.isActive} className="h-auto py-2 flex-col" size="lg">
                        <SidebarMenuItemContent icon={item.icon} label={item.label} />
                    </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
        </SidebarMenu>
        <SidebarFooter>
            <SidebarMenu className="flex flex-col items-stretch gap-y-2">
                <SidebarMenuItem>
                    <SidebarMenuButton href="#" className="h-auto py-2 flex-col" size="lg">
                        <SidebarMenuItemContent icon={<Settings />} label="Settings" />
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton href="#" className="h-auto p-0 flex-col rounded-full !w-10 !h-10" size="lg">
                        <Avatar className="h-10 w-10 bg-sidebar-accent">
                            <div className="flex items-center justify-center h-full w-full">
                                <Icons.logo className="h-4 w-4 text-sidebar-accent-foreground" />
                            </div>
                        </Avatar>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarFooter>
      </SidebarContent>
    </Sidebar>
  );
}
