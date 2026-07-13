import { inject, Injectable } from '@angular/core';
import {
  CollectionReference,
  DocumentData,
  DocumentReference,
  Firestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  updateDoc,
} from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';

import { Apartment } from '../models/apartment.model';

@Injectable({
  providedIn: 'root',
})
export class Apartments {
  private readonly firestore = inject(Firestore);

  private readonly apartmentsCollection = collection(
    this.firestore,
    'apartments',
  ) as CollectionReference<DocumentData>;

  getApartments(): Observable<Apartment[]> {
    return new Observable<Apartment[]>((observer) => {
      const unsubscribe = onSnapshot(
        this.apartmentsCollection,
        (snapshot) => {
          const apartments = snapshot.docs
            .map(
              (document) =>
                ({
                  id: document.id,
                  ...document.data(),
                }) as Apartment,
            )
            .sort((a, b) => a.name.localeCompare(b.name));

          observer.next(apartments);
        },
        (error) => observer.error(error),
      );

      return unsubscribe;
    });
  }

  getAvailableApartments(): Observable<Apartment[]> {
    return this.getApartments().pipe(
      map((apartments) => apartments.filter((apartment) => apartment.status === 'Disponible')),
    );
  }

  getApartmentById(id: string): Observable<Apartment | null> {
    return new Observable<Apartment | null>((observer) => {
      const apartmentReference = doc(this.firestore, `apartments/${id}`);

      const unsubscribe = onSnapshot(
        apartmentReference,
        (snapshot) => {
          if (!snapshot.exists()) {
            observer.next(null);
            return;
          }

          observer.next({
            id: snapshot.id,
            ...snapshot.data(),
          } as Apartment);
        },
        (error) => observer.error(error),
      );

      return unsubscribe;
    });
  }

  addApartment(apartment: Apartment): Promise<DocumentReference<DocumentData>> {
    const { id, createdAt, ...data } = apartment;

    return addDoc(this.apartmentsCollection, {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  }

  updateApartment(id: string, apartment: Apartment): Promise<void> {
    const { id: apartmentId, createdAt, ...data } = apartment;

    return updateDoc(doc(this.firestore, `apartments/${id}`), {
      ...data,
      updatedAt: serverTimestamp(),
    });
  }

  updateApartmentStatus(id: string, status: Apartment['status']): Promise<void> {
    return updateDoc(doc(this.firestore, `apartments/${id}`), {
      status,
      updatedAt: serverTimestamp(),
    });
  }

  deleteApartment(id: string): Promise<void> {
    return deleteDoc(doc(this.firestore, `apartments/${id}`));
  }
}
