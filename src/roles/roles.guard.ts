import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

//The RolesGuard enforces role-based access control by checking the user’s role
//from the JWT token and comparing it to the required roles for each route.
@Injectable()
export class RolesGuard implements CanActivate {

  //Reflector service to access custom metadata on routes
  constructor( private reflector: Reflector) {}

  //This method is the core of the guard, controlling whether access to a route should be allowed based on the user's role
  canActivate(
    context: ExecutionContext,
  ): boolean {
    //Retrieve required roles from metadata
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!requiredRoles) return true;      //No roles required, allow access

    //Get user object from request
    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.includes(user.role); //Allow if user role matches
  }
}
