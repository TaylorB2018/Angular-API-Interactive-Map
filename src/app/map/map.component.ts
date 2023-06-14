import { Component } from '@angular/core';
import { CountryServiceService } from '../country-service.service';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [ CountryServiceService ]
})
export class MapComponent {
 countryData: any;
  

 constructor(private countryService: CountryServiceService) {}

 onSvgClick(event: MouseEvent) {
  // Check if a path element was clicked
  if (event.target instanceof SVGPathElement) {
    // Get the id attribute of the clicked path element
    let id = (event.target as SVGPathElement).getAttribute('id');
    // use the id as parameter for "getData" method imported from CountryServiceService
    this.countryService.getData(id).subscribe((data: any) => {
      this.countryData =data;
    });
  
  }
  }
}
