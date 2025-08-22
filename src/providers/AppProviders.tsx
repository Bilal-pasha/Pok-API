import React from "react";

import { ClientProvider } from "./clientProvider";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return <ClientProvider>{children}</ClientProvider>;
};
