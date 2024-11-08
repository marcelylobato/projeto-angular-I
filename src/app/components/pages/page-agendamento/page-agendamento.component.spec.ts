import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAgendamentoComponent } from './page-agendamento.component';

describe('PageAgendamentoComponent', () => {
  let component: PageAgendamentoComponent;
  let fixture: ComponentFixture<PageAgendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageAgendamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
