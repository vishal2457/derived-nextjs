import { useQuery } from "@tanstack/react-query";
import { dashboardApi } from "../../lib/apis/dashboard.api";

export const dashboardQueries = {
  useRecentSales: () => {
    return useQuery<any[]>({
      queryKey: ["dashboard-queries-recent-sales"],
      queryFn: () => dashboardApi.getRecentSales(),
    });
  },
  useBarGraph: () => {
    return useQuery<any[]>({
      queryKey: ["dashboard-queries-bar-graph"],
      queryFn: () => dashboardApi.getBarGraph(),
    });
  },
  useAreaGraph: () => {
    return useQuery<any[]>({
      queryKey: ["dashboard-queries-area-graph"],
      queryFn: () => dashboardApi.getAreaGraph(),
    });
  },
  usePieGraph: () => {
    return useQuery<any[]>({
      queryKey: ["dashboard-queries-pie-graph"],
      queryFn: () => dashboardApi.getPieGraph(),
    });
  },
};