import React from "react";
import { UserOutlined } from "@ant-design/icons";

import * as Page from "./pages";

export class ComponentRoute {
  name: string;
  path: string;
  component: React.ReactNode;
  icon: any;
  link: (id?: string) => string;
  inSidebar: boolean;
  exact: boolean;
  secure: boolean;
  pathShowsHeader: boolean;
  pathShowsSidebar: boolean;

  constructor(data: any) {
    this.name = data.name;
    this.path = data.path;
    this.component = data.component;
    this.icon = data.icon;
    this.link = data.link;
    this.inSidebar = data.inSidebar;
    this.exact = data.exact;
    this.secure = data.secure;
    this.pathShowsHeader = data.pathShowsHeader;
    this.pathShowsSidebar = data.pathShowsSidebar;
  }
}

export const BaseRoute: ComponentRoute = new ComponentRoute({
  name: "Base",
  path: "/",
  component: <Page.HomePage />,
  icon: <UserOutlined />,
  link: () => "/",
  inSidebar: false,
  exact: true,
  secure: true,
  pathShowsHeader: false,
  pathShowsSidebar: false,
});

export const routes: ComponentRoute[] = [BaseRoute];
