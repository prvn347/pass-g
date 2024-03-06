import { Toaster } from "@/components/ui/toaster"

export default function RootLayout({ children }:any) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
