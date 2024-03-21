import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RefineProvider, dataProvider } from "./refine";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RefineProvider
        resources={{
          posts: {
            baseUrl: "http://localhost:3000",
            dataProvider: dataProvider,
          },
          comments: {
            baseUrl: "http://localhost:3000",
            dataProvider: dataProvider,
          },
        }}
      >
        <App />
      </RefineProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
