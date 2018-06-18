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
  }

  public ngOnDestroy() {
    this.until.next();
    this.until.complete();
  }
}
