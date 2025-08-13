import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
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

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <main className="p-4 sm:p-6 lg:p-8 space-y-6">
          <ThreatSummaryCard />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="md:col-span-2 lg:col-span-2">
              <VehicleStatusCard />
            </div>
            <div className="md:col-span-2 lg:col-span-2">
              <VehicleVitalsCard />
            </div>

            <div className="md:col-span-2 lg:col-span-4">
              <AttackDetailsCard />
            </div>
            
            <div className="md:col-span-2 lg:col-span-4">
              <MapCard />
            </div>

            <div className="md:col-span-2 lg:col-span-4">
              <VehicleDetailsCard />
            </div>
            
            <div className="md:col-span-2 lg:col-span-2">
              <ThreatsCard />
            </div>
            <div className="md:col-span-2 lg:col-span-2">
              <AiChatCard />
            </div>

            <div className="md:col-span-2 lg:col-span-2">
              <PerformanceChart />
            </div>
            <div className="md:col-span-2 lg:col-span-2">
              <QuickActionsCard />
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
