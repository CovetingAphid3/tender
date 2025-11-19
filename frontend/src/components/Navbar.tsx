import { useState } from "react";
import { Moon, Sun, User, LogOut, Bell, Settings, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTheme } from "@/contexts/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock validation - accept any email/password for POC
    if (email && password) {
      setIsLoginOpen(false);
      // Reset form
      setEmail("");
      setPassword("");
    }
  };

  const handleLogout = () => {
    setIsLoginOpen(true);
  };

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-[#E5E7EB] bg-white px-6 dark:border-[#374151] dark:bg-[#1F2937]">
      <div className="flex items-center gap-4">
        <h2 className="text-[20px] font-semibold text-[#1F2937] dark:text-[#F9FAFB]">
          Dashboard
        </h2>
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsLoginOpen(true)}
          className="h-9 text-[14px] border-[#E5E7EB] dark:border-[#374151] text-[#4B5563] dark:text-[#D1D5DB]"
        >
          <LogIn className="h-4 w-4 mr-2" />
          Login
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="text-[#4B5563] hover:bg-[#E5E7EB] dark:text-[#D1D5DB] dark:hover:bg-[#374151]"
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5" />
          ) : (
            <Sun className="h-5 w-5" />
          )}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-[#4B5563] hover:bg-[#E5E7EB] dark:text-[#D1D5DB] dark:hover:bg-[#374151]"
        >
          <Bell className="h-5 w-5" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-[#1F2937] text-white dark:bg-[#4B5563]">
                  PM
                </AvatarFallback>
              </Avatar>
              <div className="hidden text-left md:block">
                <div className="text-[14px] font-medium text-[#1F2937] dark:text-[#F9FAFB]">
                  Programme Manager
                </div>
                <div className="text-[12px] text-[#4B5563] dark:text-[#D1D5DB]">
                  manager@gpt.gov.za
                </div>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogContent className="bg-white border border-[#E5E7EB] rounded-[4px] dark:bg-[#111827] dark:border-[#374151] max-w-md">
          <DialogHeader>
            <DialogTitle className="text-[24px] font-bold text-[#1F2937] dark:text-[#F9FAFB]">
              Login
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleLoginSubmit} className="space-y-6 mt-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[14px] font-medium text-[#4B5563] dark:text-[#D1D5DB]">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="h-12 rounded-[4px] border-[#E5E7EB] text-[16px] placeholder:text-[#9CA3AF] focus:border-[#4B5563] dark:border-[#374151] dark:bg-[#1F2937] dark:text-[#F9FAFB]"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-[14px] font-medium text-[#4B5563] dark:text-[#D1D5DB]">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="h-12 rounded-[4px] border-[#E5E7EB] text-[16px] placeholder:text-[#9CA3AF] focus:border-[#4B5563] dark:border-[#374151] dark:bg-[#1F2937] dark:text-[#F9FAFB]"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-[#1F2937] text-white hover:bg-[#4B5563] h-12 rounded-[4px] text-[16px] font-medium"
            >
              Login
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </header>
  );
}

