import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, merge, Subject, timer } from 'rxjs';
import { debounce, takeUntil, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-zombie',
  templateUrl: './zombie.component.html',
  styleUrls: ['./zombie.component.scss']
})
export class ZombieComponent implements OnInit, OnDestroy {
  @ViewChild('zombie') public zombie;
  public healthPercents = 0;
  public healthValue = 0;

  private step = 50;
  private clickStep = 100;
  private maxHealth = 1000;
  private startPercents = 100;
  private until: Subject<void> = new Subject<void>();

  public ngOnInit() {
    this.initGame();
  }

  public initGame() {
    this.healthPercents = this.startPercents;
    this.healthValue = this.maxHealth;
    const healtSpend = interval(1000);
    const zombieClick = fromEvent(this.zombie.nativeElement, 'click');

    merge(healtSpend, zombieClick)
      .pipe(
        debounce((v: any) => {
          if(Number.isInteger(v)) {
            return timer(500);
          }
          return timer(0);
        }),
        takeWhile(() => this.healthPercents !== 0),
        takeUntil(this.until)
  )
      .subscribe((v: any) => {
    if (Number.isInteger(v)) {
      this.healthValue = this.healthValue - this.step;
      this.healthPercents = this.healthValue * 100 / this.maxHealth;
    } else {
      if (this.healthValue + this.clickStep >= this.maxHealth) {
        this.healthPercents = 100;
        this.healthValue = this.maxHealth;
      } else {
        this.healthPercents = this.healthPercents + (this.clickStep * 100 / this.maxHealth);
        this.healthValue = this.healthValue + this.clickStep;
      }
    }
    });
  }

  public ngOnDestroy() {
    this.until.next();
    this.until.complete();
  }
}
