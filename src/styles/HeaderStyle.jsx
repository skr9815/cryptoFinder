const headerStyle = {
    appBar: {
      backgroundColor: "transparent",
      position: "static",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    title: {
      flex: 1,
      color: "gold",
      fontFamily: "Montserrat",
      fontWeight: "bold",
      cursor: "pointer",
    },
    select: {
      width: 100,
      height: 40,
      marginLeft: 2,
      color: "white",
      backgroundColor: "#222",
      borderColor: "gold",
      ".MuiOutlinedInput-notchedOutline": {
        borderColor: "gold",
      },
      "&:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: "blue",
      },
      "& .MuiSvgIcon-root": {
        color: "white",
      },
    },
    menuItem: {
      color: "black",
      backgroundColor: "white",
    },
    carouselContainer: {
      width: '100%',
      overflow: 'hidden',
      backgroundColor: '#14161a',
      padding: '20px 0',
    },
    carouselTrack: {
      display: 'flex',
      animation: 'slide 20s linear infinite',
      whiteSpace: 'nowrap',
    },
    carouselItem: {
      display: 'inline-flex',
      padding: '0 40px',
      color: 'white',
      alignItems: 'center',
    },
    carouselImage: {
      height: '50px',
      marginRight: '10px',
    },
    coinName: {
      fontSize: '18px',
    },
    priceChangePositive: {
      color: 'rgb(14, 203, 129)',
      fontWeight: 500,
    },
    priceChangeNegative: {
      color: 'red',
      fontWeight: 500,
    },
    '@keyframes slide': {
      '0%': {
        transform: 'translateX(0)',
      },
      '100%': {
        transform: 'translateX(-50%)',
      }
    }
  };
  
export default headerStyle;
