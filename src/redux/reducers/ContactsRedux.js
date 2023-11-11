let ContactData = {
  departmentNum: [
    {
      dep: "Генеральный директор:",
      numLink: "88782284267",
      number: "8 (8782) 28-42-67 (приемная)",
    },
    {
      dep: "Отдел снабжения:",
      numLink: "88782284267",
      number: "8 (8782) 28-42-67",
    },
    {
      dep: "Отдел сбыта:",
      numLink: "88782284581",
      number: "8 (8782) 28-45-81",
    },
    {
      dep: "Юридический отдел:",
      numLink: "88782284269",
      number: "8 (8782) 28-42-69",
    },
    {
      dep: "Бухгалтерия:",
      numLink: "88782284271",
      number: "8 (8782) 28-42-71",
    },
    {
      dep: "Отдел доставки:",
      numLink: "88782284583",
      number: "8 (8782) 28-45-83",
    },
    {
      dep: "Кредитный отдел:",
      numLink: "88782284582",
      number: "8 (8782) 28-45-82",
    },
    {
      dep: "Отдел кадров:",
      numLink: "88782284273",
      number: "8 (8782) 28-42-73",
    },
  ],
};

export default function ContactsRedux(state = ContactData, { type, payload }) {
  switch (type) {
    default:
      return state;
  }
}
