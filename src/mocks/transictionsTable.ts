function createData(
  id: string,
  paymentType: string,
  cardBrand: string,
  grossAmount: number,
  netAmount: number,
  mdrFeeAmount: number,
  status: string,
  date: string
) {
  return {
    id,
    paymentType,
    cardBrand,
    grossAmount,
    netAmount,
    mdrFeeAmount,
    status,

    date,
  };
}

export const rows = [
  createData(
    "1",
    "Crédito à vista",
    "Mastercard",
    80,
    76.88,
    3.12,
    "Aprovada",
    "2021-05-26T12:12:55"
  ),
  createData(
    "2",
    "Crédito Parcelado",
    "Visa",
    12,
    150.0,
    6.0,
    "Aprovada",
    "2021-06-10T15:30:45"
  ),
  createData(
    "3",
    "Crédito à vista",
    "American Express",
    24,
    200.0,
    8.0,
    "Aprovada",
    "2021-07-15T09:45:30"
  ),
  createData(
    "4",
    "Crédito Parcelado",
    "Mastercard",
    6,
    70.0,
    3.5,
    "Aprovada",
    "2021-08-20T18:20:15"
  ),
  createData(
    "5",
    "Crédito à vista",
    "Visa",
    36,
    500.0,
    25.0,
    "Aprovada",
    "2021-09-05T14:55:10"
  ),
  createData(
    "6",
    "Crédito Parcelado",
    "Mastercard",
    24,
    250.0,
    12.0,
    "Aprovada",
    "2021-10-12T10:30:20"
  ),
  createData(
    "7",
    "Crédito à vista",
    "Visa",
    12,
    120.0,
    6.0,
    "Aprovada",
    "2021-11-18T08:45:50"
  ),
  createData(
    "8",
    "Crédito Parcelado",
    "American Express",
    36,
    400.0,
    20.0,
    "Aprovada",
    "2021-12-24T16:15:40"
  ),
  createData(
    "9",
    "Crédito à vista",
    "Mastercard",
    18,
    180.0,
    9.0,
    "Aprovada",
    "2022-01-30T22:40:35"
  ),
  createData(
    "10",
    "Crédito Parcelado",
    "Visa",
    6,
    60.0,
    3.0,
    "Aprovada",
    "2022-02-15T11:10:25"
  ),
  createData(
    "11",
    "Crédito à vista",
    "American Express",
    48,
    350.0,
    17.5,
    "Aprovada",
    "2022-03-05T09:25:15"
  ),
  createData(
    "12",
    "Crédito Parcelado",
    "Mastercard",
    12,
    180.0,
    9.0,
    "Aprovada",
    "2022-04-08T14:30:05"
  ),
  createData(
    "13",
    "Crédito à vista",
    "Visa",
    24,
    240.0,
    12.0,
    "Aprovada",
    "2022-05-17T19:45:55"
  ),
  createData(
    "14",
    "Crédito Parcelado",
    "American Express",
    18,
    270.0,
    13.5,
    "Aprovada",
    "2022-06-20T17:55:50"
  ),
  createData(
    "15",
    "Crédito à vista",
    "Mastercard",
    36,
    300.0,
    15.0,
    "Aprovada",
    "2022-07-30T08:20:40"
  ),
  createData(
    "16",
    "Crédito Parcelado",
    "Visa",
    12,
    120.0,
    6.0,
    "Aprovada",
    "2022-08-14T21:10:30"
  ),
  createData(
    "17",
    "Crédito à vista",
    "American Express",
    24,
    240.0,
    12.0,
    "Aprovada",
    "2022-09-25T15:35:25"
  ),
  createData(
    "18",
    "Crédito Parcelado",
    "Mastercard",
    6,
    60.0,
    3.0,
    "Aprovada",
    "2022-10-05T10:45:20"
  ),
  createData(
    "19",
    "Crédito à vista",
    "Visa",
    48,
    480.0,
    24.0,
    "Aprovada",
    "2022-11-15T14:55:15"
  ),
  createData(
    "20",
    "Crédito Parcelado",
    "American Express",
    18,
    270.0,
    13.5,
    "Aprovada",
    "2022-12-20T09:30:10"
  ),
  createData(
    "21",
    "Crédito à vista",
    "Mastercard",
    12,
    120.0,
    6.0,
    "Aprovada",
    "2023-01-25T17:45:05"
  ),
  createData(
    "22",
    "Crédito Parcelado",
    "Visa",
    24,
    240.0,
    12.0,
    "Aprovada",
    "2023-02-10T22:10:00"
  ),
  createData(
    "23",
    "Crédito à vista",
    "American Express",
    36,
    360.0,
    18.0,
    "Aprovada",
    "2023-03-15T11:20:55"
  ),
  createData(
    "24",
    "Crédito Parcelado",
    "Mastercard",
    6,
    60.0,
    3.0,
    "Aprovada",
    "2023-04-20T14:35:50"
  ),
  createData(
    "25",
    "Crédito à vista",
    "Visa",
    48,
    480.0,
    24.0,
    "Aprovada",
    "2023-05-25T19:50:45"
  ),
];
