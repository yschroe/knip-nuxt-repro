type Country = {
  name: string;
  code: string;
  emoji: string;
};

const countries: Country[] = [
  { name: "Afghanistan", code: "AF", emoji: "🇦🇫" },
  { name: "Albania", code: "AL", emoji: "🇦🇱" },
];

export default eventHandler(async () => countries);
