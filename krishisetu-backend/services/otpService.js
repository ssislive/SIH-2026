import { redisClient } from "../config/redis.js";
import { v4 as uuidv4 } from "uuid";

const OTP_EXPIRY_SECONDS = 300; // 5 minutes

const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const storeOTP = async (phone, otp) => {
  const key = `otp:${phone}`;
  await redisClient.set(key, otp, { EX: OTP_EXPIRY_SECONDS });
};

const verifyOTP = async (phone, otp) => {
  const key = `otp:${phone}`;
  const storedOTP = await redisClient.get(key);

  if (!storedOTP) {
    return { success: false, message: "OTP expired or not found" };
  }

  if (storedOTP !== otp) {
    return { success: false, message: "Invalid OTP" };
  }

  // Delete OTP after successful verification
  await redisClient.del(key);
  return { success: true, message: "OTP verified" };
};

export { generateOTP, storeOTP, verifyOTP };
