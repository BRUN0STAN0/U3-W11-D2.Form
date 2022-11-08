import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hero } from '../classes/hero';

@Component({
  selector: 'app-form-driven',
  templateUrl: './form-driven.component.html',
  styleUrls: ['./form-driven.component.scss'],
})
export class FormDrivenComponent implements OnInit {
  @ViewChild('f') mioForm!: NgForm;

  superHero: Hero = new Hero();

  constructor() {}

  ngOnInit(): void {}

  createHero() {
    this.superHero.name = this.mioForm.value.name;
    this.superHero.alterEgo = this.mioForm.value.alterEgo;
    this.superHero.power = this.mioForm.value.power;
    this.superHero.enemy = this.mioForm.value.enemy;
    this.superHero.planet = this.mioForm.value.planet;
    this.superHero.weakness = this.mioForm.value.weakness;
    console.log(this.superHero);
  }
}
