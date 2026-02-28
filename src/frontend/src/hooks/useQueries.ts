import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useGetTotalSignups() {
  const { actor, isFetching } = useActor();
  return useQuery<bigint>({
    queryKey: ["totalSignups"],
    queryFn: async () => {
      if (!actor) return BigInt(0);
      return actor.getTotalSignups();
    },
    enabled: !!actor && !isFetching,
    staleTime: 30_000,
    refetchInterval: 60_000,
  });
}

export function useSubmitEntry() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      name,
      email,
      city,
      creatorType,
    }: {
      name: string;
      email: string;
      city: string;
      creatorType: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      await actor.submitEntry(name, email, city, creatorType);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["totalSignups"] });
    },
  });
}
