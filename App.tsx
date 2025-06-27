import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/useAuth";
import Landing from "@/pages/landing";
import Dashboard from "@/pages/dashboard";
import Deposit from "@/pages/deposit";
import Tasks from "@/pages/tasks";
import Withdraw from "@/pages/withdraw";
import Profile from "@/pages/profile";
import Admin from "@/pages/admin";
import Maintenance from "@/pages/maintenance";
import NotFound from "@/pages/not-found";

function Router() {
  const { isAuthenticated, isLoading, user } = useAuth();

  // If there's a database connectivity issue, show maintenance page
  if (isLoading && user === undefined) {
    // Check if it's actually a database error vs normal loading
    setTimeout(() => {
      fetch('/api/health').catch(() => {
        // If health check fails, it's likely a server issue
      });
    }, 3000);
  }

  return (
    <Switch>
      {isLoading ? (
        <Route path="/" component={Maintenance} />
      ) : !isAuthenticated ? (
        <Route path="/" component={Landing} />
      ) : (
        <>
          <Route path="/" component={Dashboard} />
          <Route path="/deposit" component={Deposit} />
          <Route path="/tasks" component={Tasks} />
          <Route path="/withdraw" component={Withdraw} />
          <Route path="/profile" component={Profile} />
          <Route path="/admin" component={Admin} />
        </>
      )}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
