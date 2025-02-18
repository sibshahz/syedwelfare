import type * as React from "react";
import {
  ArrowDownToDot,
  ArrowUpFromDot,
  Bolt,
  ChevronRight,
  CirclePlus,
  HandCoins,
  LayoutDashboard,
  Logs,
  ShieldPlus,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Logo from "./logo";

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Beneficiaries",
      url: "#",
      items: [
        {
          title: "Add Member",
          url: "/dashboard/members/add",
          icon: <CirclePlus />,
        },
        {
          title: "Members List",
          url: "/dashboard/members/list/1",
          icon: <Logs />,
        },
        {
          title: "Payments",
          url: "/dashboard/members/payments/1",
          icon: <ArrowUpFromDot />,
        },
      ],
    },
    {
      title: "Donors",
      url: "#",
      items: [
        {
          title: "Add Donor",
          url: "/dashboard/donors/add",
          icon: <ShieldPlus />,
        },
        {
          title: "Donors List",
          url: "/dashboard/donors/list/1",
          icon: <HandCoins />,
        },
        {
          title: "Donations",
          url: "/dashboard/donors/donations/1",
          icon: <ArrowDownToDot />,
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      items: [
        {
          title: "Settings",
          url: "/dashboard/settings",
          icon: <Bolt />,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        {/* <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        /> */}
        {/* <SearchForm /> */}
        <Logo />
      </SidebarHeader>
      <SidebarContent className="gap-0">
        {/* We create a collapsible SidebarGroup for each parent. */}
        <SidebarGroup className="group mt-4">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href={"/dashboard"}>
                    <LayoutDashboard />
                    Dashboard
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        {data.navMain.map((item) => (
          <Collapsible
            key={item.title}
            title={item.title}
            defaultOpen
            className="group/collapsible"
          >
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <CollapsibleTrigger>
                  {item.title}{" "}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          // isActive={item.isActive}
                        >
                          <a href={item.url}>
                            {item.icon}
                            {item.title}
                          </a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
