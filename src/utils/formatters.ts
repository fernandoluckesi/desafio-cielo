const convertDateBrasilForEua = (date: string) => {
  const [day, month, year] = date.split("/");
  const convertedDate = `${year}-${month}-${day}`;

  return convertedDate;
};

const prettyDate = (date: Date) =>
  date.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

const prettyDateString = (value: string = "") =>
  value
    .replace(/\D/g, "")
    .slice(0, 8)
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(-\d{4})\d+?$/, "$1");

const thousandsFormatter = (value: string, separator: string) => {
  const groups = [];

  while (value.length > 0) {
    groups.push(value.slice(-3));
    value = value.slice(0, -3);
  }

  return groups.reverse().join(separator);
};

const prettyCurrency = (
  value: number | undefined | null,
  decimalSeparator: string = ",",
  thousandsSeparator: string = "."
) => {
  if (value === undefined || value === null) {
    return "";
  }

  const clearedValue = value.toFixed(2);

  const [thousands, decimal] = clearedValue.split(".");

  const formattedThousands = thousandsFormatter(thousands, thousandsSeparator);
  const signal = value < 0 ? "- " : "";
  const final = formattedThousands.toString().replace("-", "");

  return `${signal}R$ ${final}${decimalSeparator}${decimal}`;
};

export const Formatter = {
  prettyDate,
  prettyCurrency,
  prettyDateString,
  convertDateBrasilForEua,
};
