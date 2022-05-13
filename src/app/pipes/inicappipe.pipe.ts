import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inicappipe'
})
export class InicappipePipe implements PipeTransform {

  transform(value:string,v:number) {

    if(v){
      v=v;
    }
    else{
      v=1
    }
    return value.substring(0,v).toUpperCase()+value.substring(v);


  }

}
