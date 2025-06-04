export const dashboardApi = {
  getRecentSales: async () => {
    const response = await fetch("/api/dashboard/recent-sales");
    return response.json();
  },
  getBarGraph: async () => {
    const response = await fetch("/api/dashboard/bar-graph");
    return response.json();
  },
  getAreaGraph: async () => {
    const response = await fetch("/api/dashboard/area-chart");
    return response.json();
  },
  getPieGraph: async () => {
    const response = await fetch("/api/dashboard/pie-chart");
    return response.json();
  },
};