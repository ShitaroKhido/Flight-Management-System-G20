import { EmployeeSkill } from "../Enums/EmployeeSkill";
import { Employee } from "./Employee";

export class Pilot extends Employee{
    constructor(firtName: string, lastName: string, height: number, weight: number, yearOfExperiences: number, skillBased: EmployeeSkill){
        super(firtName, lastName, height, weight, yearOfExperiences, skillBased)
    }
}