import { JSX } from "react";
import { Compass, CreditCard, Home, LayoutDashboard } from "lucide-react";

export type MenuProps = {
  id: number;
  label: string;
  Icon: JSX.Element;
  path: string;
  section?: boolean | undefined;
  integration?: boolean | undefined;
};

export const EXPLORE_PAGE_MENU: MenuProps[] = [
  { id: 0, label: "Home", Icon: <Home />, path: "/", section: true },
  {
    id: 1,
    label: "Pricing",
    Icon: <CreditCard />,
    path: "#pricing",
    section: true,
  },
  { id: 2, label: "Explore", Icon: <Compass />, path: "/explore" },
  { id: 3, label: "Dashboard", Icon: <LayoutDashboard />, path: "/dashboard" },
];

export const SIDEBAR_SETTINGS_MENU: MenuProps[] = [
  { id: 0, label: "General", Icon: <></>, path: "" },
  { id: 1, label: "Subscriptions", Icon: <></>, path: "subscriptions" },
  { id: 2, label: "Affiliates", Icon: <></>, path: "affiliates" },
  { id: 3, label: "Domain Config", Icon: <></>, path: "domains" },
  {
    id: 4,
    label: "Integration",
    Icon: <></>,
    path: "integrations",
    integration: true,
  },
];
