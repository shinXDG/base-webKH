import Cookie from "js-cookie";
import { create } from "apisauce";
import { API_STATUS } from "../../constants";
import queryString from "query-string";
import swal from "sweetalert";
import R from "../../assets";
import { ENVIRONMENT, SESSION_KEY } from "../../../config";

const createAPI = () => {
  const APIInstant = create({
    baseURL: ENVIRONMENT.REQUEST_URL,
    timeout: 20000,
    headers: { "Content-Type": "application/json" },
  });
  APIInstant.setHeader("token", Cookie.get(SESSION_KEY.SESSION) || "");
  APIInstant.axiosInstance.interceptors.request.use(
    async (config) => {
      config.headers.token = Cookie.get(SESSION_KEY.SESSION);
      return config;
    },
    (error) => Promise.reject(error)
  );
  APIInstant.axiosInstance.interceptors.response.use(
    (response) => {
      const data = response.data;
      return response;
    },
    // handle error
    async (error: any) => {
      const data = error?.response?.data;
      console.log("error", data);
      if (data && data.code === API_STATUS.UNAUTHORIZED) {
        Cookie.set(SESSION_KEY.SESSION, "");
        localStorage.setItem("token", "");
        swal({
          title: R.strings().fail_request,
          text: data?.message,
          icon: "info",
        });
      } else {
        swal({
          title: R.strings().fail_request,
          text: data?.message || R.strings().error_network,
          icon: "error",
        });
      }
      return error;
    }
  );
  return APIInstant;
};
const axiosInstance = createAPI();

/* Support function */
function handleResult(api: any) {
  return api.then((res: { data: { status: number; code: number } }) => {
    if (!res?.data?.status) {
      return Promise.reject(res?.data);
    }
    return Promise.resolve(res?.data);
  });
}

function parseUrl(url: string, query: any) {
  return queryString.stringifyUrl({ url: url, query });
}

export const ApiClient = {
  get: (url: string, payload?: any) =>
    handleResult(axiosInstance.get(parseUrl(url, payload))),
  post: (url: string, payload: any) =>
    handleResult(axiosInstance.post(url, payload)),
  put: (url: string, payload?: any) =>
    handleResult(axiosInstance.put(url, payload)),
  patch: (url: string, payload?: any) =>
    handleResult(axiosInstance.patch(url, payload)),
  delete: (url: string, payload?: any) =>
    handleResult(axiosInstance.delete(url, {}, { data: payload })),
};

export default axiosInstance;
