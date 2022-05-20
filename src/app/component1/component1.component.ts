import { Component, Inject, OnInit } from '@angular/core';
import { TEST_TOKEN, tokenValue } from '../token';

@Component({
  selector: 'cmp1',
  template: 'value from inject():{{title}}   value from @Inject:{{title2}}',
  providers: [
    {
      provide: TEST_TOKEN,
      useValue: 'CMP1',
    },
  ],
})
export class Component1Component implements OnInit {
  title: string | undefined;
  constructor(@Inject(TEST_TOKEN) public title2: string) {}

  ngOnInit() {
    this.title = tokenValue();
  }
}
