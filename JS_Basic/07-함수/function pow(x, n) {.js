let user = {
    name: "Jin",
    subname: "Smith",
  
      get fullName() {
          return `${this.name} ${this.subname}`;
        }
  };
  
  console.log(user.fullName); // Jin Smith