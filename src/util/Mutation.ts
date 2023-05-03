import { Variables } from 'graphql-request';
import { AllowedMutation, MUTATIONS } from '../constants/mutations';

export class Mutation {
  type: AllowedMutation;
  subType: string;
  document: string;
  variables?: Variables;

  constructor(type: AllowedMutation, subType: string) {
    this.type = type;
    this.subType = subType;

    this.document = MUTATIONS[type];
    this.document = this.document.replace(/TYPE/g, subType);
  }

  setVariables(variables: Variables) {
    this.variables = variables;
  }
}
