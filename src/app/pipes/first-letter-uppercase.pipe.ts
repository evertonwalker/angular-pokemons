import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'FisrtLetterUppercase' })
export class FirstLetterUppercase implements PipeTransform {
  transform(valueToTransform: string){

    const splitedText = valueToTransform.split('');
    splitedText[0] = splitedText[0].toUpperCase();

    return splitedText.toString().replace(/,/g, '');

  }
}
