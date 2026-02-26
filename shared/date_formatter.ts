export function formaterDate(stringDate: string): string {
  const date = new Date(stringDate)
  if (isNaN(date.getTime())) {
    throw new Error("Date invalide")
  }
  return new Intl.DateTimeFormat('fr-FR', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' }).format(date)
}
