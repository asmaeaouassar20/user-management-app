export default function UsersAdd(){
   
    return <form>
  <div class="mb-3">
    <label for="id" class="form-label">Current id</label>
    <input type="email" class="form-control" id="id" aria-describedby="emailHelp" />
  </div>
  <div class="mb-3">
    <label for="firstname" class="form-label">First Name</label>
    <input type="text" class="form-control" id="firstname" aria-describedby="emailHelp" />
  </div>
  <div class="mb-3">
    <label for="lastname" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="lastname" />
  </div>
   <div class="mb-3">
    <label for="Country" class="form-label">Country</label>
    <select class="form-select" aria-label="Default select example">
        <option selected >Open this select menu</option>
        <option value="morocco">Morocco</option>
        <option value="tunisia">Tunisia</option>
        <option value="algeria">Algéria</option>
    </select>        
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
}