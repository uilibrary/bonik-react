const navbarNavigations = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Pages",
    child: [
      {
        title: "Shop",
        child: [
          {
            title: "Search product",
            url: "/product/search/mobile phone",
          },
          {
            title: "Single product",
            url: "/product/34324321",
          },
          {
            title: "Cart",
            url: "/cart",
          },
          {
            title: "Checkout",
            url: "/checkout",
          },
        ],
      },
    ],
  },
  {
    title: "User Account",
    child: [
      {
        title: "Orders",
        child: [
          {
            title: "Order List",
            url: "/orders",
          },
          {
            title: "Order Details",
            url: "/orders/5452423",
          },
        ],
      },
      {
        title: "Profile",
        child: [
          {
            title: "View Profile",
            url: "/profile",
          },
          {
            title: "Edit Profile",
            url: "/profile/edit",
          },
        ],
      },
      {
        title: "Address",
        child: [
          {
            title: "Address List",
            url: "/address",
          },
          {
            title: "Add Address",
            url: "/address/512474",
          },
        ],
      },
      {
        title: "Wishlist",
        url: "/wish-list",
      },
    ],
  },
  // {
  //   title: "Documentation",
  //   url:
  //     "https://docs.google.com/document/d/13Bnyugzcty75hzi9GdbVh01YV75a7AhViZws0qGf5yo/edit?usp=sharing",
  //   extLink: true,
  // },
];

export default navbarNavigations;
