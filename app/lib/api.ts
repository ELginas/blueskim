import useSWR from "swr";
import { toast } from "sonner";
import type { Server } from "@/app/lib/definitions";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function useUser() {
  const { data, isLoading, error } = useSWR<Server[]>("/api/user", fetcher, {
    onError(err) {
      toast(`Error: ${err.message}`);
    },
  });
  const isValid = !(error || isLoading);
  return { data, isValid };
}
