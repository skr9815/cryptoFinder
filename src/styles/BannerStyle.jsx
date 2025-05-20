const bannerStyles = {
    banner: {
        backgroundImage: "url('/banner2.jpg')", // Direct path from public folder
        // backgroundSize: "cover",
        // backgroundPosition: "center",
    },
    bannerContent: {
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    },
    carousel: {
        height: "50%",
        display: "flex",
        alignItems: "center",
    },
};

export default bannerStyles;
