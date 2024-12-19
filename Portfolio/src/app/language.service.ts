import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', // Der Service ist in der gesamten Anwendung verfügbar
})
export class LanguageService {
  // BehaviorSubject wird verwendet, um den aktuellen Wert zu halten und Änderungen zu verfolgen
  private isDESubject = new BehaviorSubject<boolean>(true); // Initialwert ist true (Deutsch)

  // Getter-Methode, um den aktuellen Wert zu erhalten
  getLanguage() {
    return this.isDESubject.asObservable(); // Gibt den Wert als Observable zurück
  }

  // Setter-Methode, um den Wert zu setzen
  setLanguage(isDE: boolean) {
    this.isDESubject.next(isDE); // Ändert den Wert und informiert alle Abonnenten
  }
}
