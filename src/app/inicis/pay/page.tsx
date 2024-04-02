"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
declare const INIStdPay: any;

interface RequestData {
  gopaymethod: string;
  price: string;
  goodname: string;
  buyername: string;
  buyertel: string;
  buyeremail: string;
}

interface ResponseData {
  acceptmethodUrl: string;
  buyeremail: string;
  buyername: string;
  buyertel: string;
  closeUrlUrl: string;
  currency: string;
  goodname: string;
  gopaymethod: string;
  mKey: string;
  mid: string;
  oid: string;
  price: string;
  returnUrl: string;
  signature: string;
  timestamp: string;
  use_chkfake: string;
  verification: string;
  version: string;
}

export default function Page() {
  const [requestData, setRequestData] = useState<RequestData>({
    gopaymethod: "Card",
    price: "",
    goodname: "",
    buyername: "",
    buyertel: "",
    buyeremail: "",
  });
  const [responseData, setResponseData] = useState<ResponseData | undefined>(
    undefined
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setRequestData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/pay`,
        requestData
      );
      console.log(response);
      setResponseData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://stdpay.inicis.com/stdjs/INIStdPay.js";
    script.async = true;
    script.onload = () => {
      if (responseData) {
        INIStdPay.pay("payForm");
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [responseData]);

  return (
    <>
      <h1>결제 테스트</h1>

      <label htmlFor="gopaymethod">결제 방법:</label>
      <select
        id="gopaymethod"
        name="gopaymethod"
        value={requestData.gopaymethod}
        onChange={handleChange}
      >
        <option value="Card">카드</option>
        <option value="HPP">핸드폰</option>
      </select>
      <br />

      <label htmlFor="price">결제금액:</label>
      <input
        id="price"
        name="price"
        type="text"
        value={requestData.price}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="goodname">상품명:</label>
      <input
        id="goodname"
        name="goodname"
        type="text"
        value={requestData.goodname}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="buyername">구매자명:</label>
      <input
        id="buyername"
        name="buyername"
        type="text"
        value={requestData.buyername}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="buyertel">구매자 휴대폰번호:</label>
      <input
        id="buyertel"
        name="buyertel"
        type="text"
        value={requestData.buyertel}
        onChange={handleChange}
      />
      <br />

      <label htmlFor="buyeremail">구매자 이메일주소:</label>
      <input
        id="buyeremail"
        name="buyeremail"
        type="email"
        value={requestData.buyeremail}
        onChange={handleChange}
      />
      <br />

      <button onClick={handleSubmit}>확인</button>
      <br />
      {responseData && (
        <form id="payForm" acceptCharset="UTF-8" method="POST">
          <input
            name="version"
            required
            type="hidden"
            value={responseData.version}
          />
          <input
            name="gopaymethod"
            required
            type="hidden"
            value={responseData.gopaymethod}
          />
          <input name="mid" required type="hidden" value={responseData.mid} />
          <input name="oid" required type="hidden" value={responseData.oid} />
          <input
            name="price"
            required
            type="hidden"
            value={responseData.price}
          />
          <input
            name="timestamp"
            required
            type="hidden"
            value={responseData.timestamp}
          />
          <input
            name="use_chkfake"
            required
            type="hidden"
            value={responseData.use_chkfake}
          />
          <input
            name="signature"
            required
            type="hidden"
            value={responseData.signature}
          />
          <input
            name="verification"
            required
            type="hidden"
            value={responseData.verification}
          />
          <input name="mKey" required type="hidden" value={responseData.mKey} />
          <input
            name="currency"
            required
            type="hidden"
            value={responseData.currency}
          />
          <input
            name="goodname"
            required
            type="hidden"
            value={responseData.goodname}
          />
          <input
            name="buyername"
            required
            type="hidden"
            value={responseData.buyername}
          />
          <input
            name="buyertel"
            required
            type="hidden"
            value={responseData.buyertel}
          />
          <input
            name="buyeremail"
            required
            type="hidden"
            value={responseData.buyeremail}
          />
          <input
            name="returnUrl"
            required
            type="hidden"
            value={responseData.returnUrl}
          />
          <input
            name="closeUrl"
            required
            type="hidden"
            value={responseData.closeUrlUrl}
          />
          <input
            name="acceptmethod"
            required
            type="hidden"
            value={responseData.acceptmethodUrl}
          />
        </form>
      )}
    </>
  );
}
