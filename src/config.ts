// Checkout: set to the live Whop checkout URL once the product exists.
export const WHOP_URL = "";

export const ORDER_EMAIL = "jasonkimeu@gmail.com";

export const MAILTO_FALLBACK = `mailto:${ORDER_EMAIL}?subject=${encodeURIComponent(
  "OvernightSite order - $97 build slot",
)}&body=${encodeURIComponent(
  "Hi! I want a website built in 24 hours.\n\nBusiness name:\nWhat I do:\nWho my customers are:\nHow people should contact me:\n",
)}`;

export const CHECKOUT_URL = WHOP_URL || MAILTO_FALLBACK;
