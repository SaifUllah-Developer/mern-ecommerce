export const baseURL = import.meta.env.VITE_API_URL;

const SummaryApi = {
  register: {
    url: `${baseURL}/api/user/register`,
    method: "post",
  },
  login: {
    url: `${baseURL}/api/user/login`,
    method: "post",
  },
  forgot_password: {
    url: `${baseURL}/api/user/forgot-password`,
    method: "put",
  },
  forgot_password_otp_verification: {
    url: `${baseURL}/api/user/verify-forgot-password-otp`,
    method: "put",
  },
  resetPassword: {
    url: `${baseURL}/api/user/reset-password`,
    method: "put",
  },
  refreshToken: {
    url: `${baseURL}/api/user/refresh-token`,
    method: "post",
  },
  userDetails: {
    url: `${baseURL}/api/user/user-details`,
    method: "get",
  },
  logout: {
    url: `${baseURL}/api/user/logout`,
    method: "get",
  },
  uploadAvatar: {
    url: `${baseURL}/api/user/upload-avatar`,
    method: "put",
  },
  updateUserDetails: {
    url: `${baseURL}/api/user/update-user`,
    method: "put",
  },
  // ... same for all other endpoints
};

export default SummaryApi;
