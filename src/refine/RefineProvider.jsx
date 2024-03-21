import { RefineContext } from "./RefineContext";
import PropTypes from "prop-types";

function RefineProvider({ resources, children }) {
  return (
    <RefineContext.Provider value={resources}>
      {children}
    </RefineContext.Provider>
  );
}

RefineProvider.propTypes = {
  resources: PropTypes.object,
  children: PropTypes.node,
};

export default RefineProvider;
