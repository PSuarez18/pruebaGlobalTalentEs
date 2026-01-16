/*
 NO TUVE MAS EXCEPCIONES PORQUE ES UNA DB MOCK EN MEMORIA, 
 CON UNA REAL PODRIA TIRAR MAS EXCEPCIONES PERO NO ES EL CASO ACTUALMENTE
 */
export class DestinationNotFoundError extends Error {
  constructor(message = "Destination not found") {
    super(message);
    this.name = "DestinationNotFoundError";
  }
}
