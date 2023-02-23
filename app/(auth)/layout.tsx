import '../../styles/global.css'
import GlassPane from "@/components/GlassPane";

export default function AuthRootLayout({children}) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen lavender p-8">
        <GlassPane
          className="w-full h-full flex items-center justify-center">
          <div className='absolute top-0 mt-10'> 
            <p className="text-7xl text-gray-100 p-3 mt-10 border-gray-700 border-4 border-solid rounded-2xl"> Habitrack </p>
          </div>
          <div className='inline-grid'> {children} </div>
        </GlassPane>
      </body>
    </html>
  )
}