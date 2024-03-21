import { useMutation, useQueryClient } from "@tanstack/react-query";
import useResources from "./useResources";

function useUpdate(resourceName) {
  const queryClient = useQueryClient();
  const { baseUrl, dataProvider } = useResources(resourceName);
  const mutation = useMutation({
    mutationFn: ({ id, data }) => {
      return dataProvider.update(baseUrl, resourceName, id, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [baseUrl, resourceName] });
    },
  });
  return { ...mutation };
}

export default useUpdate;
