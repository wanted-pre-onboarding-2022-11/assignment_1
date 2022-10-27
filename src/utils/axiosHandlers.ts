import axios from "axios";

export const handleAxiosError = (e: unknown, cb: () => void) => {
  if (axios.isAxiosError(e) && e.response?.status === 401) {
    alert("세션이 만료되었습니다.");
    cb();
    return;
  }
  alert("알 수 없는 에러가 발생했습니다.");
};
