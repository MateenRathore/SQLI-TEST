
  type Animal = {
    id: number;
    name: string;
    age: number;
    type: "dog" | "cat" | "bird" | "fish" | "reptile";
    breed: string;
    color: string;
    owner: string;
  };

  type Owners = {
    name:string;
    address:string;
    phone:number;
    lastBoughtDate: Date
  }

   interface ExtendedAnimal extends Omit<Animal, "owner"> {
    id: number;
    name: string;
    age: number;
    type: "dog" | "cat" | "bird" | "fish" | "reptile";
    breed: string;
    color: string;
    Owners:Owners[]
  };
