import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const resultCode = formData.get("resultCode");
  const resultMsg = formData.get("resultMsg");
  const mid = formData.get("mid");
  const orderNumber = formData.get("orderNumber");
  const authToken = formData.get("authToken");
  const idc_name = formData.get("idc_name");
  const authUrl = formData.get("authUrl");
  const netCancelUrl = formData.get("netCancelUrl");
  const charset = formData.get("charset");
  const merchantData = formData.get("merchantData");

  return NextResponse.json({
    resultCode,
    resultMsg,
    mid,
    orderNumber,
    authToken,
    idc_name,
    authUrl,
    netCancelUrl,
    charset,
    merchantData,
  });
}
