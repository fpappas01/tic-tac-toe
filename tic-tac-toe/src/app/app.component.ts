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
  minmaxService: MinmaxService = inject(MinmaxService);


  onClickTile(num: number) {
    if (!this.numsSymbols[num] && !this.winner) {
      this.turn = 1 - this.turn;
      this.numsSymbols[num] = this.symbols[this.turn];

      this.minmaxService.getMove(this.numsSymbols.slice(1)).subscribe((res) => {
        console.log(res);

        // this.numsSymbols[res] = 'X';
      });

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
      if (this.winner) {
        window.alert('Winner');
      }
    }
  }

  onButtonClick() {
    this.numsSymbols = this.resetArr.slice();
    this.winner = '';
    this.turn = 0;
  }
}
