import { inject, Injectable } from '@angular/core';

import {
  Firestore,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
  onSnapshot,
  CollectionReference,
  DocumentData,
} from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { Apartment } from '../models/apartment.model';

@Injectable({
  providedIn: 'root',
})
export class Apartments {
  private firestore = inject(Firestore);

  private apartmentsCollection = collection(
    this.firestore,
    'apartments'
  ) as CollectionReference<DocumentData>;

  getApartments(): Observable<Apartment[]> {
    return new Observable<Apartment[]>((observer) => {
      const unsubscribe = onSnapshot(
        this.apartmentsCollection,
        (snapshot) => {
          const apartments = snapshot.docs.map((document) => {
            return {
              id: document.id,
              ...document.data(),
            } as Apartment;
          });

          observer.next(apartments);
        },
        (error) => {
          observer.error(error);
        }
      );

      return () => unsubscribe();
    });
  }

  addApartment(apartment: Apartment) {
    const { id, ...data } = apartment;

    return addDoc(this.apartmentsCollection, {
      ...data,
      createdAt: new Date(),
    });
  }

  updateApartment(id: string, apartment: Apartment) {
    const { id: apartmentId, ...data } = apartment;

    return updateDoc(doc(this.firestore, `apartments/${id}`), {
      ...data,
    });
  }

  deleteApartment(id: string) {
    return deleteDoc(doc(this.firestore, `apartments/${id}`));
  }
}