
import { useEffect } from "react";

const RazorpayButton = () => {
    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.setAttribute("data-payment_button_id", "pl_Q0kMG4mYcAbmNo");
      script.async = true;
      document.getElementById("razorpay-container").appendChild(script);
    }, []);
    return <div id="razorpay-container"></div>

  };

export default RazorpayButton;