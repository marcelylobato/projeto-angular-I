import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preco'
})
export class PrecoPipe implements PipeTransform {

  transform(servico: string): number {
    
    const precos: { [key: string]: number } = {
      "corte": 50,
      "coloracao": 150,
      "manicure-pedicure": 40,
      "penteados": 80,
      "maquiagem": 100,
      "tratamento": 120,
      "depilacao": 70,
    }

    return precos[servico]

  }

}
