export interface DataModel {
  id?: string;
  title?: string;
  description?: string;
  createdAt?: Date;
  updatedAt?: Date;
  template?: any;
  [x: string]: any;

  convertToDatabaseModel();
}