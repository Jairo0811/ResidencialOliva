import { inject, Injectable } from '@angular/core';
import {
  Storage as FirebaseStorage,
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from '@angular/fire/storage';

export interface StorageUploadResult {
  downloadUrl: string;
  fullPath: string;
  fileName: string;
}

export interface StorageDeleteSummary {
  deleted: string[];
  failed: string[];
}

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly storage = inject(FirebaseStorage);

  private readonly allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
  private readonly maxFileSizeBytes = 5 * 1024 * 1024;

  uploadImage(
    file: File,
    folder: string,
    onProgress?: (progress: number) => void,
  ): Promise<StorageUploadResult> {
    this.validateImage(file);

    const safeName = this.createSafeFileName(file.name);
    const fullPath = `${folder}/${crypto.randomUUID()}-${safeName}`;
    const storageReference = ref(this.storage, fullPath);
    const uploadTask = uploadBytesResumable(storageReference, file, {
      contentType: file.type,
      customMetadata: {
        originalName: file.name,
      },
    });

    return new Promise<StorageUploadResult>((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          onProgress?.(Math.round(progress));
        },
        (error) => reject(error),
        async () => {
          try {
            const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);

            resolve({
              downloadUrl,
              fullPath: uploadTask.snapshot.ref.fullPath,
              fileName: file.name,
            });
          } catch (error) {
            reject(error);
          }
        },
      );
    });
  }

  async uploadImages(
    files: File[],
    folder: string,
    onFileProgress?: (fileIndex: number, progress: number) => void,
  ): Promise<StorageUploadResult[]> {
    if (files.length === 0) {
      return [];
    }

    return Promise.all(
      files.map((file, index) =>
        this.uploadImage(file, folder, (progress) => {
          onFileProgress?.(index, progress);
        }),
      ),
    );
  }

  deleteImage(pathOrUrl: string): Promise<void> {
    if (!pathOrUrl.trim()) {
      return Promise.resolve();
    }

    return deleteObject(ref(this.storage, pathOrUrl));
  }

  async deleteImages(pathsOrUrls: string[]): Promise<StorageDeleteSummary> {
    const uniqueValues = [...new Set(pathsOrUrls.filter((value) => value.trim()))];

    const results = await Promise.allSettled(
      uniqueValues.map((value) => this.deleteImage(value)),
    );

    const summary: StorageDeleteSummary = {
      deleted: [],
      failed: [],
    };

    results.forEach((result, index) => {
      const value = uniqueValues[index];

      if (result.status === 'fulfilled') {
        summary.deleted.push(value);
      } else {
        summary.failed.push(value);
      }
    });

    return summary;
  }

  private validateImage(file: File): void {
    if (!this.allowedTypes.includes(file.type)) {
      throw new Error('Solo se permiten imágenes JPG, PNG o WEBP.');
    }

    if (file.size > this.maxFileSizeBytes) {
      throw new Error('Cada imagen debe pesar 5 MB o menos.');
    }
  }

  private createSafeFileName(fileName: string): string {
    return fileName
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9.]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
}
