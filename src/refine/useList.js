import { useQuery } from "@tanstack/react-query";
import useResources from "./useResources";

function useList(resourceName) {
  const { baseUrl, dataProvider } = useResources(resourceName);

  return useQuery({
    queryKey: [baseUrl, resourceName],
    queryFn: () => dataProvider.getList(baseUrl, resourceName),
  });
}

export default useList;
