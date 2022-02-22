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
      //   alert("creds");
      try {
        if (navigator.credentials) {
          //   alert("nav");
          try {
            await navigator.credentials
              .get()
              .then((content) => {
                alert("content");
                if (content && content.code) {
                  alert(current?.code);
                  cb(content.code);
                }
              })
              .catch((e) => {
                alert(e.message);
                console.log(e);
              });
          } catch (e) {
            alert(e.message);
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
