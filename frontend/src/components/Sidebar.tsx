import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  FileText, 
  BarChart3, 
  Users, 
  FileCheck, 
  Settings,
  ClipboardList,
  TrendingUp,
  Upload
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Performance Reports", href: "/dashboard/reports", icon: FileText },
  { name: "Review & Approval", href: "/dashboard/review", icon: FileCheck },
  { name: "Evidence Upload", href: "/dashboard/evidence", icon: Upload },
  { name: "Audit Trail", href: "/dashboard/audit", icon: TrendingUp },
  { name: "Programmes", href: "/dashboard/programmes", icon: ClipboardList, disabled: true },
  { name: "KPI Analytics", href: "/dashboard/analytics", icon: BarChart3, disabled: true },
  { name: "Users & Roles", href: "/dashboard/users", icon: Users, disabled: true },
  { name: "Settings", href: "/dashboard/settings", icon: Settings, disabled: true },
];

interface SidebarProps {
  onNavigate?: () => void;
}

export default function Sidebar({ onNavigate }: SidebarProps) {
  const location = useLocation();

  return (
    <div className="flex h-screen w-64 flex-col border-r border-[#E5E7EB] bg-[#F4F4F4] dark:border-[#374151] dark:bg-[#111827]">
      <div className="flex h-16 items-center border-b border-[#E5E7EB] px-6 dark:border-[#374151]">
        <h1 className="text-[20px] font-semibold text-[#1F2937] dark:text-[#F9FAFB]">
          GPT M&E System
        </h1>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href || 
            (item.href !== "/dashboard" && location.pathname.startsWith(item.href));
          
          if (item.disabled) {
            return (
              <div
                key={item.name}
                className={cn(
                  "flex items-center gap-3 rounded-[4px] px-3 py-2 text-[14px] font-medium cursor-not-allowed opacity-50",
                  "text-[#4B5563] dark:text-[#D1D5DB]"
                )}
                title="Coming soon"
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </div>
            );
          }
          
          return (
            <Link
              key={item.name}
              to={item.href}
              onClick={onNavigate}
              className={cn(
                "flex items-center gap-3 rounded-[4px] px-3 py-2 text-[14px] font-medium transition-colors",
                isActive
                  ? "bg-[#1F2937] text-white dark:bg-[#1F2937] dark:text-white"
                  : "text-[#4B5563] hover:bg-[#E5E7EB] dark:text-[#D1D5DB] dark:hover:bg-[#374151]"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-[#E5E7EB] p-4 dark:border-[#374151]">
        <div className="text-[12px] text-[#4B5563] dark:text-[#D1D5DB]">
          <div className="font-medium">Gauteng Provincial Treasury</div>
          <div className="mt-1">Monitoring & Evaluation System</div>
        </div>
      </div>
    </div>
  );
}

