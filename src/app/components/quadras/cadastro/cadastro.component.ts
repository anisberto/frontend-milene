import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroQuadraComponent implements OnInit {
  quadraForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.quadraForm = this.fb.group({
      nome: ['', Validators.required],
      ativo: [false, Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.quadraForm.valid) {
      console.log(this.quadraForm.value);
    }
  }
}