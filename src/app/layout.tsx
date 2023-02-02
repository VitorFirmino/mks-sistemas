"use client";

import StyledComponentsRegistry from "@/lib/registry";
import { store } from "@/store/store";
import GlobalStyle from "@/styles/globalStyles";
import { Provider } from "react-redux";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head />
      <body>
        <Provider store={store}>
          <StyledComponentsRegistry>
            <div>
              <GlobalStyle />
              {children}
            </div>
          </StyledComponentsRegistry>
        </Provider>
      </body>
    </html>
  );
}
