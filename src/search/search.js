function importAll(resolve) {
    resolve.keys().forEach(resolve);
}

importAll(
    require.context('../', true, /\.(js|scss)$/)
);

import "../components/dropdownGuest/numbercategoryselectorGuest.js";
import "../components/dropdownGuest2/numbercategoryselectorGuest2.js";
import "../components/dropdownRoom/numbercategoryselector.js";

