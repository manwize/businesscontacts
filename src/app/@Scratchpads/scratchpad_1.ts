// scratchpad1_.ts


addBusiness( // app.component.ts
  company: string,
  category: string,
  years_in_business: number,
  description: string,
  phone: string,
  email: string,
  street_address: string,
  city: string,
  state: string,
  zipcode: string) {
  var created_at = new Date().toString();

  var newBusiness = {
    company: company,
    category: category,
    years_in_business: years_in_business,
    descriptit.tson: description,
    phone: phone,
    email: email,
    street_address: street_address,
    city: city,
    state: state,
    zipcode: zipcode,
    created_at: created_at
  }
  console.log(newBusiness);
} // END addBusiness() in * app.component.ts


addBusiness(newBusiness){ // firebase.service.ts
    return this.businesses.push(newBusiness);
  } // END call of addBusiness in * irebase.service.ts