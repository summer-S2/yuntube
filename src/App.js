import { Outlet } from "react-router-dom";
import SearchHeader from "./components/SearchHeader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";
import { ScrollRestoration } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <SearchHeader />

      <div className="mt-[62px]">
        <YoutubeApiProvider>
          <QueryClientProvider client={queryClient}>
            <ScrollRestoration />
            <Outlet />
          </QueryClientProvider>
        </YoutubeApiProvider>
      </div>
    </>
  );
}

export default App;
