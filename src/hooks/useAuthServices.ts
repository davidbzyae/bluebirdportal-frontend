import { delay } from "@/utilities";
import { getUser } from "@/features/auth";
import { useQuery } from "@tanstack/react-query";

const getTokens = async () => {
  await delay(2000);
  return "OK";
};

export const useAuthServices = () => {
  const tokenRefetchTime = 300000;

  const tokens = useQuery({
    queryKey: ["tokens"],
    queryFn: getTokens,
    staleTime: tokenRefetchTime,
    refetchInterval: tokenRefetchTime,
  });

  const user = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  return { tokens, user };
};
