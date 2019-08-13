function importAll(resolve) {
    resolve.keys().forEach(resolve);
}

importAll(
    require.context('../', true, /\.(js|scss)$/)
);

import "../components/dropdownGuest/numbercategoryselector-guest.js";
import "../components/dropdownRoom/numbercategoryselector.js";

