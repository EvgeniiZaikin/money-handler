import { TFirebaseDocument, TFirebaseDocumentData, TFirebaseSnapshotOptions } from './types';

export const isDevelop = () => process.env.NODE_ENV !== 'production';
export const isBrowser = () => typeof window !== 'undefined';

export const firebaseConverter = <T>() => ({
  toFirestore(category: T): TFirebaseDocumentData {
    return category;
  },

  fromFirestore(snapshot: TFirebaseDocument<T>, options: TFirebaseSnapshotOptions): T {
    return snapshot.data(options)! as T;
  },
});
