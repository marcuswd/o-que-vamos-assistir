export const formataData = (data : string) => {
  if (data) {
    const formatDate = new Date(data);
  
    if (formatDate) {
      const newDate = new Intl.DateTimeFormat('pt-BR', {
        dateStyle: 'short',
      }).format(formatDate)
      return newDate;
    }
  }
  return false;
}