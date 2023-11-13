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
  regions: [
    {
      reg: "Москва",
      numLink: "+78004440065",
      number: "+7 (800) 444-00-65",
      mail: "info@stroiopttorg.ru",
    },
    {
      reg: "Ставрополь",
      numLink: "+78004440065",
      number: "+7 (800) 444-00-65",
      mail: "info@stroiopttorg.ru",
    },
    {
      reg: "Краснодар",
      numLink: "+78004440065",
      number: "+7 (800) 444-00-65",
      mail: "info@stroiopttorg.ru",
    },
    {
      reg: "Грозный",
      numLink: "+78004440065",
      number: "+7 (800) 444-00-65",
      mail: "info@stroiopttorg.ru",
    },
    {
      reg: "Ростов-на-Дону",
      numLink: "+78004440065",
      number: "+7 (800) 444-00-65",
      mail: "info@stroiopttorg.ru",
    },
    {
      reg: "Самара",
      numLink: "+78004440065",
      number: "+7 (800) 444-00-65",
      mail: "info@stroiopttorg.ru",
    },
  ],
};

export default function ContactsRedux(state = ContactData, { type, payload }) {
  switch (type) {
    default:
      return state;
  }
}
