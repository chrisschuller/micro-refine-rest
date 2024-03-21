import { useMutation, useQueryClient } from "@tanstack/react-query";
import useResources from "./useResources";

function useCreate(resourceName) {
  const queryClient = useQueryClient();
  const { baseUrl, dataProvider } = useResources(resourceName);
  const mutation = useMutation({
    mutationFn: (data) => {
      return dataProvider.create(baseUrl, resourceName, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [baseUrl, resourceName] });
    },
  });

  return { ...mutation };
}

export default useCreate;
