import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces/IUser';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (user: IUser): Promise<IUser> => {
    const { username, classe, level, password } = user;

    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    const { insertId: id } = result;
    const newUser: IUser = { id, username, classe, level, password };
    
    return newUser;
  };

  public getByUsername = async (username: string): Promise<IUser | null> => {
    const [data] = await this.connection.execute(
      'SELECT * FROM Trybesmith.Users WHERE username = ?',
      [username],
    );
    const [user] = data as IUser[];

    return user;
  };
}
