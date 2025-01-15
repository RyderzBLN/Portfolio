import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-footer-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer-section.component.html',
  styleUrl: './footer-section.component.scss'
})
export class FooterSectionComponent {
constructor(public globalService: GlobalService) {}
}
