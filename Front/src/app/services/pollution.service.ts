import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // <-- 1. Importer 'of'
import { Pollution } from '../models/pollution.model';
// import { environnement } from '../environnements/environnement'; // <-- 2. Plus besoin
import { POLLUTIONS_DATA } from '../data/mock-pollution'; // <-- 3. Assure-toi que ce fichier exporte bien (voir point 2)

@Injectable({
  providedIn: 'root'
})
export class PollutionService {
  
  // Notre "fausse base de données" locale
  private pollutions: Pollution[] = POLLUTIONS_DATA;

  // 4. Constructeur vide (plus de http)
  constructor() { }

  /**
   * AJOUTE une nouvelle pollution à la liste locale
   */
  addPollution(pollutionData: Omit<Pollution, 'id'>): Observable<Pollution> {
    
    // 5. Logique de mock (plus de this.http)
    const newPollution: Pollution = {
      ...pollutionData,
      id: this.generateMockId() // Génère un ID aléatoire
    };
    this.pollutions.push(newPollution);
    console.log("Service: Ajout du mock", newPollution);
    return of(newPollution);
  }

  /**
   * RÉCUPÈRE toutes les pollutions
   */
  getPollutions(): Observable<Pollution[]> {
    console.log("Service: Renvoi des mocks intégrés");
    return of(this.pollutions); // <-- 'of' est maintenant défini
  }

  /**
   * SUPPRIME une pollution
   */
  deletePollution(id: string): Observable<{}> {
    // 6. Logique de mock (plus de this.http)
    this.pollutions = this.pollutions.filter(p => p.id !== id);
    console.log("Service: Suppression du mock ID:", id);
    return of({}); 
  }

  /**
   * RÉCUPÈRE une pollution par son ID
   */
  getPollutionById(id: string): Observable<Pollution | undefined> {
    // 7. Comparaison 'string' vs 'string' (on va corriger la data au point 2)
    const pollution = this.pollutions.find(p => p.id === id);
    console.log("Service: Recherche du mock ID:", id, "Trouvé:", pollution);
    return of(pollution); // <-- 'of' est maintenant défini
  }

  /**
   * MODIFIE une pollution
   */
  // 8. Signature corrigée (plus de this.http)
  updatePollution(updatedPollution: Pollution): Observable<Pollution> {
    const index = this.pollutions.findIndex(p => p.id === updatedPollution.id);
    if (index !== -1) {
      this.pollutions[index] = updatedPollution;
      console.log("Service: Modification du mock", updatedPollution);
    }
    return of(updatedPollution);
  }
  
  /**
   * Utilitaire pour créer un ID de mock
   */
  private generateMockId(): string {
    return Math.random().toString(36).substring(2, 8);
  }
}