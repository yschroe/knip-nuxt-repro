export const useModuleData = () => {
  const name = ref("ModuleData");

  const getName = () => {
    return name.value;
  };

  return {
    name,
    getName,
  };
};
