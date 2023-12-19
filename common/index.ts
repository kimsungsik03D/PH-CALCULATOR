interface HandleSelectObject {
  key: string | number;
  name?: string;
  price?: number;
  late?: string;
}

export const handleSelectFindObject = (
  keyName: string,
  constant: Array<any>
): HandleSelectObject | undefined => {
  const data: HandleSelectObject | undefined = constant.find((value) => {
    if (value.key == keyName) return value;
  });

  return data;
};

export const setLocalStorageResult = (bill: any): any => {
  const result = localStorage.getItem("result");
  const resultParse = JSON.parse(localStorage.getItem("result") ?? "{}");

  let item: any[] = [];
  if (typeof result == "string") {
    console.log([...resultParse, bill]);
    item = [...resultParse, bill];
  } else {
    item = [bill];
  }

  return item;
};
