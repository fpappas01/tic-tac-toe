import { Component, inject } from '@angular/core';
import { MinmaxService } from './minmax.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tic-tac-toe';
  symbols: string[] = ['X', 'O'];
  turn: number = 0;
  numsSymbols: string[] = ['', '', '', '', '', '', '', '', '', ''];
  resetArr: string[] = ['', '', '', '', '', '', '', '', '', ''];
  winner: string = '';
  private symbolCounter: number = 9;
  gameEnded: boolean = false;
  minmaxService: MinmaxService = inject(MinmaxService);

  onClickTile(num: number) {
    if (!this.numsSymbols[num] && !this.winner) {
      this.turn = 1 - this.turn;
      this.numsSymbols[num] = this.symbols[this.turn];
      this.symbolCounter--;
      this.winner += this.minmaxService.gameHasEnded(
        0,
        this.numsSymbols,
        this.symbols
      );
      this.winner += this.minmaxService.gameHasEnded(
        1,
        this.numsSymbols,
        this.symbols
      );
      if (this.symbolCounter == 0) {
        this.winner = 'draw';
      }
      if (this.winner) {
        this.gameEnded = true;
      }
      if (this.turn === 1) {
        this.minmaxService
          .getMove(this.numsSymbols.slice(1))
          .subscribe((res) => {
            this.onClickTile(res + 1);
          });
      }
    }
  }

  onButtonClick() {
    this.numsSymbols = this.resetArr.slice();
    this.winner = '';
    this.turn = 0;
    this.symbolCounter = 9;
    this.gameEnded = !this.gameEnded;
  }
}
