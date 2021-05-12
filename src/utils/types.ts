import reducers from 'store/reducers';

export type TReducersState = ReturnType<typeof reducers>;

export type TFirebaseDocumentData = firebase.default.firestore.DocumentData;
export type TFirebaseCollection = firebase.default.firestore.CollectionReference;
export type TFirebaseSnapshot = firebase.default.firestore.QuerySnapshot<TFirebaseDocumentData>;
export type TFirebaseSnapshotOptions = firebase.default.firestore.SnapshotOptions;
export type TFirebaseDocument<T> = firebase.default.firestore.QueryDocumentSnapshot<T>;
export type TFirebaseDocumentReference = firebase.default.firestore.DocumentReference;
export type TFirebaseType = {
  id: string;
  label: string;
};
export type TFirebaseCategory = {
  id: string;
  image: string;
  label: string;
  // type: TFirebaseDocumentReference;
};
export type TFirebaseExpense = {
  sum: number;
  datetime: Date;
  category: TFirebaseDocumentReference;
};

export type TCategory = {
  id: string;
  image: string;
  label: string;
};
