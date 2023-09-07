import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MinmaxService {
  constructor(private http: HttpClient) { }
  postURL = 'http://localhost:3000/';

  getMove(board: any) {
    return this.http.post<number>(this.postURL, {
      "arr": board
    });
  }

  gameHasEnded(sym: number, numsSymbols: string[], symbols: string[]) {
    if (
      numsSymbols[1] === symbols[sym] &&
      numsSymbols[2] === symbols[sym] &&
      numsSymbols[3] === symbols[sym]
    ) {
      return symbols[sym];
    } else if (
      numsSymbols[4] === symbols[sym] &&
      numsSymbols[5] === symbols[sym] &&
      numsSymbols[6] === symbols[sym]
    ) {
      return symbols[sym];
    } else if (
      numsSymbols[7] === symbols[sym] &&
      numsSymbols[8] === symbols[sym] &&
      numsSymbols[9] === symbols[sym]
    ) {
      return symbols[sym];
    } else if (
      numsSymbols[7] === symbols[sym] &&
      numsSymbols[8] === symbols[sym] &&
      numsSymbols[9] === symbols[sym]
    ) {
      return symbols[sym];
    } else if (
      numsSymbols[1] === symbols[sym] &&
      numsSymbols[4] === symbols[sym] &&
      numsSymbols[7] === symbols[sym]
    ) {
      return symbols[sym];
    } else if (
      numsSymbols[2] === symbols[sym] &&
      numsSymbols[5] === symbols[sym] &&
      numsSymbols[8] === symbols[sym]
    ) {
      return symbols[sym];
    } else if (
      numsSymbols[3] === symbols[sym] &&
      numsSymbols[6] === symbols[sym] &&
      numsSymbols[9] === symbols[sym]
    ) {
      return symbols[sym];
    } else if (
      numsSymbols[1] === symbols[sym] &&
      numsSymbols[5] === symbols[sym] &&
      numsSymbols[9] === symbols[sym]
    ) {
      return symbols[sym];
    } else if (
      numsSymbols[3] === symbols[sym] &&
      numsSymbols[5] === symbols[sym] &&
      numsSymbols[7] === symbols[sym]
    ) {
      return symbols[sym];
    } else {
      return '';
    }
  }
}
