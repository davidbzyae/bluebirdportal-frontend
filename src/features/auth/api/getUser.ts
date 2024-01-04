import { User } from "@/features/auth";
import { delay } from "@/utilities";
import { useQuery } from "@tanstack/react-query";

export const getUser = async (): Promise<User> => {
  await delay(2000);
  return {
    role: "admin",
    thumbnail: "/portal/dummyUserThumbnail.jpg",
    username: "Ronny",
  };
};

export const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });
};
