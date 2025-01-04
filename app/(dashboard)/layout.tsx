import NavigationFooter from "@/components/common/panelFooter";
import { UserProvider } from "@/context/userContext";
import { Toaster } from "@/components/ui/toaster";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserProvider>
      <div
        className={` antialiased flex flex-col min-h-screen`}
      >
        <main className="flex-1">{children}</main>
        <NavigationFooter />
      </div>
      <Toaster />
    </UserProvider>
  );
}
