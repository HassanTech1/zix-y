
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

export function AppSidebar() {
  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarContent>
        <div className="flex justify-center p-2 mb-4">
            <Icons.logo className="h-8 w-8 text-sidebar-foreground" />
        </div>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton href="#" className="h-10 w-10 p-0" tooltip="Home">
              <Home />
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton href="/" isActive className="h-10 w-10 p-0" tooltip="Alerts">
              <Shield />
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton href="#" className="h-10 w-10 p-0" tooltip="Search">
              <Search />
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton href="#" className="h-10 w-10 p-0" tooltip="Runbook">
              <Book />
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton href="#" className="h-10 w-10 p-0" tooltip="Tickets">
              <Ticket />
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton href="#" className="h-10 w-10 p-0" tooltip="Automation">
              <Bot />
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton href="#" className="h-10 w-10 p-0" tooltip="Escalation">
              <Siren />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton href="#" className="h-10 w-10 p-0" tooltip="Settings">
                    <Settings />
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
