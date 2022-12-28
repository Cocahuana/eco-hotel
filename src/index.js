import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ChakraProvider>
			<App />
			{(function (h, o, t, j, a, r) {
				h.hj =
					h.hj ||
					function () {
						(h.hj.q = h.hj.q || []).push(arguments);
					};
				h._hjSettings = { hjid: 3303532, hjsv: 6 };
				a = o.getElementsByTagName("head")[0];
				r = o.createElement("script");
				r.async = 1;
				r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
				a.appendChild(r);
			})(
				window,
				document,
				"https://static.hotjar.com/c/hotjar-",
				".js?sv="
			)}
		</ChakraProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
