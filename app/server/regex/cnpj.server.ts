export function CNPJ(value: string) {
  const cnpjRegex = /(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/;
  return cnpjRegex.test(value);
}
