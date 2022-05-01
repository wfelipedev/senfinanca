export function priceMask(value: any) {
  if (value) {
    let maskedPrice = value.replace(/\D/g, '');
    maskedPrice = `${(maskedPrice / 100).toFixed(2)}`;
    maskedPrice = maskedPrice.replace('.', ',');
    maskedPrice = maskedPrice.replace(/(\d)(\d{3})(\d{3}),/g, '$1.$2.$3,');
    maskedPrice = maskedPrice.replace(/(\d)(\d{3}),/g, '$1.$2,');
    /* maskedPrice = `R$ ${maskedPrice}`; */
    return maskedPrice;
  }

  return value;
} 