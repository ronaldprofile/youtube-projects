const daysWeek = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado"
];

export function formatDateTaskCreated(date) {
  const dayOfMonth = date.getDate();
  const dayOfWeek = daysWeek[date.getDay()];

  const month = new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(
    date
  );

  const hoursTaskCreated = date.getHours();
  const minutesTaskCreated = date.getMinutes();

  return `${dayOfWeek}, ${dayOfMonth} de ${month} às ${hoursTaskCreated}:${minutesTaskCreated}`;
}
