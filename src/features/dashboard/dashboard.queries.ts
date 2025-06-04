import { useQuery } from "@tanstack/react-query";
import { dashboardApi } from "../../lib/apis/dashboard.api";

export const dashboardQueries = {
  useRecentSales: () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return useQuery<any[]>({
      queryKey: ["dashboard-queries-recent-sales"],
      queryFn: () => dashboardApi.getRecentSales(),
    });
  },
  useBarGraph: () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return useQuery<any[]>({
      queryKey: ["dashboard-queries-bar-graph"],
      queryFn: () => dashboardApi.getBarGraph(),
    });
  },
  useAreaGraph: () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return useQuery<any[]>({
      queryKey: ["dashboard-queries-area-graph"],
      queryFn: () => dashboardApi.getAreaGraph(),
    });
  },
  usePieGraph: () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return useQuery<any[]>({
      queryKey: ["dashboard-queries-pie-graph"],
      queryFn: () => dashboardApi.getPieGraph(),
    });
  },
};