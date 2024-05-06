
import "../globals.css";
import BlogLayout from "../Components/layouts/BlogLayout";
import { ContextProvider } from "../context/Store";
export default function RootLayout({ children }) {
 
  return (
  <>
     <ContextProvider>
     <BlogLayout>
        {children}
        </BlogLayout>
        </ContextProvider>
        </>
  );
}
