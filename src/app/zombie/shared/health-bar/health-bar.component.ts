import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-health-bar',
  templateUrl: './health-bar.component.html',
  styleUrls: ['./health-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HealthBarComponent {
  @Output() public initClicker: EventEmitter<void> = new EventEmitter<void>();

  @Input() public healthPercents = 0;
  @Input() public healthValue = 1000;

  public restart() {
    this.initClicker.emit();
  }
}
