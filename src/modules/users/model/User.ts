import { v4 as uuidV4 } from "uuid";

class User {
  id?: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  update_at: Date;

  constructor(id?: string, name?: string, created_at?: Date) {
    if (!id) this.id = uuidV4();

    if (!created_at) this.created_at = new Date();

    this.update_at = new Date();
    this.admin = false;
  }
}

export { User };
