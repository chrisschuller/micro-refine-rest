import { useContext } from "react";
import { RefineContext } from "./RefineContext";

function useResources(resourceName) {
  const resources = useContext(RefineContext);
  const { baseUrl, dataProvider } = resources[resourceName];
  return { baseUrl, dataProvider };
}

export default useResources;
