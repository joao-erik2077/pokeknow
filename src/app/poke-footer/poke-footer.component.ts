import { Component } from '@angular/core';

@Component({
  selector: 'app-poke-footer',
  templateUrl: './poke-footer.component.html',
  styleUrls: ['./poke-footer.component.scss'],
})
export class PokeFooterComponent{
  data: any = { myToggle: true };
  constructor() { }

}
