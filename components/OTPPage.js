import React, { useState } from "react";

export default function OTPPage() {
  const [code, setCode] = useState("");
  autoReadSMS((cod) => {
    // alert(c);
    setCode(c);
  });

  return (
    <div>
      <h1>{code}</h1>

      <input
        autoFocus
        autoComplete="one-time-code"
        type="otp"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
    </div>
  );
}

function autoReadSMS(cb) {
  // used AbortController with setTimeout so that WebOTP API (Autoread sms) will get disabled after 1min
  const signal = new AbortController();
  setTimeout(() => {
    signal.abort();
  }, 1 * 60 * 1000);
  async function main() {
    if ("OTPCredential" in window) {
      try {
        if (navigator.credentials) {
          try {
            await navigator.credentials
              .get({ abort: signal, otp: { transport: ["sms"] } })
              .then((content) => {
                alert(current?.code);
                if (content && content.code) {
                  cb(content.code);
                }
              })
              .catch((e) => console.log(e));
          } catch (e) {
            return;
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  main();
}
