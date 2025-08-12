import { NextResponse } from 'next/server'

export async function GET() {
  // Mock data for the dashboard
  const dashboardData = {
    aum: {
      current: "12.19 Cr",
      momChange: "+0.77%",
      isPositive: true
    },
    sip: {
      current: "1.39 Lakh",
      momChange: "+0%",
      isPositive: true
    },
    transactions: {
      purchases: { count: 0, amount: "0.00 INR" },
      redemptions: { count: 0, amount: "0.00 INR" },
      rejectedTransactions: { count: 0, amount: "0.00 INR" },
      sipRejections: { count: 0, amount: "0.00 INR" },
      newSip: { count: 0, amount: "0.00 INR" }
    },
    clients: {
      active: 3824,
      online: 541,
      new: 2,
      inactive: 60
    },
    sipBusiness: [
      { month: "Mar", value: 1.5, trend: 2.0 },
      { month: "Apr", value: 1.5, trend: 0.1 },
      { month: "May", value: 1.5, trend: 0.1 },
      { month: "Jun", value: 1.5, trend: 0.1 }
    ],
    monthlyMis: [
      { month: "Jan", aum: 0.3, sip: 0.2, redemptions: 0.1 },
      { month: "Feb", aum: 0.25, sip: 0.15, redemptions: -0.05 },
      { month: "Mar", aum: 0.35, sip: 0.25, redemptions: 0.05 },
      { month: "Apr", aum: 0.4, sip: 0.3, redemptions: 0.15 },
      { month: "May", aum: 0.35, sip: 0.25, redemptions: 0.1 },
      { month: "Jun", aum: 0.3, sip: 0.2, redemptions: 0.05 }
    ]
  }

  return NextResponse.json(dashboardData)
}
