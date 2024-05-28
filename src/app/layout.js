import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cult Creative",
  description: "Generated by create next app",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="https://static.wixstatic.com/media/32f93d_e99c7f1506164a29a738412bee764493%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/32f93d_e99c7f1506164a29a738412bee764493%7Emv2.png"
        type="image/png"
      />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
