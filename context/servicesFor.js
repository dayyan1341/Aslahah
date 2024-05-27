const en = [
  { label: "Apartment", value: "apartment" },
  { label: "Villa", value: "villa" },
  { label: "Office", value: "office" },
];

const ar = [
  { label: "شقة", value: "apartment" },
  { label: "فيلا", value: "villa" },
  { label: "مكتب", value: "office" },
];

const servicesForLocale = (locale) => {
  if (locale == "en") return en;
  else return ar;
};

export default servicesForLocale;
