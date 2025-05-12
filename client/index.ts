import axios from "axios";
import { privateKeyToAccount } from "viem/accounts";
import { decodeXPaymentResponse, withPaymentInterceptor } from "x402-axios";

// Create a wallet client (using your private key)
const account = privateKeyToAccount(process.env.PRIVATE_KEY! as `0x${string}`);

// Create an Axios instance with payment handling
const api = withPaymentInterceptor(
  axios.create({
    baseURL: "http://localhost:3000",
  }),
  account
);

api
  .get("/premium")
  .then((response) => {
    console.log(response.data);

    const paymentResponse = decodeXPaymentResponse(
      response.headers["x-payment-response"]
    );
    console.log(paymentResponse);
  })
  .catch((error) => {
    console.error(error.response?.data?.error);
  });
