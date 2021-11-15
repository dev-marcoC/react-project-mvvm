import  ISessionEntity  from "../@types/entities/ISessionEntity";
import { SessionModel } from "../models";


export class LoginViewModel {
  
  private readonly _sessionmodel = SessionModel.getInstance();
  private static thisInstance: LoginViewModel;

  public static getInstance(): LoginViewModel {
    if (!LoginViewModel.thisInstance) {
        LoginViewModel.thisInstance = new LoginViewModel();
    }
    return LoginViewModel.thisInstance;
  }

  public get session(): ISessionEntity{
    return this._sessionmodel.session;
  }

  public get isLogginIn(): boolean {
    console.log("VM Loggingin ",this._sessionmodel.isLoggingIn)
    return this._sessionmodel.isLoggingOut;

  }

  public get errorMessages(): string[] {
    return this._sessionmodel.errorMessages;
  }

  public async fetchSession(email: string, password: string){
    await this._sessionmodel.fetchSession(email, password);
    
  }

  public async flushSession() {
    await this._sessionmodel.flushSession();
  }

  public flushErrorMessages() {
    this._sessionmodel.flushErrorMessages();
  }
  
}