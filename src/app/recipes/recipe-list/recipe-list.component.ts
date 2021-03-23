import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is a desc', 'https://cdn.stocksnap.io/img-thumbs/960w/bird-wildlife_6VWR9PLM7R.jpg'),
    new Recipe('A test Recipe', 'This is a desc', 'https://cdn.stocksnap.io/img-thumbs/960w/bird-wildlife_6VWR9PLM7R.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
