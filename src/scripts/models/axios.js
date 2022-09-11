const tokenSite = localStorage.getItem("@Hashy:token");
export const instance = axios.create({
  baseURL: "http://localhost:6278/",
  headers: {
    "Content-Type": "application/json",
  },
});
export const instance1 = axios.create({
  baseURL: "http://localhost:6278/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Token ${tokenSite}`,
  },
});
