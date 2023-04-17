export class MyData {
  public constructor(id: string, name: string, min_size: string) {
    this.id = id;
    this.name = name;
    this.min_size = min_size;
  }
  id: string;
  name: string;
  min_size: string;
}

export class TData {
  public constructor(data: Array<MyData>) {
    this.data = data;
  }
  data: Array<MyData>;
}
