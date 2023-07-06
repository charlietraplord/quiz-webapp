"use client";
import "react-toastify/dist/ReactToastify.css";
import "simplebar-react/dist/simplebar.min.css";
import "flatpickr/dist/themes/light.css";
import "react-svg-map/lib/index.css";
import "leaflet/dist/leaflet.css";
import "./scss/app.scss";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import store from "../store";

export default function RootLayout({session,  children }) {
  return (
    <>
      <html lang="en">
        <body className="font-inter  custom-tippy dashcode-app">
          <Provider store={store}>
<SessionProvider session={session}>
            {children}
            </SessionProvider>
            </Provider>
        </body>
      </html>
    </>
  );
};
