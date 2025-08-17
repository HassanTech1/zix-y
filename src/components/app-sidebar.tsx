
"use client"
import React from "react";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarHeader,
  SidebarTitle,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  useSidebar,
} from "@/components/ui/sidebar";
import { Icons } from "@/components/icons";
import { Home, Shield, Search, Book, Ticket, Bot, Siren, Settings, LayoutGrid, FileText, Wallet, Bell, MessageSquare, Plus, ChevronRight, ChevronDown, ChevronsRightLeft } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";


const SidebarHeaderContent = () => {
  const { state, toggleSidebar } = useSidebar();
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
      </div>
       <Button variant="ghost" size="icon" className="h-7 w-7 text-sidebar-foreground/70 hover:text-sidebar-foreground" onClick={toggleSidebar}>
        <ChevronRight className="group-data-[state=expanded]:rotate-180 transition-transform"/>
       </Button>
    </div>
  )
}

const SidebarProfile = () => {
  const { state } = useSidebar();
  if (state === 'collapsed') return (
    <div className="p-4">
       <Avatar className="h-10 w-10 mx-auto">
          <AvatarImage src="https://placehold.co/100x100.png" alt="Andrew Smith" data-ai-hint="man portrait"/>
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
    </div>
  );

  return (
    <div className="p-4 flex items-center gap-3">
       <Avatar className="h-10 w-10">
          <AvatarImage src="https://placehold.co/100x100.png" alt="Andrew Smith" data-ai-hint="man portrait"/>
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
      <div>
        <p className="text-sm font-semibold text-sidebar-foreground">Andrew Smith</p>
        <p className="text-xs text-sidebar-foreground/70">PRODUCT DESIGNER</p>
      </div>
    </div>
  )
}

const SubMenu = () => {
    const { state } = useSidebar();
    const [isOpen, setIsOpen] = React.useState(true);
    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
            <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip="Dashboard" isActive={true} className="justify-between w-full">
                    <div className="flex items-center gap-2">
                        <LayoutGrid />
                        <span>Dashboard</span>
                    </div>
                    {state === 'expanded' && <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />}
                </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
                <SidebarMenu isSubmenu={true}>
                    <SidebarMenuItem>
                        <SidebarMenuButton href="#" size="sm" className="w-full justify-start">Activity</SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton href="#" size="sm" className="w-full justify-start">Traffic</SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton href="#" size="sm" className="w-full justify-start" isActive={true}>Statistic</SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </CollapsibleContent>
        </Collapsible>
    )
}

const Messages = () => {
  const { state } = useSidebar();

  const messages = [
    { name: "Erik Gunsel", avatar: "https://placehold.co/32x32.png", hint: "man portrait" },
    { name: "Emily Smith", avatar: "https://placehold.co/32x32.png", hint: "woman portrait" },
    { name: "Arthur Adek", avatar: "https://placehold.co/32x32.png", hint: "person portrait" },
  ];
  
  if (state === 'collapsed') {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>MESSAGES</SidebarGroupLabel>
            <SidebarGroupContent>
                 <SidebarMenu>
                    {messages.map(message => (
                        <SidebarMenuItem key={message.name}>
                        <SidebarMenuButton tooltip={message.name}>
                            <Avatar className="h-6 w-6">
                            <AvatarImage src={message.avatar} alt={message.name} data-ai-hint={message.hint}/>
                            <AvatarFallback>{message.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                        </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
  }

  return (
    <SidebarGroup>
      <div className="flex items-center justify-between">
        <SidebarGroupLabel>MESSAGES</SidebarGroupLabel>
        <Button variant="ghost" size="icon" className="h-6 w-6 group-data-[state=collapsed]:hidden">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <SidebarGroupContent>
        <SidebarMenu>
          {messages.map(message => (
            <SidebarMenuItem key={message.name}>
              <SidebarMenuButton tooltip={message.name}>
                <Avatar className="h-6 w-6">
                  <AvatarImage src={message.avatar} alt={message.name} data-ai-hint={message.hint}/>
                  <AvatarFallback>{message.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span>{message.name}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}

const CtaCard = () => {
    const { state } = useSidebar();
    if (state === 'collapsed') {
      return (
        <div className="p-4">
          <Button size="icon" className="w-10 h-10 bg-primary text-primary-foreground hover:bg-primary/90"><Plus className="h-5 w-5"/></Button>
        </div>
      )
    }

    return (
        <div className="bg-primary/10 text-primary-foreground p-4 rounded-lg m-2 text-center">
            <p className="font-semibold">Let's start!</p>
            <p className="text-xs text-primary-foreground/80 mt-1 mb-3">Creating or adding new tasks couldn't be easier</p>
            <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90"><Plus className="h-4 w-4 mr-1"/>Add New Task</Button>
        </div>
    )
}

export function AppSidebar() {
  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarHeader>
        <SidebarHeaderContent />
        <SidebarProfile />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>MAIN</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SubMenu />
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Invoices">
                  <FileText />
                  <span>Invoices</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
               <SidebarMenuItem>
                <SidebarMenuButton tooltip="Notification">
                  <Bell />
                  <span>Notification</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="AI Agent">
                  <Bot />
                  <span>AI Agent</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Messages />
      </SidebarContent>
      <SidebarFooter>
        <CtaCard />
      </SidebarFooter>
    </Sidebar>
  );
}
