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
