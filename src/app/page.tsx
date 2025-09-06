"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const getCookie = async () => {
      const res = await fetch(`${process.env.API_URL}/api/cookie`, {
        // 요청 시 쿠키 포함
        credentials: "include",
      });
      const data = await res.json();
      console.log("쿠키: ", data);
    };
    getCookie();
  }, []);

  return (
    <div>
      <h1>쿠키 세팅</h1>
      <button
        onClick={() => {
          const setCookie = async () => {
            const res = await fetch(`${process.env.API_URL}/api/cookie`, {
              method: "POST",
              // 요청 시 쿠키 포함
              credentials: "include",
            });
            const data = await res.json();
            console.log("쿠키: ", data);
          };
          setCookie();
        }}
      >
        토큰을 쿠키에 저장하게 하기
      </button>
    </div>
  );
}
