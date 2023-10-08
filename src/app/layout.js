import "./global.css";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import ReactQuery from "@/lib/reactQuery";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Nasa Inquisitor",
  description: "A plataform to connect researches",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQuery>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
            <div className="flex-1">{children}</div>
          </ReactQuery>
        </ThemeProvider>
      </body>
    </html>
  );
}
