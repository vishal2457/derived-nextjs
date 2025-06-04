import { NextResponse } from "next/server";

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--primary)" },
  { browser: "safari", visitors: 200, fill: "var(--primary-light)" },
  { browser: "firefox", visitors: 287, fill: "var(--primary-lighter)" },
  { browser: "edge", visitors: 173, fill: "var(--primary-dark)" },
  { browser: "other", visitors: 190, fill: "var(--primary-darker)" },
];

export async function GET() {
  return NextResponse.json(chartData);
}
