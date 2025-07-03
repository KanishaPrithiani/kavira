import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sampleitem } from './sampleitem';

describe('Sampleitem', () => {
  let component: Sampleitem;
  let fixture: ComponentFixture<Sampleitem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sampleitem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sampleitem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
