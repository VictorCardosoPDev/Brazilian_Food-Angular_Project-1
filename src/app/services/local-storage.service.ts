import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  // Salvar dados no localStorage
  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  // Recuperar dados do localStorage
  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  // Remover dados do localStorage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Limpar todos os dados do localStorage
  clear(): void {
    localStorage.clear();
  }
}
