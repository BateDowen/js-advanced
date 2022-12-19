class Company{
    constructor(){
        this.department = {}
    };
    addEmployee(name, salary, position, department){
        if (name === '' || name === null || name === undefined) {
            throw Error `Invalid input!`;
        }
        if (position === '' || position === null || position === undefined) {
            throw Error `Invalid input!`;
        }
        if (department === '' || department === null || department === undefined) {
            throw Error `Invalid input!`;
        }
        if (salary < 0) {
            throw Error `Invalid input!`;
        }
    let employee = {
        name,
        salary,
        position
    }
    if (!this.department.hasOwnProperty(department)) {
        this.department[department] = [];
    
        
    }
    if (!this.department[department].hasOwnProperty(employee.name)) {
        this.department[department].push(employee);
        
    }
        
        return `New employee is hired. Name: ${name}. Position: ${position}`
    };
    bestDepartment(){
       for(let key in this.department){
        let totalSalary = 0;
        let averageSalary = this.department[key].map((x) => totalSalary += x.salary);
        averageSalary = totalSalary / averageSalary.length;
        this.department[key].push(averageSalary)
       };
       
    

    }
}

let c = new Company();
c.addEmployee('Stanimir', 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
