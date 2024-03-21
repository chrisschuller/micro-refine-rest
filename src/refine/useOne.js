import { useQuery } from "@tanstack/react-query";
import useResources from "./useResources";

function useOne(resourceName, id) {
  const { baseUrl, dataProvider } = useResources(resourceName);

  return useQuery({
    queryKey: [baseUrl, resourceName, id],
    queryFn: () => dataProvider.getOne(baseUrl, resourceName, id),
  });
}

export default useOne;
