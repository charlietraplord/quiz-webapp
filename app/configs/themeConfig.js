import { v4 as uuidv4 } from "uuidv4";

const themeConfig = {
    app: {
        name: "Anisa Dashboard",
    },
    //layout
    layout: {
        isRTL: false,
        darkMode: false,
        semiDarkMode: false,
        skin: "default",
        contentWidth: "full",
        type: "vertical",
        navBartype: "sticky",
        footerType: "static",
        isMonochrome: false,
        menu: {
            isCollapsed: false,
            isHidden: false,
        },
        mobileMenu: false,
        customizer: false,
    },
};

export default themeConfig;