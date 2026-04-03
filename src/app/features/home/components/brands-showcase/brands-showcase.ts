import { Component } from '@angular/core';

@Component({
  selector: 'app-brands-showcase',
  imports: [],
  templateUrl: './brands-showcase.html',
  styleUrl: './brands-showcase.css',
})
export class BrandsShowcase {
  brands = ['Apple', 'Samsung', 'Sony', 'Microsoft', 'Google', 'Logitech', 'Bose'];
}

