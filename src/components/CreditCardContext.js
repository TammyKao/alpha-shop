import { createContext } from 'react';

export const creditCardDefault = {
  card__holder: " ",
  card__number: " ",
  expire__date: " ",
  cvc: " ",
}

export const CreditCardContext = createContext(creditCardDefault);

