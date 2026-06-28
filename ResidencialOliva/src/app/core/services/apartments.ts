import { inject, Injectable } from '@angular/core';

import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  deleteDoc,
  doc,
  updateDoc
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { Apartment } from '../models/apartment.model';

@Injectable({
  providedIn: 'root'
})
export class Apartments {

  private firestore = inject(Firestore);

  private apartmentsCollection =
    collection(this.firestore, 'apartments');

  getApartments(): Observable<Apartment[]> {

    return collectionData(
      this.apartmentsCollection,
      {
        idField: 'id'
      }
    ) as Observable<Apartment[]>;

  }

  addApartment(apartment: Apartment) {

    return addDoc(
      this.apartmentsCollection,
      apartment
    );

  }

  updateApartment(id: string, apartment: Apartment) {

    return updateDoc(
      doc(this.firestore, `apartments/${id}`),
      { ...apartment }
    );

  }

  deleteApartment(id: string) {

    return deleteDoc(
      doc(this.firestore, `apartments/${id}`)
    );

  }

}