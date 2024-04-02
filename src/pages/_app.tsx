import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { createContext, useReducer } from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import snackbarReducer from "@/utils/snackbarReducer";
import LBSSnackBar from "@/components/LBSSnackBar";

type initialErrorStateType = {
  toggleSnackbar: boolean;
  snackbarMessage: string;
  snackbarBtnText: string;
  snackbarBtnFunc: () => void;
};
const initialErrorState = {
  toggleSnackbar: false,
  snackbarMessage: "",
  snackbarBtnText: "",
  snackbarBtnFunc: () => {},
};

export const GlobalErrorContext = createContext<{
  errorState: initialErrorStateType;
  errorDispatch: any;
}>({
  errorState: initialErrorState,
  errorDispatch: () => null,
});

export default function App({ Component, pageProps }: AppProps) {
  const searchParams = useSearchParams();
  // const pathname = usePathname();
  // const router = useRouter();

  const [errorState, errorDispatch] = useReducer(
    snackbarReducer,
    initialErrorState
  );

  // useEffect(()=>{
  //   console.log(pathname,"pathname");
  //   router.push(`${pathname}`)
  // },[pathname])

  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, [searchParams]);

  return (
    // <body>
      <GlobalErrorContext.Provider value={{ errorState, errorDispatch }}>
        <NavBar />
        <Component {...pageProps} />;
        <Footer />
        <LBSSnackBar timeout={5000} />
      </GlobalErrorContext.Provider>
    // </body>
  );
}
