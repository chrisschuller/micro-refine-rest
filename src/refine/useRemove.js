import { useMutation, useQueryClient } from "@tanstack/react-query";
import useResources from "./useResources";

function useRemove(resourceName) {
  const queryClient = useQueryClient();
  const { baseUrl, dataProvider } = useResources(resourceName);
  const mutation = useMutation({
    mutationFn: (id) => {
      return dataProvider.delete(baseUrl, resourceName, id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [baseUrl, resourceName] });
    },
  });

  return { ...mutation };
}

export default useRemove;
