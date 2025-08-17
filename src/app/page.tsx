
"use client";

import { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import { SidebarProvider, Sidebar, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";
import { VehicleStatusCard } from "@/components/dashboard/vehicle-status-card";
import { VehicleVitalsCard } from "@/components/dashboard/vehicle-vitals-card";
import { QuickActionsCard } from "@/components/dashboard/quick-actions-card";
import { VehicleDetailsCard } from "@/components/dashboard/vehicle-details-card";
import { PerformanceChart } from "@/components/dashboard/performance-chart";
import { ThreatsCard } from "@/components/dashboard/threats-card";
import { ThreatSummaryCard } from "@/components/dashboard/threat-summary-card";
import { MapCard } from "@/components/dashboard/map-card";
import { AiChatCard } from "@/components/dashboard/ai-chat-card";
import { AttackDetailsCard } from "@/components/dashboard/attack-details-card";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function DashboardPage() {
  const [layouts, setLayouts] = useState({
    lg: [
      { i: "threat-summary", x: 0, y: 0, w: 12, h: 3 },
      { i: "vehicle-status", x: 0, y: 3, w: 3, h: 7 },
      { i: "vehicle-vitals", x: 3, y: 3, w: 3, h: 7 },
      { i: "threats", x: 6, y: 3, w: 6, h: 7 },
      { i: "attack-details", x: 0, y: 10, w: 6, h: 8 },
      { i: "ai-chat", x: 6, y: 10, w: 6, h: 8 },
      { i: "map", x: 0, y: 18, w: 12, h: 12 },
      { i: "vehicle-details", x: 0, y: 30, w: 12, h: 10 },
      { i: "performance-chart", x: 0, y: 40, w: 6, h: 9 },
      { i: "quick-actions", x: 6, y: 40, w: 6, h: 9 },
    ],
  });

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <main className="p-4 sm:p-6 lg:p-8">
          <ResponsiveGridLayout
            className="layout"
            layouts={layouts}
            onLayoutChange={(layout, newLayouts) => setLayouts(newLayouts)}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            rowHeight={30}
            draggableHandle=".drag-handle"
          >
            <div key="threat-summary" className="overflow-hidden">
                <ThreatSummaryCard />
            </div>
            <div key="vehicle-status" className="overflow-hidden">
                <VehicleStatusCard />
            </div>
            <div key="vehicle-vitals" className="overflow-hidden">
                <VehicleVitalsCard />
            </div>
            <div key="attack-details" className="overflow-hidden">
                <AttackDetailsCard />
            </div>
            <div key="map" className="overflow-hidden">
                <MapCard />
            </div>
            <div key="vehicle-details" className="overflow-hidden">
                <VehicleDetailsCard />
            </div>
            <div key="performance-chart" className="overflow-hidden">
                <PerformanceChart />
            </div>
            <div key="quick-actions" className="overflow-hidden">
                <QuickActionsCard />
            </div>
            <div key="threats" className="overflow-hidden">
                <ThreatsCard />
            </div>
            <div key="ai-chat" className="overflow-hidden">
                <AiChatCard />
            </div>
          </ResponsiveGridLayout>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
