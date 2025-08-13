import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";
import { VehicleStatusCard } from "@/components/dashboard/vehicle-status-card";
import { LiveFeedCard } from "@/components/dashboard/live-feed-card";
import { QuickActionsCard } from "@/components/dashboard/quick-actions-card";
import { VehicleDetailsCard } from "@/components/dashboard/vehicle-details-card";
import { PerformanceChart } from "@/components/dashboard/performance-chart";
import { ThreatsCard } from "@/components/dashboard/threats-card";
import { ThreatSummaryCard } from "@/components/dashboard/threat-summary-card";

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <AppHeader />
        <main className="p-4 sm:p-6 lg:p-8 space-y-6">
          <ThreatSummaryCard />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div className="lg:col-span-2 xl:col-span-2">
              <VehicleStatusCard />
            </div>
            <div className="lg:col-span-1 xl:col-span-2">
              <LiveFeedCard />
            </div>
            <div className="sm:col-span-2 lg:col-span-3 xl:col-span-4">
              <ThreatsCard />
            </div>
            <div className="sm:col-span-2 lg:col-span-3 xl:col-span-2">
              <PerformanceChart />
            </div>
            <div className="lg:col-span-2 xl:col-span-1">
              <VehicleDetailsCard />
            </div>
            <div className="lg:col-span-1 xl:col-span-1">
              <QuickActionsCard />
            </div>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
