import { IUserEntity } from "../@types/entities/IUserEntity";

let data: IUserEntity[] = [{
  id: 1,
  email: "giuseppe.salerno@email.com",
  role: {
    id: 1,
    title: "Ciao",
    description: "Sqwazzer"
  }
  
}, {
  id: 2,
  email: "marco.carollo@email.com",
  role: {
    id: 2,
    title: "Ciao",
    description: "Hide"
  }
}, {
  id: 3,
  email: "davide.lobue@email.com",
  role: {
    id: 3,
    title: "Ciao",
    description: "Davide"
  }

}];

export default class UsersAdapter {

  public async fetchUsersAsync(): Promise<IUserEntity[]> {
    // Delay data fetching
    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    return data;
  }

  public async fetchUsersDetailsAsync(email:string): Promise<IUserEntity | undefined> {
    data.map(user => {
      if((user.email === email) ){
          return user;
      }
       })
       console.log("fetchUsersDetailAsync");
   return;
  }

  createUser(user: IUserEntity): void {
    data = [...data, user];
  }

  updateUser(newUser: IUserEntity): void {
    data.map((user, index) => {
      if (newUser.id ===  user.id) {
        data[index] = newUser;
      }
    });
  }

  deleteUser(id: number): void {
    data.map((user, index) => {
      if (user.id === id) {
        delete data[index];
      }
    });
  }
}