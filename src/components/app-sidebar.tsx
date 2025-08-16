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
import { Home, Shield, Search, Book, Ticket, Bot, Siren, Settings, CircleAlert } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function AppSidebar() {
  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarContent>
        <SidebarMenu className="items-center">
          <SidebarMenuItem>
            <SidebarMenuButton href="#" className="h-auto p-3 flex flex-col items-center gap-1.5" tooltip="Home">
              <Home />
              <span className="text-xs">Home</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton href="/" isActive className="h-auto p-3 flex flex-col items-center gap-1.5" tooltip="Alerts">
              <Shield />
              <span className="text-xs">Alerts</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton href="#" className="h-auto p-3 flex flex-col items-center gap-1.5" tooltip="Search">
              <Search />
              <span className="text-xs">Search</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton href="#" className="h-auto p-3 flex flex-col items-center gap-1.5" tooltip="Runbook">
              <Book />
              <span className="text-xs">Runbook</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton href="#" className="h-auto p-3 flex flex-col items-center gap-1.5" tooltip="Tickets">
              <Ticket />
              <span className="text-xs">Tickets</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton href="#" className="h-auto p-3 flex flex-col items-center gap-1.5" tooltip="Automation">
              <Bot />
              <span className="text-xs">Automation</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton href="#" className="h-auto p-3 flex flex-col items-center gap-1.5" tooltip="Escalation">
              <Siren />
              <span className="text-xs">Escalation</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="items-center">
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton href="#" className="h-auto p-3 flex flex-col items-center gap-1.5" tooltip="Settings">
                    <Settings />
                    <span className="text-xs">Settings</span>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
        <div className="relative mt-4">
          <Avatar className="h-10 w-10 bg-red-600 text-white">
            <AvatarFallback className="bg-transparent font-bold">N</AvatarFallback>
          </Avatar>
          <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-white border-2 border-red-600" />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
