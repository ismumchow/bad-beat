import '../../styles/global.css'
import GlassPane from "@/components/GlassPane";
import Sidebar from '@/components/SideBar';

export default function DashboardRootLayout({children}) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen lavender p-6">
        <GlassPane
          className="w-full h-full flex items-center justify-center p-6">
          <Sidebar />
          {children}
        </GlassPane>
      </body>
    </html>
  )
}