import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import Navbar from "@/components/navbar";
import MobileNav from "@/components/mobile-nav";
import DepositForm from "@/components/deposit-form";
import WithdrawalForm from "@/components/withdrawal-form";
import TaskList from "@/components/task-list";
import InvestmentList from "@/components/investment-list";
import ActivityFeed from "@/components/activity-feed";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, Clock, DollarSign, Gift, Calendar, Target } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

export default function Dashboard() {
  const { user } = useAuth();
  const { toast } = useToast();

  const { data: dashboardData, isLoading, refetch } = useQuery({
    queryKey: ["/api/dashboard"],
    refetchInterval: 30000, // Refresh every 30 seconds
  });

  const handleDailyLogin = async () => {
    try {
      const response = await apiRequest("POST", "/api/daily-login");
      const result = await response.json();
      
      toast({
        title: "Success!",
        description: result.message,
      });
      
      refetch();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to claim daily bonus",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-neutral-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  const {
    activeDeposits = [],
    userTasks = [],
    transactions = [],
    availableBalance = "0.00",
    totalActive = "0.00",
  } = dashboardData || {};

  const completedTasks = userTasks.filter((task: any) => task.completed).length;
  const totalTasks = userTasks.length;

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar user={user} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20 md:pb-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Welcome back, {user?.firstName || 'Investor'}!
              </h1>
              <p className="text-blue-100 mb-4">
                Track your investments and complete daily tasks to maximize earnings
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="text-green-300" />
                  <span className="text-sm">
                    Login Streak: {user?.dailyLoginStreak || 0} days
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Target className="text-yellow-300" />
                  <span className="text-sm">
                    Tasks: {completedTasks}/{totalTasks} completed
                  </span>
                </div>
              </div>
            </div>
            <Button
              variant="secondary"
              onClick={handleDailyLogin}
              className="mt-4 md:mt-0"
            >
              <Gift className="mr-2 h-4 w-4" />
              Claim Daily Bonus
            </Button>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Account Overview & Tasks */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Account Balance Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-neutral-600">Total Balance</h3>
                    <Wallet className="text-secondary" />
                  </div>
                  <p className="text-2xl font-bold text-neutral-800">
                    ₦{parseFloat(user?.balance || "0").toLocaleString()}
                  </p>
                  <p className="text-sm text-neutral-500 mt-1">Overall portfolio</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-neutral-600">Active Deposits</h3>
                    <Clock className="text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-neutral-800">
                    ₦{parseFloat(totalActive).toLocaleString()}
                  </p>
                  <p className="text-sm text-neutral-500 mt-1">
                    {activeDeposits.length} investments locked
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-neutral-600">Available</h3>
                    <DollarSign className="text-secondary" />
                  </div>
                  <p className="text-2xl font-bold text-neutral-800">
                    ₦{parseFloat(availableBalance).toLocaleString()}
                  </p>
                  <p className="text-sm text-neutral-500 mt-1">Ready to withdraw</p>
                </CardContent>
              </Card>
            </div>

            {/* Active Investments */}
            <InvestmentList investments={activeDeposits} />

            {/* Daily Tasks Section */}
            <div id="tasks-section">
              <TaskList 
                tasks={userTasks} 
                onTaskComplete={() => refetch()} 
              />
            </div>
          </div>

          {/* Right Column: Quick Actions */}
          <div className="space-y-6">
            
            {/* New Deposit Card */}
            <div id="deposit-section">
              <DepositForm onSuccess={() => refetch()} />
            </div>

            {/* Withdrawal Card */}
            <div id="withdraw-section">
              <WithdrawalForm 
                availableBalance={availableBalance}
                onSuccess={() => refetch()} 
              />
            </div>

            {/* Recent Activity */}
            <ActivityFeed transactions={transactions} />
          </div>
        </div>
      </div>

      <MobileNav />
    </div>
  );
}
