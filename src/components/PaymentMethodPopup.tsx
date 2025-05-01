import { useState } from "react";
import { X } from "lucide-react";
import moneyImg from "../assets/tdesign_money-filled.png";
import bKashImg from "../assets/arcticons_bkash.png";
import CashLogo from "../assets/hugeicons_payment-02.png";

interface PaymentPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PaymentMethodPopup({
  isOpen,
  onClose,
}: PaymentPopupProps) {
  const [selectedMethod, setSelectedMethod] = useState("bKash");

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="relative w-full max-w-sm mx-4 rounded-3xl overflow-hidden bg-pure-green">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 cursor-pointer text-light-apricot font-bold"
        >
          <X size={20} />
        </button>

        <div className="p-6">
          <div className="flex justify-center mb-4">
            <img src={moneyImg} alt="" />
          </div>

          <h2
            className="text-[32px] text-center font-bold
           mb-6 text-light-apricot
           "
          >
            Choose Payment Method
          </h2>

          <div className="space-y-6">
            <label className="flex items-start cursor-pointer">
              <div className="relative flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bKash"
                  checked={selectedMethod === "bKash"}
                  onChange={() => setSelectedMethod("bKash")}
                  className="sr-only"
                />
                <div className="size-4 rounded-full flex items-center justify-center bg-white">
                  {selectedMethod === "bKash" && (
                    <div className="size-3 rounded-full bg-jithbo-green"></div>
                  )}
                </div>
              </div>
              <div className="ml-3">
                <div className="flex items-start">
                  <span
                    className="text-white"
                    style={{
                      lineHeight: "0.9",
                      fontWeight: 500,
                      fontSize: "20px",
                    }}
                  >
                    bKash
                  </span>
                  <span className="ml-2" style={{ color: "#F5F5DC" }}>
                    <img src={bKashImg} alt="" />
                  </span>
                </div>
                <p
                  className="text-white mt-2"
                  style={{
                    fontWeight: 400,
                    fontSize: "16px",
                    letterSpacing: "1%",
                    lineHeight: "100%",
                  }}
                >
                  Send the payment now via bKash to confirm your spot instantly.
                </p>
              </div>
            </label>

            <label className="flex items-start cursor-pointer">
              <div className="relative flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bKash"
                  checked={selectedMethod === "Cash"}
                  onChange={() => setSelectedMethod("Cash")}
                  className="sr-only"
                />
                <div className="size-4 rounded-full flex items-center justify-center bg-white">
                  {selectedMethod === "Cash" && (
                    <div className="size-3 rounded-full bg-jithbo-green"></div>
                  )}
                </div>
              </div>
              <div className="ml-3">
                <div className="flex items-start">
                  <span
                    className="text-white"
                    style={{
                      lineHeight: "0.9",
                      fontWeight: 500,
                      fontSize: "20px",
                    }}
                  >
                    Cash
                  </span>
                  <span className="ml-2" style={{ color: "#F5F5DC" }}>
                    <img src={CashLogo} alt="" />
                  </span>
                </div>
                <p
                  className="text-white mt-2"
                  style={{
                    fontWeight: 400,
                    fontSize: "16px",
                    letterSpacing: "1%",
                    lineHeight: "100%",
                  }}
                >
                  Pay the event fee directly to the host before the game starts.
                </p>
              </div>
            </label>
          </div>

          <div className="mt-8">
            <button
              className="w-full py-4 rounded-full text-center font-bold text-white cursor-pointer bg-[#2B2B2B] hover:bg-[#2b2b2b9b] transition duration-300"
              onClick={onClose}
              style={{ fontSize: "18px", letterSpacing: "0" }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
