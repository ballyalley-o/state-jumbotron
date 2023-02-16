const PageState = function () {
 let currentState = new HomeState(this);

  this.init = function() {
    this.change(new AboutState());
  }

  this.change = function(state) {
    currentState = state;
  }
}

//home
const HomeState = function(page) {
    document.querySelector('#heading').textContent = null;
    document.querySelector("#content").innerHTML = `<div class="jumbotron">
        <h1 class="display-1">Welcome!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>
        </div>`;

}

//about
const AboutState = function(page) {
    document.querySelector('#heading').innerHTML = `<h1 class="display-1">About Us</h1>`;
    document.querySelector("#content").innerHTML = `
     <div class="jumbotron jumbotron-fluid  mx-auto">
        <div class="container">
            <h1 class="display-4">1989</h1>
            <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
        </div>`;
}

//contact
const ContactState = function (page) {
    document.querySelector('#heading').innerHTML = `<h1 class="display-1">Contact Us</h1>`;
    document.querySelector("#content").innerHTML = `
    <form>
        <div class="form-group">
          <label>Name</label>
          <input type="text" class="form-control">
        </div>
        <div class="form-group">
          <label>Email address</label>
          <input type="email" class="form-control">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>`;
}


// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();


//UI
const home = document.querySelector('#home')
const about = document.querySelector('#about')
const contact = document.querySelector('#contact')

//Home
home.addEventListener('click', (e) => {
    page.change(new HomeState);

    e.preventDefault();
})

//About
about.addEventListener('click', (e) => {
    page.change(new AboutState);

    e.preventDefault();
})

//Contact
contact.addEventListener('click', (e) => {
    page.change(new ContactState);

    e.preventDefault();
})