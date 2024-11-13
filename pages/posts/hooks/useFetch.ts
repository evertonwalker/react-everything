import useSWR from "swr";
import api from "../services/api";


export function useFetch<Data = any>(url: string) {
  const {data, error, mutate } = useSWR<Data>(url, async (url: string) => {
    const response = await api.get(url);
    return response.data;
  });

  return { data, error, mutate};
}